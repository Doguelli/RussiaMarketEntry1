import { useParams, Navigate, Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { blogPosts } from "../data/blogData";
import { createBreadcrumbSchema, createArticleSchema, DEFAULT_OG_IMAGE } from "@/utils/seo";
import { socialMetaElements } from "@/components/PageSocialMeta";
import { hasBlogContentFor, blogDetailPath, type BlogLang } from "@/utils/blogLanguages";
import { contactPath, servicesPath, servicePath } from "@/utils/ruPaths";
import BlockRenderer from "../components/BlockRenderer";

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { pathname } = useLocation();
  const { t } = useTranslation();
  
  const post = blogPosts.find(p => p.slug === slug);
  // Blog language is defined by the URL tree, not sticky i18n state.
  const currentLang: BlogLang = pathname.startsWith("/ru/")
    ? "ru"
    : pathname.startsWith("/en/")
      ? "en"
      : "tr";
  const langPrefix = currentLang === "tr" ? "" : `/${currentLang}`;
  const isRu = currentLang === "ru";
  const marketplaceBlogSlugs = new Set([
    "wildberriesde-satis-yapmak",
    "ozonda-satis-yapmak",
    "lamodaya-nasil-girilir",
  ]);
  const showMarketplaceService = slug ? marketplaceBlogSlugs.has(slug) : false;

  if (!post) {
    return <Navigate to={`${langPrefix}/blog`} replace />;
  }

  // Never render fallback text from another language on a language-specific URL.
  if (!hasBlogContentFor(post, currentLang)) {
    const fallbackOrder: BlogLang[] = ["ru", "tr", "en"];
    const fallback = fallbackOrder.find(
      (lang) => lang !== currentLang && hasBlogContentFor(post, lang)
    );
    if (fallback) {
      return <Navigate to={blogDetailPath(post.slug, fallback)} replace />;
    }
    return <Navigate to={`${langPrefix}/blog`} replace />;
  }

  let title = post.title;
  let content = post.content;
  let excerpt = post.excerpt;
  let metaTitle = post.metaTitle;
  let publishedDate = post.publishedAt;
  let readTimeStr = post.readTime;
  let blocks = post.contentBlocks;
  let imageUrl = post.imageUrl;

  if (currentLang === 'ru') {
    title = post.titleRu || post.title;
    content = post.contentRu || post.content;
    excerpt = post.excerptRu || post.excerpt;
    metaTitle = post.metaTitleRu || post.metaTitle;
    publishedDate = post.publishedAtRu || post.publishedAt;
    readTimeStr = post.readTimeRu || post.readTime;
    blocks = post.contentBlocksRu || post.contentBlocks;
    imageUrl = post.imageUrlRu || post.imageUrl;
  } else if (currentLang === 'en') {
    title = post.titleEn || post.title;
    content = post.contentEn || post.content;
    excerpt = post.excerptEn || post.excerpt;
    metaTitle = post.metaTitleEn || post.metaTitle;
    publishedDate = post.publishedAtEn || post.publishedAt;
    readTimeStr = post.readTimeEn || post.readTime;
    blocks = post.contentBlocksEn || post.contentBlocks;
    imageUrl = post.imageUrlEn || post.imageUrl;
  }

  const canonicalUrl = `https://russiamarketentry.com${langPrefix}/blog/${post.slug}`;
  // English has no landing page of its own — /en/blog is the root of the only
  // English URL tree, so it starts the trail instead of a nonexistent /en.
  const breadcrumbSchema = createBreadcrumbSchema([
    ...(currentLang === 'en'
      ? []
      : [{ name: currentLang === 'ru' ? 'Главная' : 'Ana Sayfa', url: currentLang === 'ru' ? '/ru' : '/' }]),
    { name: t('nav.blog'), url: `${langPrefix}/blog` },
    { name: title, url: `${langPrefix}/blog/${post.slug}` }
  ]);

  // Only advertise the language trees this post is really published in, so the
  // alternates can't lead a crawler to a URL carrying fallback text.
  const hasTr = hasBlogContentFor(post, 'tr');
  const hasEn = hasBlogContentFor(post, 'en');
  const hasRu = hasBlogContentFor(post, 'ru');

  const articleSchema = createArticleSchema(
    title,
    excerpt,
    post.slug,
    publishedDate,
    imageUrl,
    langPrefix
  );

  const fullImageUrl = imageUrl
    ? (imageUrl.startsWith("http") ? imageUrl : `https://russiamarketentry.com${imageUrl}`)
    : DEFAULT_OG_IMAGE;

  return (
    <main>
      <article>
        <Helmet>
          <title>{`${metaTitle} | Russia Market Entry`}</title>
          <meta name="description" content={excerpt} />
          <link rel="canonical" href={canonicalUrl} />
          {hasTr && <link rel="alternate" hrefLang="tr" href={`https://russiamarketentry.com/blog/${post.slug}`} />}
          {hasEn && <link rel="alternate" hrefLang="en" href={`https://russiamarketentry.com/en/blog/${post.slug}`} />}
          {hasRu && <link rel="alternate" hrefLang="ru" href={`https://russiamarketentry.com/ru/blog/${post.slug}`} />}
          <link rel="alternate" hrefLang="x-default" href={hasTr ? `https://russiamarketentry.com/blog/${post.slug}` : canonicalUrl} />
          {socialMetaElements({
            title: `${metaTitle} | Russia Market Entry`,
            description: excerpt,
            url: canonicalUrl,
            image: fullImageUrl,
            type: "article",
          })}
          <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
          <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        </Helmet>

      {/* Hero Header */}
      <section className="relative pt-20 pb-12 md:pt-28 md:pb-16 lg:pt-32 lg:pb-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Link
            to={`${langPrefix}/blog`}
            className="inline-flex items-center gap-2 text-slate-500 hover:text-accent-500 transition-colors font-medium mb-8"
          >
            <ArrowLeft className="w-5 h-5" /> {currentLang === 'ru' ? 'Назад в блог' : (currentLang === 'en' ? 'Back to Blog' : "Blog'a Dön")}
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[32px] md:text-[44px] lg:text-[52px] font-extrabold text-primary-500 leading-[1.15] tracking-tight mb-8"
          >
            {title}
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap items-center gap-6 text-[15px] font-medium text-slate-500"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              {publishedDate}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              {readTimeStr}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      {imageUrl && (
        <section className="bg-slate-50 pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-xl bg-white"
            >
              <img
                src={imageUrl}
                alt={title}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (imageUrl.endsWith('.png') && !target.dataset.triedFallback) {
                    target.dataset.triedFallback = 'true';
                    target.src = imageUrl.replace(/\.png$/, '.jpeg');
                  } else if (imageUrl.endsWith('.jpeg') && !target.dataset.triedFallback) {
                    target.dataset.triedFallback = 'true';
                    target.src = imageUrl.replace(/\.jpeg$/, '.png');
                  }
                }}
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {blocks && blocks.length > 0 ? (
              <BlockRenderer blocks={blocks} category={post.category} />
            ) : (
              content
            )}
          </motion.div>
        </div>
      </section>

      {/* End CTA */}
      <section className="py-12 md:py-16 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <h2 className="text-[22px] md:text-[28px] font-extrabold text-primary-500 tracking-tight mb-3">
            {isRu ? "Готовы обсудить следующий шаг?" : currentLang === "en" ? "Ready to discuss your next step?" : "Bir sonraki adımı konuşmaya hazır mısınız?"}
          </h2>
          <p className="text-[14px] md:text-[15px] text-slate-600 leading-relaxed mb-6 max-w-xl mx-auto">
            {isRu
              ? "Свяжитесь с нами или изучите услуги, которые мы можем предложить для вашего бренда."
              : currentLang === "en"
                ? "Get in touch or explore the services we can build for your brand."
                : "Bizimle iletişime geçin veya markanız için kurabileceğimiz hizmetleri inceleyin."}
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <Link
              to={contactPath(isRu)}
              className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 transition-colors text-white px-6 py-3 rounded-xl font-bold text-[14px] md:text-[15px]"
            >
              {t("nav.contact")} <ArrowRight className="w-4 h-4" />
            </Link>
            {showMarketplaceService ? (
              <Link
                to={servicePath("pazaryeri-yonetimi", isRu)}
                className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 transition-colors text-white px-6 py-3 rounded-xl font-bold text-[14px] md:text-[15px]"
              >
                {t("nav.services")} <ArrowRight className="w-4 h-4" />
              </Link>
            ) : (
              <Link
                to={servicesPath(isRu)}
                className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 transition-colors text-white px-6 py-3 rounded-xl font-bold text-[14px] md:text-[15px]"
              >
                {t("nav.services")} <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      </section>
      </article>
    </main>
  );
}
