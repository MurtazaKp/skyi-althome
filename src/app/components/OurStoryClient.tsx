'use client';

import { useState } from "react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { Play } from "lucide-react";
import { Header } from "../components/Header";
import Link from "next/link";
import Image from "next/image";

// Import story images
const natureInspiredImage =
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80";
const spatialIntelligenceImage =
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80";
const designLogicImage =
  "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80";
const factorySystemsImage =
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80";
const transitLogicImage =
  "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=1200&q=80";
const globalDeploymentImage =
  "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200&q=80";
const lodgeImage =
  "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80";

export default function OurStoryClient() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <Header />

      {/* Video Hero Section */}
      <section className="relative h-screen min-h-[600px] lg:min-h-[800px] overflow-hidden">
        {/* Video/Image Background */}
        <div className="absolute inset-0">
          <Image
            src={lodgeImage}
            alt="AltHome Story"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-[#0a0a0a]/40 to-[#0a0a0a]"></div>
        </div>

        {/* Play Button */}
        {!isVideoPlaying && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            onClick={() => setIsVideoPlaying(true)}
            className="absolute inset-0 flex items-center justify-center z-10 group"
          >
            <div className="w-20 h-20 lg:w-28 lg:h-28 rounded-full bg-[#fafafa]/30 backdrop-blur-sm border-2 border-[#fafafa] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#fafafa]/50 transition-all duration-300 shadow-lg">
              <Play
                className="w-8 h-8 lg:w-12 lg:h-12 text-[#fafafa] ml-2"
                fill="#fafafa"
              />
            </div>
          </motion.button>
        )}

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center z-5">
          <div className="text-center text-[#fafafa] px-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm lg:text-base uppercase tracking-[0.3em] mb-6 text-[#fafafa] font-semibold"
            >
              Our Journey
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl font-bold tracking-[-0.04em] leading-[0.9] mb-8"
            >
              Natural,
              <br />
              by Design
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg lg:text-2xl max-w-2xl mx-auto leading-relaxed text-[#fafafa]/70"
            >
              Inspired by nature, engineered through precision systems
            </motion.p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="flex flex-col items-center gap-2 text-[#fafafa]">
            <span className="text-xs uppercase tracking-widest font-semibold">
              Scroll
            </span>
            <div className="w-px h-16 bg-[#fafafa]/50"></div>
          </div>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#141414]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6 text-lg lg:text-xl text-[#fafafa]/70 leading-relaxed text-center"
          >
            <p>
              At the heart of AltHome lies a deep intent to bring people closer
              to nature through thoughtfully designed spaces. By replacing
              straight-lined built environments with fluid, curved geometries
              bringing a spatial experience that feels closer to nature than
              conventional city living.
            </p>
            <p>
              Moving away from conventional, heavy construction methods, AltHome
              adopts a "more with less" approach reducing material use, site
              impact, and development complexity. A majority of the construction
              process is shifted into controlled factory environments, where
              advanced computational designs and precision fabrication ensure
              consistency, strength, and durability.
            </p>
            <p>
              This approach allows for faster assembly, lower on-site
              disruption, and predictable outcomes, while creating spaces that
              feel immersive, efficient, and built for real-world hospitality
              and living.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Design Philosophy - 3 Cards */}
      <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-[#fafafa] mb-6 leading-[1.1]">
              Natural, by Design
            </h2>
            <p className="text-lg lg:text-xl text-[#fafafa]/70 max-w-3xl mx-auto leading-relaxed">
              Inspired by nature, engineered through precision systems
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {/* Card 1: Nature-Inspired */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#141414] rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow border border-[#fafafa]/10"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <Image
                  src={natureInspiredImage}
                  alt="Nature-Inspired"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500 opacity-70"
                />
              </div>
              <div className="p-6 lg:p-8 space-y-4">
                <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight text-[#fafafa]">
                  Nature-Inspired
                </h3>
                <p className="text-base lg:text-lg text-[#fafafa]/70 leading-relaxed">
                  The design of AltHome structures draws from natural geometries
                  and evolving patterns found in nature's forms. These organic
                  systems translate into spatial volumes that feel both
                  intuitive and expressive, creating environments that are
                  immersive rather than imposed.
                </p>
                <p className="text-base lg:text-lg text-[#fafafa]/70 leading-relaxed">
                  Rather than disrupting the landscape, these forms allow
                  structures to sit effortlessly within their surroundings
                  enhancing the natural character of the land while enabling
                  deeper human connection with the environment.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Spatial Intelligence */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#141414] rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow border border-[#fafafa]/10"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <Image
                  src={spatialIntelligenceImage}
                  alt="Spatial Intelligence"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500 opacity-70"
                />
              </div>
              <div className="p-6 lg:p-8 space-y-4">
                <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight text-[#fafafa]">
                  Spatial Intelligence
                </h3>
                <p className="text-base lg:text-lg text-[#fafafa]/70 leading-relaxed">
                  AltHome structures translate complex geometries into
                  buildable, usable spaces so that openness, liveability, and
                  practical functionality exist in natural balance. Spaces are
                  designed around how people move, rest, gather, and experience
                  their surroundings.
                </p>
                <p className="text-base lg:text-lg text-[#fafafa]/70 leading-relaxed">
                  By understanding geometry, behaviour, and structural
                  relationships at a deeper level, the system supports intuitive
                  movement, flexible use, and practical functionality ensures
                  that each space is both expressive in form and performs
                  seamlessly in real-world use.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Design Logic */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#141414] rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow border border-[#fafafa]/10"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <Image
                  src={designLogicImage}
                  alt="Design Logic"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500 opacity-70"
                />
              </div>
              <div className="p-6 lg:p-8 space-y-4">
                <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight text-[#fafafa]">
                  Design Logic
                </h3>
                <p className="text-base lg:text-lg text-[#fafafa]/70 leading-relaxed">
                  The structural geometries inspired by nature's harmony and
                  brought to life through advanced computational design and
                  engineering systems. These forms are translated into buildable
                  structures where proportion, strength, and construction
                  techniques are resolved together, ensuring what is conceived
                  in design holds true in reality.
                </p>
                <p className="text-base lg:text-lg text-[#fafafa]/70 leading-relaxed">
                  This allows the system to extend across terrains, climates,
                  and use cases adapting to hospitality, private living, and
                  shared environments while maintaining consistency in
                  experience and performance.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Manufacturing Section Header */}
      <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#141414]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-[#fafafa] mb-8 leading-[1.1]">
              Precision, with Purpose
            </h2>
            <div className="space-y-6 text-lg lg:text-xl text-[#fafafa]/70 leading-relaxed max-w-4xl mx-auto">
              <p>
                At AltHome, manufacturing begins long before a structure takes
                shape. Every surface, junction, and component is thought
                through, tested, refined, and brought together with intent.
              </p>
              <p>
                Through digitally driven design, precision-led engineering, and
                tightly controlled production, the system achieves repeatable
                accuracy ensuring each structure is made with the same care,
                consistency, and structural confidence every time. This is what
                makes the product not only precise, but robust enough for
                real-world use.
              </p>
              <p className="text-base lg:text-lg text-[#fafafa] italic">
                Yet the process remains deeply human. Quality control,
                refinement, and final integration are guided by experienced
                hands and minds, ensuring that each product carries not just
                technical capability, but thoughtful craftsmanship.
              </p>
            </div>
          </motion.div>

          {/* Manufacturing Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mb-16 lg:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center p-6 bg-[#1a1a1a] rounded-2xl border border-[#fafafa]/10 shadow-xl"
            >
              <p className="text-3xl lg:text-4xl font-bold text-[#fafafa] mb-2">
                Flat-packed
              </p>
              <p className="text-sm text-[#fafafa] tracking-wider leading-relaxed mb-2 font-semibold">
                Worldwide deployment
              </p>
              <p className="text-xs text-[#fafafa]/60 leading-relaxed">
                Container-ready systems for global shipping
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center p-6 bg-[#1a1a1a] rounded-2xl border border-[#fafafa]/10 shadow-xl"
            >
              <p className="text-3xl lg:text-4xl font-bold text-[#fafafa] mb-2">
                100%
              </p>
              <p className="text-sm text-[#fafafa] tracking-wider leading-relaxed mb-2 font-semibold">
                Off-site manufacturing
              </p>
              <p className="text-xs text-[#fafafa]/60 leading-relaxed">
                Reduced on-site destruction & site prerequisites
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center p-6 bg-[#1a1a1a] rounded-2xl border border-[#fafafa]/10 shadow-xl"
            >
              <p className="text-3xl lg:text-4xl font-bold text-[#fafafa] mb-2">
                24hrs
              </p>
              <p className="text-sm text-[#fafafa] tracking-wider leading-relaxed mb-2 font-semibold">
                Installation
              </p>
              <p className="text-xs text-[#fafafa]/60 leading-relaxed">
                Pre-engineered plug-in systems for electrical & plumbing
                integration
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center p-6 bg-[#1a1a1a] rounded-2xl border border-[#fafafa]/10 shadow-xl"
            >
              <p className="text-3xl lg:text-4xl font-bold text-[#fafafa] mb-2">
                72hrs
              </p>
              <p className="text-sm text-[#fafafa] tracking-wider leading-relaxed mb-2 font-semibold">
                Manufacturing time
              </p>
              <p className="text-xs text-[#fafafa]/60 leading-relaxed">
                High-tech production machinery designed to reduce factory to
                operation time
              </p>
            </motion.div>
          </div>

          {/* Manufacturing - 3 Cards */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {/* Card 1: Factory Systems */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#0a0a0a] rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow border border-[#fafafa]/10"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <Image
                  src={factorySystemsImage}
                  alt="Factory Systems"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 lg:p-8 space-y-4">
                <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight text-[#fafafa]">
                  Factory Systems
                </h3>
                <p className="text-base lg:text-lg text-[#fafafa]/70 leading-relaxed">
                  AltHome structures are produced through advanced multi-axis
                  CNC machinery, digitally derived designs, simulation-led
                  validation, and coordinated assembly workflows, all of which
                  work in tandem to impart unbelievable speed, repeatability and
                  reliability, at scale.
                </p>
                <p className="text-base lg:text-lg text-[#fafafa]/70 leading-relaxed">
                  This process is complemented by carefully selected materials
                  built for durability, climate adaptability, and long-term
                  performance, enabling reliable real-world use while
                  maintaining a lighter footprint on the land.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Transit Logic */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#0a0a0a] rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow border border-[#fafafa]/10"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <Image
                  src={transitLogicImage}
                  alt="Transit Logic"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 lg:p-8 space-y-4">
                <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight text-[#fafafa]">
                  Transit Logic
                </h3>
                <p className="text-base lg:text-lg text-[#fafafa]/70 leading-relaxed">
                  Each structure is planned as a set of coordinated components,
                  allowing it to be packed, handled, and transported with
                  clarity, without affecting how it comes together on site.
                </p>
                <p className="text-base lg:text-lg text-[#fafafa]/70 leading-relaxed">
                  Everything arrives in a sequence, ready to be placed and
                  brought together with ease, reducing the gap between delivery
                  and a usable space, and allowing projects to move from arrival
                  to operation with far greater efficiency.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Global Deployment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#0a0a0a] rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow border border-[#fafafa]/10"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <Image
                  src={globalDeploymentImage}
                  alt="Global Deployment"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 lg:p-8 space-y-4">
                <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight text-[#fafafa]">
                  Global Deployment
                </h3>
                <p className="text-base lg:text-lg text-[#fafafa]/70 leading-relaxed">
                  Planned as a coordinated kit of components, the system is
                  arranged to travel efficiently, reducing shipping volume by
                  optimizing structure volume while keeping every element
                  secure, organised, and ready for site delivery.
                </p>
                <p className="text-base lg:text-lg text-[#fafafa]/70 leading-relaxed">
                  The result is a organized delivery method which is calmer and
                  cleaner on site, reducing on-site handling and the time lost
                  in shipping, carefully deploying the structure across remote
                  landscapes, urban plots, and demanding climates with less
                  on-site friction.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Note Section */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-[#141414] border-t border-[#fafafa]/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <p className="text-base lg:text-lg text-[#fafafa] italic leading-relaxed">
              Theory guides us, technology enables us, but in the great open
              outdoors, it is the careful touch of natural human feel that puts
              it all together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-[#fafafa]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#fafafa] text-sm uppercase tracking-[0.3em] mb-6 font-semibold">
              Join Us
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
              Let's build something
              <br />
              extraordinary together
            </h2>
            <p className="text-lg lg:text-xl text-[#fafafa]/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              Whether you're envisioning a retreat, a cafe, or a resort, we're
              here to turn your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/explore"
                className="bg-accent text-white px-12 py-4 text-xs tracking-[0.2em] font-semibold hover:bg-accent/90 transition-all duration-300 rounded-full shadow-lg hover:shadow-xl"
              >
                EXPLORE PRODUCTS
              </Link>
              <Link
                href="/contact"
                className="border-2 border-accent text-[#fafafa] px-12 py-4 text-xs tracking-[0.2em] font-semibold hover:bg-accent hover:text-white transition-all duration-300 rounded-full"
              >
                GET IN TOUCH
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] border-t border-[#fafafa]/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm text-[#737373] uppercase tracking-widest">
            For Manufacture Only
          </p>
        </div>
      </footer>
    </div>
  );
}
