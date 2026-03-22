import React, { useEffect, useRef, useState } from 'react';

const VideoSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 } // Start loading when 20% visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={containerRef}
          className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-gray-900 group"
        >
          {isVisible ? (
            <div className="w-full h-full">
              <iframe 
                id="js_video_iframe" 
                src="https://jumpshare.com/embed/is6Tf3zGnLIHeI3JBnq1?autoplay=1" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture"
                title="Jumpshare Video"
                className="absolute top-0 left-0 w-full h-full border-0"
                style={{ position: 'absolute' }}
              ></iframe>
            </div>
          ) : (
            <div className="flex items-center justify-center w-full h-full bg-gray-800">
              <div className="animate-pulse flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-gray-500 border-b-[10px] border-b-transparent ml-2"></div>
                </div>
                <div className="h-4 w-32 bg-gray-700 rounded"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
