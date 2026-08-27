import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, BookOpen } from "lucide-react";
import { useTranslation } from "react-i18next";
import { blogPosts } from "../data/blogData";
import { createBreadcrumbSchema } from "@/utils/seo";
import { hasBlogContentFor, type BlogLang } from "@/utils/blogLanguages";

export default function Blog() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  // Blog language is defined by the URL tree (/blog, /en/blog, /ru/blog).
  const currentLang: BlogLang = pathname.startsWith("/ru/")
    ? "ru"
    : pathname.startsWith("/en/")
      ? "en"
      : "tr";
  const langPrefix = currentLang === "tr" ? "" : `/${currentLang}`;

  const parseDate = (dateStr?: string) => {
    if (!dateStr) return 0;
    const months: { [key: string]: number } = {
      ocak: 1, şubat: 2, mart: 3, nisan: 4, mayıs: 5, haziran: 6,
      temmuz: 7, ağustos: 8, eylül: 9, ekim: 10, kasım: 11, aralık: 12,
      january: 1, february: 2, march: 3, april: 4, may: 5, june: 6,
      july: 7, august: 8, september: 9, october: 10, november: 11, december: 12,
      января: 1, февраля: 2, марта: 3, апреля: 4, мая: 5, июня: 6,
      июля: 7, августа: 8, сентября: 9, октября: 10, ноября: 11, декабря: 12,
      январь: 1, февраль: 2, март: 3, апрель: 4, май: 5, июнь: 6,
      июль: 7, август: 8, сентябрь: 9, октябрь: 10, ноябрь: 11, декабрь: 12
    };
    const parts = dateStr.trim().split(/\s+/);
    if (parts.length < 3) return 0;
    const day = parseInt(parts[0], 10);
    const monthKey = (parts[1] || "").toLowerCase();
    const month = months[monthKey] || 1;
    const year = parseInt(parts[2], 10);
    return new Date(year, month - 1, day).getTime();
  };

  // A post only belongs in a language's list if it has real content in that
  // language — not just a fallback to another language's text. Without this,
  // a Turkish-only post (no Russian translation) would still show up on the
  // Russian list showing its Turkish title/body (BlogDetail's fallback logic
  // is meant for someone opening a direct link, not for list browsing), and
  // Russian-only posts would show up mixed into the Turkish/English list.
  // Same predicate decides which detail URLs get prerendered.
  const visibleBlogPosts = blogPosts.filter((p) => hasBlogContentFor(p, currentLang));

  const sortedBlogPosts = [...visibleBlogPosts].sort((a, b) => {
    const dateA = currentLang === 'ru' ? (a.publishedAtRu || a.publishedAt) : a.publishedAt;
    const dateB = currentLang === 'ru' ? (b.publishedAtRu || b.publishedAt) : b.publishedAt;
    return parseDate(dateB) - parseDate(dateA);
  });

  const getPostImage = (post: any) => {
    if (currentLang === 'ru') return post.imageUrlRu || post.imageUrl;
    if (currentLang === 'en') return post.imageUrlEn || post.imageUrl;
    return post.imageUrl;
  };

  const getPostTitle = (post: any) => {
    if (currentLang === 'ru') return post.titleRu || post.title;
    if (currentLang === 'en') return post.titleEn || post.title;
    return post.title;
  };

  const getPostExcerpt = (post: any) => {
    if (currentLang === 'ru') return post.excerptRu || post.excerpt;
    if (currentLang === 'en') return post.excerptEn || post.excerpt;
    return post.excerpt;
  };

  const getPostDate = (post: any) => {
    if (currentLang === 'ru') return post.publishedAtRu || post.publishedAt;
    if (currentLang === 'en') return post.publishedAtEn || post.publishedAt;
    return post.publishedAt;
  };

  const getPostReadTime = (post: any) => {
    if (currentLang === 'ru') return post.readTimeRu || post.readTime;
    if (currentLang === 'en') return post.readTimeEn || post.readTime;
    return post.readTime;
  };

  // English has no landing page of its own — /en/blog is the root of the only
  // English URL tree, so it starts the trail instead of a nonexistent /en.
  const breadcrumbSchema = createBreadcrumbSchema([
    ...(currentLang === 'en'
      ? []
      : [{ name: currentLang === 'ru' ? 'Главная' : 'Ana Sayfa', url: currentLang === 'ru' ? '/ru' : '/' }]),
    { name: t('nav.blog'), url: `${langPrefix}/blog` }
  ]);

  return (
    <main>
      <Helmet>
        <title>{t('blog.title')}</title>
        <meta name="description" content={t('blog.desc_meta')} />
        <link rel="canonical" href={`https://russiamarketentry.com${langPrefix}/blog`} />
        <link rel="alternate" hrefLang="tr" href="https://russiamarketentry.com/blog" />
        <link rel="alternate" hrefLang="en" href="https://russiamarketentry.com/en/blog" />
        <link rel="alternate" hrefLang="ru" href="https://russiamarketentry.com/ru/blog" />
        <link rel="alternate" hrefLang="x-default" href="https://russiamarketentry.com/blog" />
        <meta property="og:title" content={t('blog.title')} />
        <meta property="og:description" content={t('blog.desc_meta')} />
        <meta property="og:url" content={`https://russiamarketentry.com${langPrefix}/blog`} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-primary-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center z-0" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-white/10 border border-white/10 text-white font-medium text-[14px] mb-6 backdrop-blur-sm"
            >
              <BookOpen className="w-4 h-4" />
              <span>{t('blog.badge')}</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[40px] md:text-[56px] lg:text-[72px] font-extrabold text-white leading-[1.1] tracking-tight mb-8"
            >
              {t('blog.h1_1')} <br/>
              <span className="text-accent-500">
                {t('blog.h1_2')}
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[18px] md:text-[22px] text-primary-100 leading-relaxed max-w-2xl"
            >
              {t('blog.subtitle')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Blog List Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedBlogPosts.map((post, index) => (
              <motion.article 
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <Link to={`${langPrefix}/blog/${post.slug}`} className="block relative aspect-video overflow-hidden bg-white">
                  {getPostImage(post) ? (
                    <img
                      src={getPostImage(post)}
                      alt={getPostTitle(post)}
                      loading="lazy"
                      onError={(e) => {
                        const target = e.currentTarget;
                        const src = getPostImage(post);
                        if (src.endsWith('.png') && !target.dataset.triedFallback) {
                          target.dataset.triedFallback = 'true';
                          target.src = src.replace(/\.png$/, '.jpeg');
                        } else if (src.endsWith('.jpeg') && !target.dataset.triedFallback) {
                          target.dataset.triedFallback = 'true';
                          target.src = src.replace(/\.jpeg$/, '.png');
                        }
                      }}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-102"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400">
                      {currentLang === "ru" ? "Изображение скоро" : currentLang === "en" ? "Image coming soon" : "Görsel Bekleniyor"}
                    </div>
                  )}
                </Link>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-[13px] font-medium text-slate-500 mb-4">
                    <span>{getPostDate(post)}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                    <span>{getPostReadTime(post)}</span>
                  </div>
                  <h2 className="text-[20px] font-bold text-primary-500 mb-4 line-clamp-2 group-hover:text-accent-500 transition-colors">
                    <Link to={`${langPrefix}/blog/${post.slug}`}>
                      {getPostTitle(post)}
                    </Link>
                  </h2>
                  <p className="text-slate-600 line-clamp-3 mb-6 text-[15px] leading-relaxed">
                    {getPostExcerpt(post)}
                  </p>
                  <Link 
                    to={`${langPrefix}/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-[15px] font-bold text-accent-500 hover:text-accent-600 transition-colors"
                  >
                    {t('blog.read_more')} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
