'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Shield, Zap, Sparkles, Award } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./ImageWithFallback";
import { LeadCaptureModal } from "./LeadCaptureModal";
import { Header } from "./Header";
import Link from "next/link";
import Image from "next/image";

// Import product images from uploaded assets (swapped for products page)
const hiveImageOriginal = "/imports/Home-1/4b2c348f25046ea6bfa40b2d307581ee03b87715.png";
const hiveGallery1 = "/imports/HIVE_04.png";
// Swap images: use HIVE gallery for HIVE product and uploaded image for ZOME product
const hiveImage = hiveGallery1;
const zomeImage = hiveImageOriginal;
const sindhudurgImage1 = "/imports/Home-1/680133b4622b13aedae843a7fdcf312079962f18.png";
const sindhudurgImage2 = sindhudurgImage1;

export default function ExploreClient() {
  const router = useRouter();
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [stats, setStats] = useState({
    projects: 0,
    customers: 0,
    factories: 0,
  });

  useEffect(() => {
    const duration = 2000;
    const increment = 50;
    const steps = duration / increment;

    const targets = { projects: 100, customers: 10000, factories: 5 };
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setStats({
        projects: Math.floor(targets.projects * progress),
        customers: Math.floor(targets.customers * progress),
        factories: Math.floor(targets.factories * progress),
      });

      if (currentStep >= steps) {
        setStats(targets);
        clearInterval(interval);
      }
    }, increment);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans">
      <LeadCaptureModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
      />

      {/* Header */}
      <Header />

      {/* Section 1: Cinematic Hero Video */}
      <section className="relative h-screen flex items-center justify-center bg-[#0a0a0a]">
        <div className="absolute inset-0">
          <Image
            src={sindhudurgImage2}
            alt="Modern architectural space"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-[#0a0a0a]/40 to-[#0a0a0a]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] text-[#fafafa] mb-6 leading-[0.9] tracking-[-0.05em] font-bold">
            Explore Our Products
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-[#fafafa]/70 leading-relaxed">
            Modular architecture for modern living
          </p>
        </motion.div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce">
          <div className="w-px h-16 bg-gradient-to-b from-[#fafafa]/60 to-transparent"></div>
        </div>
      </section>

      {/* Section 2: Minimal Intro Statement */}
      <section className="py-32 lg:py-40 bg-[#141414]">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#fafafa] mb-10 leading-[1.05] tracking-[-0.03em] font-bold">
              Designed to Blend In,
              <br />
              Built to Stand Out
            </h2>
            <p className="text-lg lg:text-xl text-[#fafafa]/70 leading-relaxed max-w-2xl mx-auto">
              Premium modular structures that respect the environment while
              delivering uncompromising quality and design excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Product Showcase - Buildcover Style */}
      <section className="py-20 lg:py-32 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {/* ZOME Product - Now First */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <Link
                  href="/products/zome"
                  className="aspect-[4/3] rounded-3xl overflow-hidden bg-[#1a1a1a] relative cursor-pointer order-2 lg:order-1 shadow-2xl border border-[#fafafa]/10 block"
                >
                  <Image
                    src={zomeImage}
                    alt="ZOME - Geodesic domes"
                    fill
                    className="object-cover group-hover:scale-[1.05] transition-transform duration-700 ease-out opacity-70"
                  />
                </Link>
                <div className="order-1 lg:order-2">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <div className="w-8 h-px bg-[#fafafa]"></div>
                    <span className="text-xs uppercase tracking-[0.3em] text-[#fafafa] font-semibold">
                      Geodesic Structure
                    </span>
                  </div>
                  <h3 className="text-4xl lg:text-5xl xl:text-6xl text-[#fafafa] mb-6 tracking-tight font-bold">
                    ZOME
                  </h3>
                  <p className="text-lg lg:text-xl text-[#fafafa]/70 leading-relaxed mb-8">
                    Geodesic dome structures offering panoramic views and
                    exceptional structural integrity. Ideal for remote locations
                    and immersive experiences.
                  </p>
                  <Link
                    href="/products/zome"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-white text-xs uppercase tracking-[0.2em] font-semibold rounded-full hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Explore ZOME
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* HIVE Product - Now Second */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group"
            >
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <Link
                  href="/products/hive"
                  className="aspect-[4/3] rounded-3xl overflow-hidden bg-[#1a1a1a] relative cursor-pointer order-2 lg:order-1 shadow-2xl border border-[#fafafa]/10 block"
                >
                  <Image
                    src={hiveImage}
                    alt="HIVE - Hexagonal modular units"
                    fill
                    className="object-cover group-hover:scale-[1.05] transition-transform duration-700 ease-out opacity-70"
                  />
                </Link>
                <div className="order-1 lg:order-2">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <div className="w-8 h-px bg-[#fafafa]"></div>
                    <span className="text-xs uppercase tracking-[0.3em] text-[#fafafa] font-semibold">
                      Modular System
                    </span>
                  </div>
                  <h3 className="text-4xl lg:text-5xl xl:text-6xl text-[#fafafa] mb-6 tracking-tight font-bold">
                    HIVE
                  </h3>
                  <p className="text-lg lg:text-xl text-[#fafafa]/70 leading-relaxed mb-8">
                    Hexagonal modular units that connect seamlessly to create
                    versatile living spaces. Perfect for scalable developments
                    and unique configurations.
                  </p>
                  <Link
                    href="/products/hive"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-white text-xs uppercase tracking-[0.2em] font-semibold rounded-full hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Explore HIVE
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: Features - Architectural Style */}
      <section className="py-32 bg-[#141414]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl text-[#fafafa] mb-4 tracking-tight font-bold">
              Features That Matter
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full bg-[#fafafa]/20 border border-[#fafafa]/30">
                <Shield className="w-7 h-7 text-[#fafafa] stroke-[1.5]" />
              </div>
              <h4 className="text-sm uppercase tracking-widest text-[#fafafa] mb-3 font-semibold">
                Safety
              </h4>
              <p className="text-sm text-[#fafafa]/60">
                Engineered to exceed building codes
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full bg-[#fafafa]/20 border border-[#fafafa]/30">
                <Zap className="w-7 h-7 text-[#fafafa] stroke-[1.5]" />
              </div>
              <h4 className="text-sm uppercase tracking-widest text-[#fafafa] mb-3 font-semibold">
                Durability
              </h4>
              <p className="text-sm text-[#fafafa]/60">
                Built to withstand harsh conditions
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full bg-[#fafafa]/20 border border-[#fafafa]/30">
                <Sparkles className="w-7 h-7 text-[#fafafa] stroke-[1.5]" />
              </div>
              <h4 className="text-sm uppercase tracking-widest text-[#fafafa] mb-3 font-semibold">
                Maintenance
              </h4>
              <p className="text-sm text-[#fafafa]/60">
                Minimal upkeep, maximum longevity
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full bg-[#fafafa]/20 border border-[#fafafa]/30">
                <Award className="w-7 h-7 text-[#fafafa] stroke-[1.5]" />
              </div>
              <h4 className="text-sm uppercase tracking-widest text-[#fafafa] mb-3 font-semibold">
                Design
              </h4>
              <p className="text-sm text-[#fafafa]/60">
                Architectural excellence, inside and out
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5: Stats - Elegant Infographic */}
      <section className="py-32 bg-[#0a0a0a]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-16 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="text-6xl lg:text-7xl text-[#fafafa] mb-4 font-bold tracking-tight">
                {stats.projects}+
              </div>
              <div className="w-full h-px bg-[#fafafa] mb-4"></div>
              <p className="text-sm uppercase tracking-widest text-[#fafafa] font-semibold">
                Completed Projects
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-6xl lg:text-7xl text-[#fafafa] mb-4 font-bold tracking-tight">
                {stats.customers.toLocaleString()}+
              </div>
              <div className="w-full h-px bg-[#fafafa] mb-4"></div>
              <p className="text-sm uppercase tracking-widest text-[#fafafa] font-semibold">
                Happy Customers
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-6xl lg:text-7xl text-[#fafafa] mb-4 font-bold tracking-tight">
                {stats.factories}
              </div>
              <div className="w-full h-px bg-[#fafafa] mb-4"></div>
              <p className="text-sm uppercase tracking-widest text-[#fafafa] font-semibold">
                Manufacturing Facilities
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 6: Motion Product Section */}
      <section className="py-20 lg:py-32 bg-[#141414]">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[#fafafa] mb-8 leading-[1.05] tracking-[-0.03em] font-bold">
                Built for
                <br />
                modern living
              </h2>
              <p className="text-lg lg:text-xl text-[#fafafa]/70 leading-relaxed mb-12 max-w-lg">
                Every detail is carefully considered to create spaces that
                inspire, comfort, and adapt to your lifestyle. From material
                selection to spatial flow, we design for the way you actually
                live.
              </p>
              <Link
                href="/products/hive"
                className="inline-flex items-center gap-3 text-sm tracking-widest text-[#fafafa] border-b-2 border-[#fafafa] pb-2 hover:text-[#E4B584] hover:border-[#E4B584] transition-all duration-300 font-semibold"
              >
                <span>Discover HIVE</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-[#1a1a1a] group shadow-2xl border border-[#fafafa]/10 relative">
                <Image
                  src={hiveGallery1}
                  alt="Modern living space"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-70"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 7: Closing CTA - Buildcover Style */}
      <section className="py-40 lg:py-48 bg-[#0a0a0a]">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#fafafa] mb-12 leading-[1.05] tracking-[-0.03em] font-bold">
              Experience a New
              <br />
              Standard of Living
            </h2>
            <button
              onClick={() => setIsLeadModalOpen(true)}
              className="bg-accent text-white px-12 py-4 text-xs tracking-[0.2em] font-semibold rounded-full hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              GET IN TOUCH
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 lg:py-20 bg-[#141414] border-t border-[#fafafa]/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
            <div className="lg:col-span-5">
              <h4 className="text-2xl mb-6 text-[#fafafa] font-semibold">
                AltHome
              </h4>
              <p className="text-[#fafafa]/60 leading-relaxed text-base mb-8 max-w-sm">
                High-tech infrastructure for nature-proximate experiential
                properties.
              </p>
              <button
                onClick={() => setIsLeadModalOpen(true)}
                className="inline-flex items-center gap-3 text-sm tracking-widest text-[#fafafa] border-b-2 border-[#fafafa] pb-2 hover:text-[#E4B584] hover:border-[#E4B584] transition-all duration-300 font-semibold"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="lg:col-span-2">
              <h5 className="text-xs uppercase tracking-[0.2em] text-[#fafafa] mb-6 font-semibold">
                Products
              </h5>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/products/hive"
                    className="text-base text-[#fafafa]/70 hover:text-[#fafafa] transition-colors"
                  >
                    Hive
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/zome"
                    className="text-base text-[#fafafa]/70 hover:text-[#fafafa] transition-colors"
                  >
                    Zome
                  </Link>
                </li>
                <li>
                  <Link
                    href="/explore"
                    className="text-base text-[#fafafa]/70 hover:text-[#fafafa] transition-colors"
                  >
                    Explore
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h5 className="text-xs uppercase tracking-[0.2em] text-[#fafafa] mb-6 font-semibold">
                Company
              </h5>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/"
                    className="text-base text-[#fafafa]/70 hover:text-[#fafafa] transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <a
                    href="#process"
                    className="text-base text-[#fafafa]/70 hover:text-[#fafafa] transition-colors"
                  >
                    Process
                  </a>
                </li>
                <li>
                  <a
                    href="#sustainability"
                    className="text-base text-[#fafafa]/70 hover:text-[#fafafa] transition-colors"
                  >
                    Sustainability
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-3">
              <h5 className="text-xs uppercase tracking-[0.2em] text-[#fafafa] mb-6 font-semibold">
                Contact
              </h5>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:info@althome.com"
                    className="text-base text-[#fafafa]/70 hover:text-[#fafafa] transition-colors"
                  >
                    info@althome.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+1234567890"
                    className="text-base text-[#fafafa]/70 hover:text-[#fafafa] transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </li>
                <li className="text-base text-[#737373]">
                  Mon-Fri, 9am-6pm PST
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-[#fafafa]/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#737373] text-sm">
              &copy; 2026 AltHome by skyi. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-[#737373] hover:text-[#fafafa] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-[#737373] hover:text-[#fafafa] transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-[#737373] hover:text-[#fafafa] transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
