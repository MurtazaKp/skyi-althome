'use client';

import { useState } from "react";
import { ArrowLeft, Home, Users, Ruler, Building2, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useRouter } from "next/navigation";
import { LeadCaptureModal } from "./LeadCaptureModal";
import { Header } from "./Header";
import { DimensionsCarousel } from "./DimensionsCarousel";
import { HeroImageCarousel } from "./HeroImageCarousel";
import Image from "next/image";
import Link from "next/link";

// Import product images from uploaded assets (swapped)
const hiveImageOriginal = "/imports/Home-1/4b2c348f25046ea6bfa40b2d307581ee03b87715.png";
const hiveGallery1Import = "/imports/HIVE_04.png";
const hiveGallery2Import = "/imports/HIVE_05-1.png";
// Swap images: use HIVE gallery for HIVE product and uploaded image for ZOME product
const hiveImage = hiveGallery1Import;
const zomeImage = hiveImageOriginal;

// Import gallery images from uploaded assets
const hiveGallery1 = "/imports/HIVE_04.png";
const hiveGallery2 = "/imports/HIVE_05-1.png";
const hiveGallery3 = "/imports/Home-1/19fb622ab454f60bc27ab2951eed0549450a316e.png";
const zomeGallery1 = "/imports/Home-1/680133b4622b13aedae843a7fdcf312079962f18.png";
const zomeGallery2 = hiveGallery1;
const zomeGallery3 = hiveGallery2;
const zomeGallery4 = zomeGallery1;

// Import Figma elevation plan images
const zomeElevation1 = "/imports/ZomePopup-2/3435b0c6a716a16b7c1288bc9a289784833b205f.png";
const zomeElevation2 = "/imports/ZomePopup-2/e32a21911679647121bfae6c8af7b6a74d8438b2.png";
const hiveElevation1 = "/imports/HivePopup-2/3435b0c6a716a16b7c1288bc9a289784833b205f.png";
const hiveElevation2 = "/imports/HivePopup-2/0adad36388df6d3f3fa65e5b2312b43db30b36ab.png";
const hiveElevation4 = "/imports/HivePopup-2/151338394ded0abee8015bd58b022b85470c399c.png";

interface ProductDetailProps {
  productName: "HIVE" | "ZOME";
  onBack?: () => void;
}

interface DimensionCard {
  sqft: number;
  enclosed: boolean;
  price: string;
  dimensions: string;
}

export function ProductDetail({ productName, onBack }: ProductDetailProps) {
  const router = useRouter();
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [selectedDimension, setSelectedDimension] =
    useState<DimensionCard | null>(null);
  const [expandedFeatures, setExpandedFeatures] = useState<string[]>([]);

  const isHive = productName === "HIVE";

  const productData = {
    HIVE: {
      description:
        "Designed for those who need more space to enjoy living with a larger group. Modular architecture that adapts to your needs.",
      heroImage: hiveImage,
      heroImages: [hiveImage, hiveGallery1, hiveGallery2, hiveGallery3],
      features: {
        capacity: "10 people",
        height: "2.53m",
        width: "2.3m",
        length: "7m",
        volume: "40.6m³",
      },
      dimensions: [
        {
          sqft: 375,
          enclosed: true,
          price: "Starting at $125,000",
          dimensions: "25' × 15'",
        },
        {
          sqft: 575,
          enclosed: true,
          price: "Starting at $185,000",
          dimensions: "35' × 16.5'",
        },
        {
          sqft: 750,
          enclosed: true,
          price: "Starting at $245,000",
          dimensions: "45' × 17'",
        },
      ],
      gallery: [hiveImage, hiveGallery1, hiveGallery2, hiveGallery3],
    },
    ZOME: {
      description:
        "Designed for those who need more space to enjoy living with a larger group. Geometric sanctuary that blends with nature.",
      heroImage: zomeImage,
      heroImages: [
        zomeImage,
        zomeGallery1,
        zomeGallery2,
        zomeGallery3,
        zomeGallery4,
      ],
      features: {
        capacity: "8-12 people",
        height: "3.2m",
        width: "6.5m",
        length: "6.5m",
        volume: "85m³",
      },
      dimensions: [
        {
          sqft: 375,
          enclosed: true,
          price: "Starting at $135,000",
          dimensions: "22' diameter",
        },
        {
          sqft: 575,
          enclosed: true,
          price: "Starting at $195,000",
          dimensions: "26' diameter",
        },
        {
          sqft: 750,
          enclosed: true,
          price: "Starting at $255,000",
          dimensions: "30' diameter",
        },
      ],
      gallery: [
        zomeImage,
        zomeGallery1,
        zomeGallery2,
        zomeGallery3,
        zomeGallery4,
        zomeImage,
      ],
    },
  };

  const data = productData[productName];

  // Feature images for both products
  const featureImages = isHive
    ? [hiveImage, hiveGallery1, hiveGallery2, hiveGallery3, hiveImage]
    : [zomeImage, zomeGallery1, zomeGallery2, zomeGallery3, zomeGallery4];

  const featureSections = isHive
    ? [
        {
          title: "",
          items: [
            "Open edges invite light, air, and movement, blending the outdoors seamlessly into the space.",
          ],
        },
        {
          title: "",
          items: [
            "Low-disruption systems come together quickly, allowing community spaces to be operational without long build cycles.",
          ],
        },
        {
          title: "",
          items: [
            "Flexible layouts adapt across uses, from dining and wellness to gathering and events.",
          ],
        },
        {
          title: "",
          items: [
            "Adapts effortlessly across terrains, from coastal landscapes, urban surroundings to forest and hillside settings.",
          ],
        },
      ]
    : [
        {
          title: "",
          items: [
            "Expansive openings bring in natural light, while maintaining comfort within.",
          ],
        },
        {
          title: "",
          items: [
            "Low-disruption builds come together fast, reducing time to operation.",
          ],
        },
        {
          title: "",
          items: [
            "Interior plans designed around real use, so the space feels natural from the moment you step in.",
          ],
        },
        {
          title: "",
          items: [
            "Engineered systems ensure structural precision, built for long-term performance.",
          ],
        },
        {
          title: "",
          items: [
            "Weather-sealed and climate-controlled, built for consistent comfort.",
          ],
        },
      ];

  const toggleFeature = (title: string) => {
    setExpandedFeatures((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title],
    );
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] overflow-x-hidden">
      <LeadCaptureModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
      />

      {/* Dimension Modal */}
      <AnimatePresence>
        {selectedDimension && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedDimension(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-[#141414] rounded-2xl lg:rounded-3xl w-full max-w-[1400px] max-h-[90vh] overflow-y-auto shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedDimension(null)}
                className="absolute top-4 right-4 lg:top-6 lg:right-6 z-10 w-10 h-10 lg:w-12 lg:h-12 bg-[#0a0a0a] rounded-full shadow-lg flex items-center justify-center hover:bg-[#1a1a1a] transition-colors"
              >
                <X className="w-5 h-5 lg:w-6 lg:h-6 text-[#fafafa]/70" />
              </button>

              {/* Modal Header */}
              <div className="p-6 lg:p-10 border-b border-[#fafafa]/10">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#fafafa]/60 mb-2 font-semibold">
                      AltHome™ {productName}
                    </p>
                    <h3 className="text-3xl lg:text-4xl font-bold tracking-tight mb-2 text-[#fafafa]">
                      {isHive ? "Structural Dimensions" : "Interior Plan"}
                    </h3>
                    <p className="text-sm lg:text-base text-[#fafafa]/70 font-medium">
                      {isHive
                        ? "HIVE is designed to shift easily across multiple uses, from cafes & Wellness to Social Experience"
                        : "For Private, Immersive Living"}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-5xl lg:text-7xl font-bold tracking-tight text-[#fafafa]">
                      {selectedDimension.sqft}
                    </p>
                    <p className="text-sm lg:text-base text-[#fafafa]/70 uppercase tracking-wider font-semibold">
                      Sq.Ft
                    </p>
                    <p className="text-xs text-[#fafafa]/60 mt-1 font-medium">
                      {selectedDimension.dimensions}
                    </p>
                  </div>
                </div>
              </div>

              {/* Technical Drawings Grid */}
              <div className="p-6 lg:p-10">
                {isHive ? (
                  // HIVE: Show 3 Elevation Plans matching Figma
                  <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
                    {/* Elevation Plan 1 */}
                    <div className="bg-[#0a0a0a] border-2 border-[#fafafa]/10 rounded-2xl p-6 lg:p-8">
                      <div className="mb-6">
                        <p className="text-xs uppercase tracking-widest text-white font-semibold">
                          Elevation Plan
                        </p>
                      </div>
                      <div className="aspect-[16/10] relative">
                        <Image
                          src={hiveElevation1}
                          alt="HIVE Elevation Plan 1"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>

                    {/* Elevation Plan 2 */}
                    <div className="bg-[#0a0a0a] border-2 border-[#fafafa]/10 rounded-2xl p-6 lg:p-8">
                      <div className="mb-6">
                        <p className="text-xs uppercase tracking-widest text-white font-semibold">
                          Elevation Plan
                        </p>
                      </div>
                      <div className="aspect-[16/10] relative">
                        <Image
                          src={hiveElevation4}
                          alt="HIVE Elevation Plan 2"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>

                    {/* Elevation Plan 3 */}
                    <div className="bg-[#0a0a0a] border-2 border-[#fafafa]/10 rounded-2xl p-6 lg:p-8">
                      <div className="mb-6">
                        <p className="text-xs uppercase tracking-widest text-white font-semibold">
                          Elevation Plan
                        </p>
                      </div>
                      <div className="aspect-[16/10] relative">
                        <Image
                          src={hiveElevation2}
                          alt="HIVE Elevation Plan 3"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  // ZOME: Show 2 Elevation Plans + 1 Interior Plan matching Figma
                  <>
                    <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
                      {/* Elevation Plan 1 */}
                      <div className="bg-[#0a0a0a] border-2 border-[#fafafa]/10 rounded-2xl p-6 lg:p-8">
                        <div className="mb-6">
                          <p className="text-xs uppercase tracking-widest text-white font-semibold">
                            Elevation Plan
                          </p>
                        </div>
                        <div className="aspect-[16/10] relative">
                          <Image
                            src={zomeElevation1}
                            alt="ZOME Elevation Plan 1"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>

                      {/* Elevation Plan 2 */}
                      <div className="bg-[#0a0a0a] border-2 border-[#fafafa]/10 rounded-2xl p-6 lg:p-8">
                        <div className="mb-6">
                          <p className="text-xs uppercase tracking-widest text-white font-semibold">
                            Elevation Plan
                          </p>
                        </div>
                        <div className="aspect-[16/10] relative">
                          <Image
                            src={zomeElevation2}
                            alt="ZOME Elevation Plan 2"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Interior Plan Section - Full Width matching Figma */}
                    <div className="bg-[#0a0a0a] rounded-2xl overflow-hidden">
                      <div className="px-6 lg:px-10 py-8">
                        <div className="flex items-center justify-center mb-8">
                          <p className="text-lg lg:text-2xl text-[#fafafa]/70 font-bold text-center">
                            Interior Plan
                          </p>
                        </div>
                        <div className="text-center mb-8">
                          <p className="text-base lg:text-xl text-white leading-relaxed max-w-3xl mx-auto font-medium">
                            Zome plans are designed not simply as rooms, but as
                            complete experiential retreats,
                            <br />
                            allowing accupants to inhabit the landscape rather
                            than merely observe it.
                          </p>
                        </div>
                        <div className="max-w-2xl mx-auto aspect-square">
                          {/* SVG for plan remains the same as it's vector art */}
                          <svg viewBox="0 0 672 672" className="w-full h-full">
                            <circle cx="336" cy="336" r="236.3" fill="none" stroke="#fafafa" strokeWidth="2" />
                            <line x1="336" y1="100" x2="336" y2="336" stroke="#fafafa" strokeWidth="1" />
                            <circle cx="336" cy="336" r="76" fill="none" stroke="#fafafa" strokeWidth="1" />
                            <text x="336" y="200" fill="#fafafa" textAnchor="middle" fontSize="12">Bedroom</text>
                            <text x="336" y="340" fill="#fafafa" textAnchor="middle" fontSize="12">Living</text>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Footer matching Figma design */}
              <div className="px-6 lg:px-10 pb-6 lg:pb-10 border-t border-[#fafafa]/10 pt-6 lg:pt-8">
                {isHive && (
                  <div className="text-center mb-8">
                    <p className="text-2xl lg:text-4xl font-bold text-[#fafafa] leading-snug max-w-4xl mx-auto">
                      Hive is designed to shifts easily across multiple uses,
                      <br />
                      from Cafe's & Wellness to Social Experiences
                    </p>
                  </div>
                )}
                <div className="flex flex-col items-center gap-4">
                  <button
                    onClick={() => {
                      setSelectedDimension(null);
                      setIsLeadModalOpen(true);
                    }}
                    className="text-xs tracking-widest text-white hover:text-[#fafafa]/70 transition-colors uppercase font-bold"
                  >
                    LEARN MORE
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <Header />

      {/* Hero Section - Figma Exact Layout */}
      <section className="bg-[#0a0a0a] pt-20">
        <div className="relative pt-[80px] px-4 sm:px-6 lg:px-[85.5px] pb-[80px]">
          {/* Product Title - Exact Figma Positioning */}
          <div className="relative mb-8 lg:h-[130.5px] lg:mb-[48px]">
            <h1 className="relative lg:absolute left-0 top-0 lg:top-[0.5px] font-bold text-4xl sm:text-5xl lg:text-[60px] leading-tight lg:leading-[60px] tracking-[-1.2363px] text-[#fafafa]">
              {productName}
            </h1>
            <span className="block lg:absolute lg:left-[186.09px] lg:top-[37px] font-bold leading-[16px] text-[12px] tracking-[1.2px] uppercase text-[rgba(250,250,250,0.6)] mt-2 lg:mt-0">
              AltHome™
            </span>
            <p className="relative lg:absolute left-0 lg:top-[72.5px] w-full lg:w-[672px] font-medium leading-[29.25px] text-base lg:text-[18px] tracking-[-0.4395px] text-[rgba(250,250,250,0.7)] mt-4 lg:mt-0">
              {data.description}
            </p>
          </div>

          {/* Layout Container */}
          <div className="relative lg:min-h-[1108px]">
            {/* Carousel - Left */}
            <div className="relative lg:absolute left-0 top-0 w-full lg:w-[726.664px] mb-6 lg:mb-0">
              <HeroImageCarousel
                images={data.heroImages}
                productName={productName}
              />
            </div>

            {/* Right Column Container */}
            <div className="relative lg:absolute lg:left-[774.66px] top-0 w-full lg:w-[505.336px] space-y-6">
              {/* Dimensions Section */}
              <div>
                <h3 className="font-bold leading-[20px] text-[14px] tracking-[2.6496px] uppercase text-[#fafafa] mb-[28px]">
                  Dimensions
                </h3>
                <DimensionsCarousel
                  dimensions={data.dimensions}
                  onSelect={setSelectedDimension}
                />
              </div>

              {/* Technical Specs Card - Below Dimensions */}
              <div className="w-full bg-[#141414] rounded-[16px] border border-[rgba(250,250,250,0.1)] pt-[25px] px-[25px] pb-[25px]">
                <h3 className="font-bold leading-[20px] text-[14px] tracking-[2.6496px] uppercase text-[rgba(250,250,250,0.6)] mb-[20px]">
                  Technical Specifications
                </h3>

                {/* Icon Boxes Grid - 3x2 */}
                <div className="grid grid-cols-3 gap-[12px] mb-[20px]">
                  {/* Icons as SVGs remain the same */}
                  <div className="bg-[#0a0a0a] rounded-[12px] border border-[rgba(250,250,250,0.1)] p-[16px] flex items-center justify-center h-[64px]">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-white">
                      <path d="M8 32 Q8 12 20 12 Q32 12 32 32" stroke="currentColor" strokeWidth="1.2" fill="none" />
                      <line x1="10" y1="20" x2="30" y2="20" stroke="currentColor" strokeWidth="0.8" />
                    </svg>
                  </div>
                  <div className="bg-[#0a0a0a] rounded-[12px] border border-[rgba(250,250,250,0.1)] p-[16px] flex items-center justify-center h-[64px]">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-white">
                      <path d="M8 32 Q8 12 20 12 Q32 12 32 32" stroke="currentColor" strokeWidth="1.2" fill="none" />
                      <rect x="17" y="23" width="6" height="9" stroke="currentColor" strokeWidth="1" />
                    </svg>
                  </div>
                  <div className="bg-[#0a0a0a] rounded-[12px] border border-[rgba(250,250,250,0.1)] p-[16px] flex items-center justify-center h-[64px]">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-white">
                      <path d="M8 32 Q8 12 20 12 Q32 12 32 32" stroke="currentColor" strokeWidth="1.2" fill="none" />
                      <line x1="20" y1="12" x2="20" y2="32" stroke="currentColor" strokeWidth="0.8" />
                    </svg>
                  </div>
                </div>

                {/* Horizontal Specs - Responsive Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:items-center lg:justify-between gap-x-[12px] gap-y-[16px] lg:gap-[8px]">
                  <div className="flex items-center gap-[6px]">
                    <Ruler className="w-4 h-4 text-white flex-shrink-0" />
                    <div>
                      <p className="text-[10px] leading-[12px] text-[rgba(250,250,250,0.6)] uppercase whitespace-nowrap font-semibold">
                        Width
                      </p>
                      <p className="text-[13px] leading-[18px] font-bold text-[#fafafa] whitespace-nowrap">
                        {data.features.width}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <Ruler className="w-4 h-4 text-white flex-shrink-0" />
                    <div>
                      <p className="text-[10px] leading-[12px] text-[rgba(250,250,250,0.6)] uppercase whitespace-nowrap font-semibold">
                        Length
                      </p>
                      <p className="text-[13px] leading-[18px] font-bold text-[#fafafa] whitespace-nowrap">
                        {data.features.length}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <Users className="w-4 h-4 text-white flex-shrink-0" />
                    <div>
                      <p className="text-[10px] leading-[12px] text-[rgba(250,250,250,0.6)] uppercase whitespace-nowrap font-semibold">
                        Capacity
                      </p>
                      <p className="text-[13px] leading-[18px] font-bold text-[#fafafa] whitespace-nowrap">
                        {data.features.capacity}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="w-full flex flex-col gap-[12px]">
                <button
                  onClick={() => setIsLeadModalOpen(true)}
                  className="w-full h-[48px] bg-transparent text-white border border-[#6e6e6e] rounded-[8px] font-bold text-[12px] leading-[16px] tracking-[2.4px] hover:bg-white/5 transition-colors uppercase"
                >
                  SEND REQUEST
                </button>
                <button className="w-full h-[50px] bg-[#1a1a1a] text-[#fafafa] border border-[rgba(250,250,250,0.1)] rounded-[8px] font-bold text-[12px] leading-[16px] tracking-[2.4px] hover:bg-[#252525] transition-colors uppercase">
                  CONFIGURE YOUR {productName}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standard Features Section */}
      <section className="px-4 sm:px-6 lg:px-[85.5px] py-10 sm:py-12 lg:py-20 bg-[#0a0a0a] overflow-x-hidden">
        <div className="max-w-[1280px] mx-auto">
          {/* Standard Features */}
          <div className="mb-6 sm:mb-8 lg:mb-12 text-center px-4">
            <h2 className="font-bold leading-[45px] text-[36px] tracking-[0.3691px] mb-2 text-[#fafafa]">
              {isHive ? (
                <>Designed for how people gather.</>
              ) : (
                <>
                  Spaces designed to be experienced,
                  <br />
                  and remembered.
                </>
              )}
            </h2>
          </div>

          {/* Feature Cards - Desktop: Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featureSections.map((section, idx) => (
              <div
                key={idx}
                className="bg-[#141414] border border-[#fafafa]/10 rounded-2xl overflow-hidden hover:border-[#fafafa]/30 transition-colors"
              >
                <div className="aspect-[4/3] bg-[#1a1a1a] relative overflow-hidden">
                  <Image
                    src={featureImages[idx % featureImages.length]}
                    alt={section.title || `Feature ${idx + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  {section.title && (
                    <h3 className="text-lg font-bold mb-3 text-[#fafafa]">
                      {section.title}
                    </h3>
                  )}
                  <ul className="space-y-2">
                    {section.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="text-sm text-[#fafafa]/70 flex items-start gap-2 font-medium"
                      >
                        <span className="text-[#fafafa]/60 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-20 bg-[#141414]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 sm:mb-8 lg:mb-12 text-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight text-[#fafafa]">
              Gallery
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {data.gallery.map((img, idx) => (
              <motion.div
                key={idx}
                className="aspect-[4/3] bg-[#1a1a1a] rounded-xl sm:rounded-2xl overflow-hidden relative"
              >
                <Image
                  src={img}
                  alt={`${productName} view ${idx + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#141414] rounded-xl lg:rounded-2xl xl:rounded-3xl overflow-hidden border border-[#fafafa]/10">
            <div className="grid lg:grid-cols-2">
              <div className="p-6 sm:p-8 lg:p-12 xl:p-16 flex flex-col justify-center order-2 lg:order-1">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-4 sm:mb-6 leading-tight font-bold text-[#fafafa]">
                  Ready to build
                  <br />
                  your {productName}?
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-[#fafafa]/80 leading-relaxed mb-6 sm:mb-8 lg:mb-10 max-w-md font-medium">
                  Schedule a consultation to discuss your project and explore
                  customization options.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button
                    onClick={() => setIsLeadModalOpen(true)}
                    className="bg-accent text-white px-8 sm:px-10 py-3.5 sm:py-4 text-[11px] sm:text-xs tracking-[0.2em] hover:bg-accent/90 transition-colors rounded-lg font-bold uppercase"
                  >
                    SCHEDULE CONSULTATION
                  </button>
                  <button className="border border-accent text-[#fafafa] px-8 sm:px-10 py-3.5 sm:py-4 text-[11px] sm:text-xs tracking-[0.2em] hover:bg-accent hover:text-white transition-colors rounded-lg font-bold uppercase">
                    DOWNLOAD BROCHURE
                  </button>
                </div>
              </div>
              <div className="aspect-[4/3] sm:aspect-square lg:aspect-auto min-h-[250px] relative order-1 lg:order-2">
                <Image
                  src={data.heroImage}
                  alt={`${productName} lifestyle`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
