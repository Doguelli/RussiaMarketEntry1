import { use, type ComponentType } from "react";

const RELOAD_FLAG = "chunk_reload_attempted";

export type LazyPage<P extends object> = ComponentType<P> & { preload: () => Promise<void> };

/**
 * Route-level code splitting that never shows a loading state:
 * - once preloaded the page renders synchronously, so the client's first
 *   render (and SSR) matches the prerendered HTML without a blank flash;
 * - on SPA navigation it suspends inside React Router's transition, which
 *   keeps the previous page on screen until the chunk has arrived.
 */
export function lazyPage<P extends object>(
  loader: () => Promise<{ default: ComponentType<P> }>
): LazyPage<P> {
  let Loaded: ComponentType<P> | null = null;
  let pending: Promise<void> | null = null;

  const preload = () =>
    (pending ??= loader().then(
      (module) => {
        Loaded = module.default;
        if (typeof window !== "undefined") sessionStorage.removeItem(RELOAD_FLAG);
      },
      (error) => {
        // A new deploy removes the previous build's chunks; a full load of the
        // current URL picks up the new ones. Guarded so it can't loop.
        if (typeof window !== "undefined" && !sessionStorage.getItem(RELOAD_FLAG)) {
          sessionStorage.setItem(RELOAD_FLAG, "1");
          window.location.reload();
          return new Promise<void>(() => {});
        }
        throw error;
      }
    ));

  function Page(props: P) {
    if (!Loaded) use(preload());
    const Component = Loaded!;
    return <Component {...props} />;
  }

  return Object.assign(Page, { preload });
}
