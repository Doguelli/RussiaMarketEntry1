import { useParams, Navigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import { blogPosts } from "../data/blogData";
import { createBreadcrumbSchema, createArticleSchema } from "@/utils/seo";

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();
  
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const title = i18n.language === 'en' ? (post.titleEn || post.title) : post.title;
  const content = i18n.language === 'en' ? (post.contentEn || post.content) : post.content;
  const excerpt = i18n.language === 'en' ? (post.excerptEn || post.excerpt) : post.excerpt;
  const metaTitle = i18n.language === 'en' && post.metaTitleEn ? post.metaTitleEn : post.metaTitle;

  const canonicalUrl = `https://russiamarketentry.com/blog/${post.slug}`;
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: i18n.language === 'en' ? 'Home' : 'Ana Sayfa', url: '/' },
    { name: t('nav.blog'), url: '/blog' },
    { name: title, url: `/blog/${post.slug}` }
  ]);

  const articleSchema = createArticleSchema(
    title,
    excerpt,
    post.slug,
    post.publishedAt,
    post.imageUrl
  );

  const fullImageUrl = post.imageUrl
    ? (post.imageUrl.startsWith("http") ? post.imageUrl : `https://russiamarketentry.com${post.imageUrl}`)
    : "https://russiamarketentry.com/og-image.jpg";

  return (
    <main>
      <article>
        <Helmet>
          <title>{`${metaTitle} | Russia Market Entry`}</title>
          <meta name="description" content={excerpt} />
          <link rel="canonical" href={canonicalUrl} />
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
            to="/blog" 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-accent-500 transition-colors font-medium mb-8"
          >
            <ArrowLeft className="w-5 h-5" /> {i18n.language === 'en' ? 'Back to Blog' : "Blog'a Dön"}
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
              {post.publishedAt}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              {post.readTime}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      {post.imageUrl && (
        <section className="bg-slate-50 pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-xl bg-white"
            >
              <img 
                src={post.imageUrl} 
                alt={title}
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
            {content}
          </motion.div>
        </div>
      </section>
      </article>
    </main>
  );
}
