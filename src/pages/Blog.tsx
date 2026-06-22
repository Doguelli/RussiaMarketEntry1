import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, BookOpen } from "lucide-react";
import { useTranslation } from "react-i18next";
import { blogPosts } from "../data/blogData";

export default function Blog() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('blog.title')}</title>
        <meta name="description" content={t('blog.desc_meta')} />
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
            {blogPosts.map((post, index) => (
              <motion.article 
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <Link to={`/blog/${post.slug}`} className="block relative aspect-video overflow-hidden bg-white">
                  {post.imageUrl ? (
                    <img 
                      src={post.imageUrl} 
                      alt={post.title}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-102"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400">
                      Görsel Bekleniyor
                    </div>
                  )}
                </Link>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-[13px] font-medium text-slate-500 mb-4">
                    <span>{post.publishedAt}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-[20px] font-bold text-primary-500 mb-4 line-clamp-2 group-hover:text-accent-500 transition-colors">
                    <Link to={`/blog/${post.slug}`}>
                      {i18n.language === 'en' ? (post.titleEn || post.title) : post.title}
                    </Link>
                  </h2>
                  <p className="text-slate-600 line-clamp-3 mb-6 text-[15px] leading-relaxed">
                    {i18n.language === 'en' ? (post.excerptEn || post.excerpt) : post.excerpt}
                  </p>
                  <Link 
                    to={`/blog/${post.slug}`}
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
    </>
  );
}
