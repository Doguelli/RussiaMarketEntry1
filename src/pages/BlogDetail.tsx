import { useParams, Navigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import { blogPosts } from "../data/blogData";
import { createBreadcrumbSchema, createArticleSchema } from "@/utils/seo";
import BlockRenderer from "../components/BlockRenderer";

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();
  
  const post = blogPosts.find(p => p.slug === slug);
  const langPrefix = i18n.language === 'ru' ? '/ru' : i18n.language === 'en' ? '/en' : '';

  if (!post) {
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

  if (i18n.language === 'ru') {
    title = post.titleRu || post.title;
    content = post.contentRu || post.content;
    excerpt = post.excerptRu || post.excerpt;
    metaTitle = post.metaTitleRu || post.metaTitle;
    publishedDate = post.publishedAtRu || post.publishedAt;
    readTimeStr = post.readTimeRu || post.readTime;
    blocks = post.contentBlocksRu || post.contentBlocks;
    imageUrl = post.imageUrlRu || post.imageUrl;
  } else if (i18n.language === 'en') {
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
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: i18n.language === 'ru' ? 'Главная' : (i18n.language === 'en' ? 'Home' : 'Ana Sayfa'), url: i18n.language === 'ru' ? '/ru' : (i18n.language === 'en' ? '/en' : '/') },
    { name: t('nav.blog'), url: `${langPrefix}/blog` },
    { name: title, url: `${langPrefix}/blog/${post.slug}` }
  ]);

  const articleSchema = createArticleSchema(
    title,
    excerpt,
    post.slug,
    post.publishedAt,
    imageUrl,
    langPrefix
  );

  const fullImageUrl = imageUrl
    ? (imageUrl.startsWith("http") ? imageUrl : `https://russiamarketentry.com${imageUrl}`)
    : "https://russiamarketentry.com/og-image.jpg";

  return (
    <main>
      <article>
        <Helmet>
          <title>{`${metaTitle} | Russia Market Entry`}</title>
          <meta name="description" content={excerpt} />
          <link rel="canonical" href={canonicalUrl} />
          <link rel="alternate" hrefLang="tr" href={`https://russiamarketentry.com/blog/${post.slug}`} />
          <link rel="alternate" hrefLang="en" href={`https://russiamarketentry.com/en/blog/${post.slug}`} />
          <link rel="alternate" hrefLang="ru" href={`https://russiamarketentry.com/ru/blog/${post.slug}`} />
          <link rel="alternate" hrefLang="x-default" href={`https://russiamarketentry.com/blog/${post.slug}`} />
          <meta property="og:title" content={`${metaTitle} | Russia Market Entry`} />
          <meta property="og:description" content={excerpt} />
          <meta property="og:url" content={canonicalUrl} />
          <meta property="og:type" content="article" />
          <meta property="og:image" content={fullImageUrl} />
          <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
          <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        </Helmet>

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Link
            to={`${langPrefix}/blog`}
            className="inline-flex items-center gap-2 text-slate-500 hover:text-accent-500 transition-colors font-medium mb-8"
          >
            <ArrowLeft className="w-5 h-5" /> {i18n.language === 'ru' ? 'Назад в блог' : (i18n.language === 'en' ? 'Back to Blog' : "Blog'a Dön")}
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
      </article>
    </main>
  );
}
