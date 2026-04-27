'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './ImageWithFallback';

// Import timeline images from uploaded assets
const sindhudurgImage1 = "/imports/Home-1/680133b4622b13aedae843a7fdcf312079962f18.png";
const sindhudurgImage2 = "/imports/Home-1/4b2c348f25046ea6bfa40b2d307581ee03b87715.png";
const hiveImage = "/imports/HIVE_04.png";
const hiveImage2 = "/imports/HIVE_05-1.png";
const zomeImage = hiveImage;
const lodgeImage = "/imports/Home-1/19fb622ab454f60bc27ab2951eed0549450a316e.png";

interface TimelineStep {
  title: string;
  subtitle?: string;
  description?: string;
}

interface ScrollTimelineProps {
  steps: TimelineStep[];
}

const STEP_DETAIL = [
  {
    number: '01',
    heading: "Let's Start a Conversation",
    description: 'We begin with understanding your vision, site requirements, and project goals. Share your ideas, and we\'ll guide you through the possibilities.',
    features: ['Free consultation', 'Project scope discussion', 'Timeline overview'],
    image: sindhudurgImage1,
  },
  {
    number: '02',
    heading: 'Understanding Your Land',
    description: 'Our team visits your site to assess terrain, access, utilities, and environmental factors that will shape your project.',
    features: ['Topography analysis', 'Access evaluation', 'Utility assessment'],
    image: sindhudurgImage2,
  },
  {
    number: '03',
    heading: 'Bringing Vision to Life',
    description: 'We develop detailed architectural plans, 3D models, and technical drawings tailored to your needs and site conditions.',
    features: ['Custom 3D renderings', 'Technical specifications', 'Material selection'],
    image: hiveImage,
  },
  {
    number: '04',
    heading: 'Precision Craftsmanship',
    description: 'Your structure is precision-built in our controlled facility with rigorous quality control at every stage of production.',
    features: ['Digital fabrication', 'Quality inspections', 'Weather-protected assembly'],
    image: hiveImage2,
  },
  {
    number: '05',
    heading: 'Expert On-Site Assembly',
    description: 'Our experienced installation team assembles your AltHome on-site with minimal disruption and maximum efficiency.',
    features: ['Professional crew', '2-4 week timeline', 'Minimal site impact'],
    image: zomeImage,
  },
  {
    number: '06',
    heading: 'Welcome Home',
    description: 'Your space is ready. Time to create memories, host experiences, and connect with nature in your new architectural sanctuary.',
    features: ['Final walkthrough', 'User orientation', 'Ongoing support'],
    image: lodgeImage,
  },
];

export function ScrollTimeline({ steps }: ScrollTimelineProps) {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const scrollProgress = -rect.top / (sectionHeight - window.innerHeight);
      const maxIndex = Math.min(steps.length, STEP_DETAIL.length) - 1;
      const stepIndex = Math.min(
        Math.max(Math.floor(scrollProgress * (maxIndex + 1)), 0),
        maxIndex
      );
      setActiveStep(stepIndex);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [steps.length]);

  const active = STEP_DETAIL[activeStep] ?? STEP_DETAIL[0];

  return (
    <div ref={sectionRef} className="min-h-[600vh] relative bg-background">
      {/* Desktop */}
      <div className="hidden lg:block sticky top-0 h-screen">
        <div className="w-full h-screen flex items-center justify-center p-8 xl:p-12 gap-6 xl:gap-8">
          {/* Left — dark card with serif titles */}
          <div className="w-[44%] h-[78vh] bg-[#141414] rounded-[32px] px-16 xl:px-20 py-14 flex items-center">
            <ul className="space-y-3">
              {steps.map((step, index) => (
                <li key={index}>
                  <motion.h3
                    animate={{
                      color: index === activeStep ? '#fafafa' : '#3a3a3a',
                    }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="text-4xl xl:text-5xl leading-[1.15] tracking-tight"
                    style={{ fontFamily: '"Cormorant Garamond", "Playfair Display", Georgia, serif', fontWeight: 400 }}
                  >
                    {step.title}
                  </motion.h3>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — content card */}
          <div className="w-[56%] h-[78vh] bg-[#f4f3ef] rounded-[32px] p-12 xl:p-16 flex items-center justify-center relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="w-full max-w-xl bg-white rounded-3xl shadow-2xl p-10 xl:p-12"
              >
                <p className="text-xs tracking-[0.3em] text-neutral-400 uppercase mb-3">Step {active.number}</p>
                <h2
                  className="text-3xl xl:text-4xl text-neutral-900 leading-[1.15] tracking-tight mb-6"
                  style={{ fontFamily: '"Cormorant Garamond", "Playfair Display", Georgia, serif', fontWeight: 400 }}
                >
                  {active.heading}
                </h2>
                <p className="text-sm xl:text-base text-neutral-600 leading-relaxed mb-8">
                  {active.description}
                </p>
                <div className="space-y-3 pt-6 border-t border-neutral-200">
                  {active.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35, delay: idx * 0.08 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 flex-shrink-0" />
                      <p className="text-sm text-neutral-700">{feature}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-10 pt-6 border-t border-neutral-200 flex items-center gap-2">
                  {steps.map((_, idx) => (
                    <motion.div
                      key={idx}
                      animate={{
                        width: idx === activeStep ? 44 : idx < activeStep ? 28 : 20,
                        backgroundColor: idx === activeStep ? '#0a0a0a' : idx < activeStep ? '#9ca3af' : '#e5e7eb',
                      }}
                      transition={{ duration: 0.4 }}
                      className="h-1 rounded-full"
                    />
                  ))}
                </div>
                <p className="text-[11px] text-neutral-400 mt-3 uppercase tracking-[0.2em]">
                  {activeStep + 1} of {steps.length}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mobile — image hero with step list below */}
      <div className="lg:hidden sticky top-0 min-h-screen flex flex-col bg-background pt-24 pb-10 px-4">
        <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden mb-6 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="absolute inset-0"
            >
              <ImageWithFallback
                src={active.image}
                alt={steps[activeStep]?.title || active.heading}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute left-5 right-5 bottom-5">
                <p className="text-[10px] tracking-[0.3em] uppercase text-white/70 mb-2">Step {active.number}</p>
                <h3
                  className="text-3xl text-white leading-[1.1] tracking-tight"
                  style={{ fontFamily: '"Cormorant Garamond", "Playfair Display", Georgia, serif', fontWeight: 400 }}
                >
                  {active.heading}
                </h3>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <ul className="space-y-1">
          {steps.map((step, index) => (
            <li key={index}>
              <motion.p
                animate={{
                  color: index === activeStep ? '#fafafa' : '#5a5a5a',
                }}
                transition={{ duration: 0.4 }}
                className={`text-xl leading-snug tracking-tight ${
                  index === activeStep ? 'font-medium' : 'font-normal'
                }`}
                style={{ fontFamily: '"Cormorant Garamond", "Playfair Display", Georgia, serif' }}
              >
                {step.title}
              </motion.p>
            </li>
          ))}
        </ul>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-6 p-5 rounded-2xl bg-[#141414] border border-white/8"
          >
            <p className="text-sm text-neutral-300 leading-relaxed mb-4">{active.description}</p>
            <div className="space-y-2 pt-4 border-t border-white/8">
              {active.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-white/80" />
                  <p className="text-xs text-neutral-400">{feature}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
