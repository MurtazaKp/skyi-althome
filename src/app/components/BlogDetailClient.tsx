'use client';

import { useRouter } from "next/navigation";
import { ArrowLeft, Clock, Calendar, Share2 } from "lucide-react";
import { motion } from "motion/react";
import { Header } from "./Header";
import Link from "next/link";
import Image from "next/image";
import { BlogPost, blogPosts } from "../lib/blog";

interface BlogDetailClientProps {
  post: BlogPost;
}

export default function BlogDetailClient({ post }: BlogDetailClientProps) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />

      {/* Hero Image */}
      <section className="relative h-[50vh] lg:h-[60vh] min-h-[400px]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/40 via-transparent to-[#0a0a0a]" />
      </section>

      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[#fafafa] hover:text-white transition-colors mb-8 font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm tracking-wider">Back to Journal</span>
        </Link>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-32">
        {/* Article Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs uppercase tracking-widest text-white font-semibold">
              {post.category}
            </span>
            <span className="text-[#fafafa]/60">•</span>
            <div className="flex items-center gap-2 text-xs text-[#fafafa]/60 font-semibold">
              <Calendar className="w-3 h-3" />
              <span>{post.date}</span>
            </div>
            <span className="text-[#fafafa]/60">•</span>
            <div className="flex items-center gap-2 text-xs text-[#fafafa]/60 font-semibold">
              <Clock className="w-3 h-3" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[#fafafa] mb-6">
            {post.title}
          </h1>

          <p className="text-xl lg:text-2xl text-[#fafafa]/70 font-semibold leading-relaxed">
            {post.description}
          </p>

          <div className="flex items-center justify-between mt-8 pt-8 border-t border-[#fafafa]/10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-white text-sm font-bold">AH</span>
              </div>
              <div>
                <p className="text-sm text-[#fafafa] font-bold">
                  AltHome Team
                </p>
                <p className="text-xs text-[#fafafa]/60 font-semibold">
                  Architecture & Design
                </p>
              </div>
            </div>
            <button className="flex items-center gap-2 text-sm text-[#fafafa]/70 hover:text-white transition-colors font-semibold">
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>
        </motion.header>

        {/* Article Body */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          {post.content.map((section: any, index: number) => {
            if (section.type === "heading") {
              return (
                <h2
                  key={index}
                  className="text-2xl lg:text-3xl font-bold tracking-tight text-[#fafafa] mt-12 mb-6 first:mt-0"
                >
                  {section.text}
                </h2>
              );
            }
            return (
              <p
                key={index}
                className="text-base lg:text-lg text-[#fafafa]/70 leading-relaxed mb-6"
              >
                {section.text}
              </p>
            );
          })}
        </motion.div>

        {/* Article Footer */}
        <div className="mt-16 pt-16 border-t border-[#fafafa]/10">
          <div className="flex flex-wrap gap-2">
            <span className="text-sm text-[#fafafa]/60 font-semibold">Tags:</span>
            <span className="text-sm text-white font-semibold">#ModularArchitecture</span>
            <span className="text-sm text-white font-semibold">#Sustainability</span>
            <span className="text-sm text-white font-semibold">#Design</span>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#141414]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#fafafa] mb-12 text-center">
            More from the Journal
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(blogPosts)
              .filter(([slug]) => slug !== post.slug)
              .slice(0, 3)
              .map(([slug, relatedPost]) => (
                <motion.article
                  key={slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="group bg-[#0a0a0a] rounded-2xl overflow-hidden border border-[#fafafa]/10 hover:border-accent/40 transition-all shadow-xl"
                >
                  <Link href={`/blog/${slug}`} className="block">
                    <div className="aspect-[4/3] bg-[#1a1a1a] overflow-hidden relative">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-xs uppercase tracking-widest text-white font-semibold">
                        {relatedPost.category}
                      </span>
                      <h3 className="text-xl font-bold text-[#fafafa] mt-3 mb-2 group-hover:text-white transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-[#fafafa]/60 line-clamp-2">
                        {relatedPost.description}
                      </p>
                    </div>
                  </Link>
                </motion.article>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl mb-8 leading-tight font-bold text-[#fafafa] tracking-tight">
            Ready to start your
            <br />
            <span className="text-white italic">modular journey?</span>
          </h2>
          <p className="text-base lg:text-lg text-[#fafafa]/70 mb-12 max-w-2xl mx-auto">
            Explore our products and discover how AltHome can transform your
            vision into reality.
          </p>
          <Link
            href="/explore"
            className="bg-accent text-white px-12 py-4 text-xs tracking-[0.2em] hover:bg-accent/90 transition-all rounded-full shadow-xl hover:shadow-2xl font-semibold inline-block"
          >
            EXPLORE PRODUCTS
          </Link>
        </div>
      </section>
    </div>
  );
}
