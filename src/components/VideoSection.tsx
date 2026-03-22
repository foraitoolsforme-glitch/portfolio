import React, { useEffect, useRef, useState } from 'react';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false); // User wants sound by default

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play().catch((error) => {
              // Usually browsers block autoplay with sound
              // If it fails, we fall back to muted autoplay
              if (error.name === 'NotAllowedError') {
                console.warn("Autoplay with sound was blocked, fallback to muted.");
                if (videoRef.current) {
                  videoRef.current.muted = true;
                  setIsMuted(true);
                  videoRef.current.play();
                }
              }
            });
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-gray-900 group">
          <video
            ref={videoRef}
            src="/video.mov"
            muted={isMuted}
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            Your browser does not support the video tag.
          </video>
          
          {/* Mute/Unmute Overlay Button */}
          <button
            onClick={toggleMute}
            className="absolute bottom-6 right-6 p-4 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 shadow-lg border border-white/20"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              <FaVolumeMute className="w-6 h-6" />
            ) : (
              <FaVolumeUp className="w-6 h-6" />
            )}
          </button>

          {/* Optional: Indicator for muted autoplay fallback */}
          {isMuted && videoRef.current?.paused === false && (
            <div 
              onClick={toggleMute}
              className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer group-hover:bg-black/30 transition-colors"
            >
              <div className="bg-primary/90 text-white px-6 py-3 rounded-full flex items-center space-x-2 animate-pulse">
                <FaVolumeMute />
                <span className="font-semibold uppercase tracking-wider text-sm">Tap to unmute</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
