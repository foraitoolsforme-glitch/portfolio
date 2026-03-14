import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface ImageCarouselProps {
  images: string[];
  altText: string;
}

export default function ImageCarousel({ images, altText }: ImageCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative mb-6 rounded-lg overflow-hidden shadow-sm border border-gray-100 group">
      <div className="overflow-hidden bg-gray-100 h-48" ref={emblaRef}>
        <div className="flex select-none h-full touch-pan-y">
          {images.map((src, index) => (
            <div className="relative flex-[0_0_100%] min-w-0 h-full" key={index}>
              <img
                src={src}
                alt={`${altText} result ${index + 1}`}
                className="block w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=600';
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={scrollPrev}
            className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-primary shadow-sm hover:bg-white transition-colors disabled:opacity-50"
            disabled={!prevBtnEnabled}
          >
            <FaChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={scrollNext}
            className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-primary shadow-sm hover:bg-white transition-colors disabled:opacity-50"
            disabled={!nextBtnEnabled}
          >
            <FaChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
