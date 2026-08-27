import type { JSX } from "react";
import { getBlogCategory } from "../data/blogCategories";

export type ContentBlock =
  | { type: "heading"; level?: 2 | 3; text: string }
  | { type: "paragraph"; text: string }
  | { type: "bulletList"; title?: string; items: string[] }
  | { type: "calloutBox"; title?: string; text: string }
  | { type: "statGrid"; items: { label: string; value: string }[] };

interface BlockRendererProps {
  blocks: ContentBlock[];
  category?: string;
}

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

/** Renders plain text with [label](url) links and **bold** spans. */
function renderInlineText(text: string) {
  const parts: (string | JSX.Element)[] = [];
  const re = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = re.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    const token = match[0];
    const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(token);
    if (link) {
      parts.push(
        <a
          key={key++}
          href={link[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-600 hover:text-accent-500 underline underline-offset-2"
        >
          {link[1]}
        </a>
      );
    } else {
      parts.push(<strong key={key++}>{token.slice(2, -2)}</strong>);
    }
    last = match.index + token.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts.length > 0 ? parts : text;
}

// Defense in depth: re-validate against the whitelist schema at render time too,
// in case a malformed/unexpected shape ever reaches this component.
function sanitizeBlocks(blocks: unknown): ContentBlock[] {
  if (!Array.isArray(blocks)) return [];
  const out: ContentBlock[] = [];
  for (const raw of blocks) {
    if (!raw || typeof raw !== "object") continue;
    const b = raw as Record<string, unknown>;
    switch (b.type) {
      case "heading":
        if (isNonEmptyString(b.text)) {
          out.push({ type: "heading", level: b.level === 3 ? 3 : 2, text: b.text });
        }
        break;
      case "paragraph":
        if (isNonEmptyString(b.text)) {
          out.push({ type: "paragraph", text: b.text });
        }
        break;
      case "bulletList":
        if (Array.isArray(b.items)) {
          const items = b.items.filter(isNonEmptyString);
          if (items.length > 0) {
            out.push({
              type: "bulletList",
              title: isNonEmptyString(b.title) ? b.title : undefined,
              items,
            });
          }
        }
        break;
      case "calloutBox":
        if (isNonEmptyString(b.text)) {
          out.push({
            type: "calloutBox",
            title: isNonEmptyString(b.title) ? b.title : undefined,
            text: b.text,
          });
        }
        break;
      case "statGrid":
        if (Array.isArray(b.items)) {
          const items = (b.items as unknown[])
            .filter(
              (it): it is { label: string; value: string } =>
                !!it &&
                typeof it === "object" &&
                isNonEmptyString((it as Record<string, unknown>).label) &&
                isNonEmptyString((it as Record<string, unknown>).value)
            )
            .map((it) => ({ label: it.label, value: it.value }));
          if (items.length > 0) out.push({ type: "statGrid", items });
        }
        break;
      default:
        break;
    }
  }
  return out;
}

export default function BlockRenderer({ blocks, category }: BlockRendererProps) {
  const cat = getBlogCategory(category);
  const safeBlocks = sanitizeBlocks(blocks);

  if (safeBlocks.length === 0) return null;

  return (
    <div className="space-y-8">
      {safeBlocks.map((block, i) => {
        switch (block.type) {
          case "heading": {
            const Tag = block.level === 3 ? "h3" : "h2";
            const className =
              block.level === 3
                ? `text-xl font-bold ${cat.accentClass} mb-2`
                : `text-2xl font-bold ${cat.accentClass} mt-8 mb-4 border-b border-slate-100 pb-2`;
            return (
              <Tag key={i} className={className}>
                {block.text}
              </Tag>
            );
          }
          case "paragraph":
            return (
              <p key={i} className="text-lg leading-relaxed text-slate-600">
                {renderInlineText(block.text)}
              </p>
            );
          case "bulletList":
            return (
              <div key={i} className="space-y-4">
                {block.title && (
                  <h3 className={`text-xl font-bold ${cat.accentClass}`}>{block.title}</h3>
                )}
                <ul className="space-y-3">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-slate-700">
                      <span className={`mt-2 w-2 h-2 rounded-full flex-shrink-0 ${cat.bulletClass}`} />
                      <span>{renderInlineText(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          case "calloutBox":
            return (
              <div key={i} className={`p-6 rounded-2xl ${cat.calloutClass}`}>
                {block.title && (
                  <h3 className={`text-lg font-bold ${cat.accentClass} mb-2`}>{block.title}</h3>
                )}
                <p className="text-slate-700 leading-relaxed">{renderInlineText(block.text)}</p>
              </div>
            );
          case "statGrid":
            return (
              <div key={i} className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {block.items.map((item, j) => (
                  <div key={j} className="bg-slate-50 rounded-2xl p-4 text-center border border-slate-100">
                    <div className={`text-2xl font-extrabold ${cat.statValueClass}`}>{item.value}</div>
                    <div className="text-sm text-slate-500 mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
