'use client';

import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';

interface HeroImageCarouselProps {
  images: string[];
  productName: string;
}

export function HeroImageCarousel({ images, productName }: HeroImageCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    duration: 30,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  // Auto-play functionality
  useEffect(() => {
    if (!emblaApi) return;
    
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <div className="relative group">
      {/* Carousel Container */}
      <div className="overflow-hidden rounded-2xl lg:rounded-3xl" ref={emblaRef}>
        <div className="flex">
          {images.map((image, idx) => (
            <div key={idx} className="flex-[0_0_100%] min-w-0">
              <div className="bg-gray-900 aspect-square relative overflow-hidden">
                <Image
                  src={image}
                  alt={`${productName} view ${idx + 1}`}
                  fill
                  className="object-cover opacity-70 group-hover:opacity-80 transition-opacity duration-500"
                />
                
                {/* 360° Overlay on first image */}
                {idx === 0 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <p className="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl font-bold text-white mb-2 lg:mb-3 tracking-tight">
                          360°
                        </p>
                        <p className="text-[10px] sm:text-xs lg:text-sm text-white/70 uppercase tracking-[0.3em] font-bold">
                          Interactive View
                        </p>
                      </motion.div>
                    </div>
                  </div>
                )}

                {/* Decorative corner elements */}
                <div className="absolute top-3 left-3 lg:top-6 lg:left-6 w-8 h-8 lg:w-12 lg:h-12 border-l-2 border-t-2 border-white/30"></div>
                <div className="absolute top-3 right-3 lg:top-6 lg:right-6 w-8 h-8 lg:w-12 lg:h-12 border-r-2 border-t-2 border-white/30"></div>
                <div className="absolute bottom-3 left-3 lg:bottom-6 lg:left-6 w-8 h-8 lg:w-12 lg:h-12 border-l-2 border-b-2 border-white/30"></div>
                <div className="absolute bottom-3 right-3 lg:bottom-6 lg:left-6 w-8 h-8 lg:w-12 lg:h-12 border-r-2 border-b-2 border-white/30"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-3 lg:left-4 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white z-10"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 text-gray-900" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-3 lg:right-4 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white z-10"
        aria-label="Next image"
      >
        <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-gray-900" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 lg:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => emblaApi?.scrollTo(idx)}
            className={`h-1.5 rounded-full transition-all ${
              idx === selectedIndex
                ? 'w-8 bg-white'
                : 'w-1.5 bg-white/40'
            }`}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>

      {/* Image Counter */}
      <div className="absolute top-4 lg:top-6 right-4 lg:right-6 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full z-10">
        <p className="text-xs lg:text-sm text-white font-bold">
          {selectedIndex + 1} / {images.length}
        </p>
      </div>
    </div>
  );
}
