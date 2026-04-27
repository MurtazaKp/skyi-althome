'use client';

import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Header } from "./Header";
import Link from "next/link";
import Image from "next/image";

// Import blog images
const sindhudurgImage1 =
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80";
const sindhudurgImage2 =
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80";
const hiveImage = "/imports/HIVE_04.png";
const zomeImage1 =
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80";
const zomeImage2 =
  "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=1200&q=80";
const lodgeImage =
  "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80";

export default function BlogClient() {
  const blogPosts = [
    {
      id: "roi",
      title: "ROI",
      subtitle: "Calculate Your Return",
      description:
        "Discover how investing in modular architecture delivers superior returns compared to traditional construction.",
      image: sindhudurgImage1,
      category: "Business",
      readTime: "5 min read",
    },
    {
      id: "materials",
      title: "Materials",
      subtitle: "Premium Quality",
      description:
        "Explore the sustainable, high-performance materials that make our structures stand the test of time.",
      image: hiveImage,
      category: "Design",
      readTime: "4 min read",
    },
    {
      id: "comparison",
      title: "Comparison",
      subtitle: "HIVE vs ZOME",
      description:
        "Compare our two flagship products and find the perfect modular solution for your needs.",
      image: zomeImage1,
      category: "Product",
      readTime: "6 min read",
    },
    {
      id: "cafes",
      title: "Cafes",
      subtitle: "Commercial Spaces",
      description:
        "See how leading cafes are using modular architecture to create unique customer experiences.",
      image: sindhudurgImage2,
      category: "Case Study",
      readTime: "7 min read",
    },
    {
      id: "resort",
      title: "Resort",
      subtitle: "Hospitality Excellence",
      description:
        "Transform your resort with eco-friendly structures that blend luxury with sustainability.",
      image: lodgeImage,
      category: "Case Study",
      readTime: "8 min read",
    },
    {
      id: "eco-tourism",
      title: "Eco Tourism",
      subtitle: "Sustainable Travel",
      description:
        "Learn how our structures enable eco-tourism operators to minimize environmental impact.",
      image: zomeImage2,
      category: "Case Study",
      readTime: "6 min read",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-[#141414]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-white text-xs uppercase tracking-[0.3em] mb-6 font-semibold">
            Insights & Stories
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl text-[#fafafa] mb-8 leading-[0.95] tracking-[-0.04em] font-bold">
            Journal
          </h1>
          <p className="text-base lg:text-lg text-[#fafafa]/70 max-w-2xl mx-auto leading-relaxed">
            Explore our latest insights on modular architecture, sustainable
            design, and real-world applications.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group bg-[#141414] rounded-3xl overflow-hidden border border-[#fafafa]/10 hover:border-accent/40 transition-all shadow-xl hover:shadow-2xl"
              >
                <Link href={`/blog/${post.id}`} className="block">
                  <div className="aspect-[4/3] bg-[#1a1a1a] overflow-hidden relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs uppercase tracking-widest text-white font-semibold">
                        {post.category}
                      </span>
                      <span className="text-[#fafafa]/60">•</span>
                      <span className="text-xs text-[#fafafa]/60">
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-[#fafafa] mb-2 group-hover:text-white transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-[#fafafa]/70 mb-4 font-semibold">
                      {post.subtitle}
                    </p>

                    <p className="text-sm text-[#fafafa]/60 leading-relaxed mb-6">
                      {post.description}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-white group-hover:gap-4 transition-all font-semibold">
                      <span className="tracking-wider">Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#141414]">
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
