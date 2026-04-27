'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Play, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { ScrollTimeline } from "./ScrollTimeline";
import { LeadCaptureModal } from "./LeadCaptureModal";
import { Header } from "./Header";
import Link from "next/link";
import Image from "next/image";

// Import local images from uploaded assets
const heroImage = "/imports/althome_images-03.jpg";
const introImage = "/imports/althome_images-05.jpg";
const zomeImage = "/imports/althome_images_Artboard_2.jpg";
const hiveImage = "/imports/althome_images_Artboard_2_copy.jpg";
const hiveImageUpload = "/imports/Home-1/4b2c348f25046ea6bfa40b2d307581ee03b87715.png";
const ctaImage = "/imports/Home-1/19fb622ab454f60bc27ab2951eed0549450a316e.png";
const hiveGallery1 = "/imports/HIVE_04.png";
const hiveGallery2 = "/imports/HIVE_05-1.png";
// Use available images for other sections
const beforeImage = hiveGallery2;
const afterImage = hiveGallery1;
const sustainabilityMainImage = heroImage;
const zeroFoundationImage = hiveImageUpload;
const reversibleImpactImage = hiveGallery2;
const localEcosystemsImage = ctaImage;
const architectGradeImage = hiveImage;

export default function HomeClient() {
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState<"HIVE" | "ZOME">(
    "ZOME",
  );
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans">
      <LeadCaptureModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
      />

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center bg-[#0a0a0a]">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Desert architecture"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/20 via-transparent to-[#0a0a0a]/80" />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[10rem] text-[#fafafa] mb-8 leading-[0.9] tracking-[-0.05em] font-bold">
            New horizons
            <br />
            for your space
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-[#fafafa]/70 leading-relaxed max-w-2xl mx-auto">
            Experiential architecture that harmonizes with nature
          </p>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce">
          <div className="w-px h-16 bg-gradient-to-b from-[#fafafa]/60 to-transparent"></div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 lg:py-32 bg-[#141414]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-square rounded-3xl overflow-hidden relative group shadow-2xl border border-[#fafafa]/10">
                <Image
                  src={introImage}
                  alt="Introduction to AltHome"
                  fill
                  className="object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/20 to-[#0a0a0a]/60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-[#fafafa]/30 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-[#fafafa]/50 transition-all duration-300 shadow-lg">
                    <Play className="w-7 h-7 text-[#fafafa] fill-[#fafafa] ml-0.5" />
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-[#fafafa] text-xs uppercase tracking-[0.3em] mb-8 font-semibold">
                Introduction
              </p>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#fafafa] mb-8 leading-[1.1] tracking-[-0.02em] font-bold">
                High-tech infrastructure for nature
              </h3>
              <p className="text-lg lg:text-xl text-[#fafafa]/70 leading-relaxed mb-12 max-w-lg">
                AltHome by skyi eases the development of experiential properties
                in nature-proximate environments.
              </p>

              <Link
                href="/explore"
                className="inline-flex items-center gap-3 text-sm tracking-widest text-[#fafafa] border-b-2 border-[#fafafa] pb-2 hover:text-[#E4B584] hover:border-[#E4B584] transition-all duration-300 font-semibold"
              >
                <span>Explore products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products-showcase" className="py-20 lg:py-32 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            <div className="aspect-video lg:aspect-[21/9] rounded-3xl overflow-hidden bg-[#1a1a1a] relative shadow-2xl border border-[#fafafa]/10">
              <Image
                src={architectGradeImage}
                alt="Modern architect-grade spaces"
                fill
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6">
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#fafafa] leading-[1.1] tracking-[-0.03em] font-bold max-w-5xl">
                  We design custom,
                  <br />
                  architect-grade spaces
                  <br />
                  and build them in weeks,
                  <br />
                  not years
                </h3>
              </div>
            </div>

            <div className="aspect-[4/5] lg:aspect-[16/9] rounded-3xl overflow-hidden bg-[#1a1a1a] relative shadow-2xl border border-[#fafafa]/10">
              <Image
                src={selectedProduct === "ZOME" ? hiveImage : zomeImage}
                alt={`${selectedProduct} showcase`}
                fill
                className="object-cover transition-opacity duration-500 opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />

              <div className="absolute top-6 lg:top-8 left-1/2 -translate-x-1/2 z-10">
                <div className="bg-[#141414]/95 backdrop-blur-md rounded-full shadow-xl border border-[#fafafa]/20 flex items-center overflow-hidden">
                  <button
                    onClick={() => setSelectedProduct("ZOME")}
                    className={`text-xs lg:text-sm tracking-widest px-6 lg:px-8 py-3 lg:py-4 transition-all duration-300 font-semibold ${
                      selectedProduct === "ZOME"
                        ? "text-[#fafafa]"
                        : "text-[#fafafa]/50 hover:text-[#fafafa]/80"
                    }`}
                  >
                    ZOME
                  </button>
                  <div className="w-px h-6 lg:h-8 bg-[#fafafa]/20"></div>
                  <button
                    onClick={() => setSelectedProduct("HIVE")}
                    className={`text-xs lg:text-sm tracking-widest px-6 lg:px-8 py-3 lg:py-4 transition-all duration-300 font-semibold ${
                      selectedProduct === "HIVE"
                        ? "text-[#fafafa]"
                        : "text-[#fafafa]/50 hover:text-[#fafafa]/80"
                    }`}
                  >
                    HIVE
                  </button>
                </div>
              </div>

              <div className="absolute bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 z-10">
                <Link
                  href="/explore"
                  className="bg-accent text-white px-10 lg:px-12 py-3.5 lg:py-4 text-xs tracking-[0.2em] font-semibold rounded-full hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  EXPLORE PRODUCT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Landscape Section */}
      <section id="products" className="py-20 lg:py-32 bg-[#141414]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20 max-w-4xl mx-auto">
            <p className="text-[#fafafa] text-xs uppercase tracking-[0.3em] mb-8 font-semibold">
              Landscape
            </p>
            <h3 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl text-[#fafafa] mb-8 leading-[1.05] tracking-[-0.03em] font-bold">
              Designed to blend in,
              <br />
              naturally stands out
            </h3>
            <p className="text-lg lg:text-xl text-[#fafafa]/70 leading-relaxed max-w-2xl mx-auto">
              See the transformation from raw land to architectural harmony
            </p>
          </div>

          <div className="mb-16">
            <BeforeAfterSlider
              beforeImage={beforeImage}
              afterImage={afterImage}
              beforeLabel="Raw Land"
              afterLabel="Transformed"
              className="aspect-[16/10] lg:aspect-[18/9] rounded-3xl shadow-2xl border border-[#fafafa]/10"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16 mb-16 lg:mb-20">
            <div className="text-center">
              <div className="w-14 h-14 border-2 border-[#fafafa] text-[#fafafa] rounded-full flex items-center justify-center mx-auto mb-6 text-base font-bold">
                1
              </div>
              <h4 className="text-lg lg:text-xl mb-4 text-[#fafafa] font-semibold">
                Minimal Impact
              </h4>
              <p className="text-base text-[#fafafa]/60 leading-relaxed max-w-xs mx-auto">
                Our modular systems require no foundation excavation, preserving
                the natural landscape
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 border-2 border-[#fafafa] text-[#fafafa] rounded-full flex items-center justify-center mx-auto mb-6 text-base font-bold">
                2
              </div>
              <h4 className="text-lg lg:text-xl mb-4 text-[#fafafa] font-semibold">
                Quick Installation
              </h4>
              <p className="text-base text-[#fafafa]/60 leading-relaxed max-w-xs mx-auto">
                From empty site to move-in ready in weeks, not months or years
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 border-2 border-[#fafafa] text-[#fafafa] rounded-full flex items-center justify-center mx-auto mb-6 text-base font-bold">
                3
              </div>
              <h4 className="text-lg lg:text-xl mb-4 text-[#fafafa] font-semibold">
                Natural Integration
              </h4>
              <p className="text-base text-[#fafafa]/60 leading-relaxed max-w-xs mx-auto">
                Designs that complement and enhance the surrounding environment
              </p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => setIsLeadModalOpen(true)}
              className="inline-flex items-center gap-3 text-sm tracking-widest text-[#fafafa] border-b-2 border-[#fafafa] pb-2 hover:text-[#E4B584] hover:border-[#E4B584] transition-all duration-300 font-semibold"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="bg-[#0a0a0a]">
        <ScrollTimeline
          steps={[
            { title: "Introductory call" },
            { title: "Site Assessment" },
            { title: "Design" },
            { title: "Manufacturing" },
            { title: "Installation" },
            { title: "Move-in" },
          ]}
        />
      </section>

      {/* Sustainability Section */}
      <section id="sustainability" className="py-20 lg:py-32 bg-[#141414]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-24 max-w-4xl mx-auto">
            <p className="text-[#fafafa] text-xs uppercase tracking-[0.3em] mb-8 font-semibold">
              Sustainability
            </p>
            <h3 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl text-[#fafafa] mb-10 leading-[1.05] tracking-[-0.03em] font-bold">
              Respectful neighbour
              <br />
              to nature
            </h3>
            <p className="text-lg lg:text-xl text-[#fafafa]/70 leading-relaxed max-w-2xl mx-auto">
              Your land is a treasure of nature, to be conserved and to be
              shared as it is. We stand for expanding its experience, without
              the disruption of conventional construction.
            </p>
          </div>

          <div className="mb-16">
            <div className="aspect-video lg:aspect-[21/9] bg-[#1a1a1a] rounded-3xl overflow-hidden relative group shadow-2xl border border-[#fafafa]/10">
              <Image
                src={sustainabilityMainImage}
                alt="Sustainable architecture in nature"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 lg:w-24 lg:h-24 bg-[#fafafa]/30 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-[#fafafa]/50 transition-all duration-300 shadow-lg">
                  <Play className="w-8 h-8 lg:w-10 lg:h-10 text-[#fafafa] fill-[#fafafa] ml-1" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-16 lg:mb-20">
            {/* Zero Foundation */}
            <div>
              <div className="aspect-square bg-[#1a1a1a] rounded-3xl overflow-hidden group shadow-xl border border-[#fafafa]/10 mb-6 relative">
                <Image
                  src={zeroFoundationImage}
                  alt="Zero Foundation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-70"
                />
              </div>
              <h4 className="text-xl lg:text-2xl mb-5 text-[#fafafa] font-semibold">
                Zero Foundation
              </h4>
              <p className="text-base text-[#fafafa]/60 leading-relaxed">
                Our elevated platform systems require no excavation or concrete
                pouring, preserving soil integrity and natural drainage.
              </p>
            </div>

            {/* Reversible Impact */}
            <div>
              <div className="aspect-square bg-[#1a1a1a] rounded-3xl overflow-hidden group shadow-xl border border-[#fafafa]/10 mb-6 relative">
                <Image
                  src={reversibleImpactImage}
                  alt="Reversible Impact"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-70"
                />
              </div>
              <h4 className="text-xl lg:text-2xl mb-5 text-[#fafafa] font-semibold">
                Reversible Impact
              </h4>
              <p className="text-base text-[#fafafa]/60 leading-relaxed">
                Structures can be completely removed, leaving the land in its
                natural state with minimal trace of human intervention.
              </p>
            </div>

            {/* Local Ecosystems */}
            <div>
              <div className="aspect-square bg-[#1a1a1a] rounded-3xl overflow-hidden group shadow-xl border border-[#fafafa]/10 mb-6 relative">
                <Image
                  src={localEcosystemsImage}
                  alt="Local Ecosystems"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-70"
                />
              </div>
              <h4 className="text-xl lg:text-2xl mb-5 text-[#fafafa] font-semibold">
                Local Ecosystems
              </h4>
              <p className="text-base text-[#fafafa]/60 leading-relaxed">
                Designed to coexist with native flora and fauna, our buildings
                enhance rather than disrupt natural habitats.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button className="inline-flex items-center gap-3 text-sm tracking-widest text-[#fafafa] border-b-2 border-[#fafafa] pb-2 hover:text-[#E4B584] hover:border-[#E4B584] transition-all duration-300 font-semibold">
              <span>Learn About Our Approach</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#141414] border border-[#fafafa]/10 overflow-hidden rounded-3xl shadow-2xl">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 sm:p-12 lg:p-16 xl:p-20 flex flex-col justify-center">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#fafafa] mb-8 leading-[1.1] tracking-[-0.02em] font-bold">
                  Ready to build
                  <br />
                  your vision?
                </h3>
                <p className="text-lg lg:text-xl text-[#fafafa]/70 leading-relaxed mb-12 max-w-md">
                  Let's discuss how AltHome can transform your land into an
                  experiential sanctuary.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setIsLeadModalOpen(true)}
                    className="bg-accent text-white px-8 py-4 text-xs tracking-[0.2em] font-semibold rounded-full hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    SCHEDULE CONSULTATION
                  </button>
                  <button className="border-2 border-accent text-[#fafafa] px-8 py-4 text-xs tracking-[0.2em] font-semibold rounded-full hover:bg-accent hover:text-white transition-all duration-300">
                    DOWNLOAD BROCHURE
                  </button>
                </div>
              </div>
              <div className="aspect-square lg:aspect-auto relative">
                <Image
                  src={ctaImage}
                  alt="Modern architecture"
                  fill
                  className="object-cover opacity-70"
                />
              </div>
            </div>
          </div>
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
                    Customization
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
                    href="/our-story"
                    className="text-base text-[#fafafa]/70 hover:text-[#fafafa] transition-colors"
                  >
                    About
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
