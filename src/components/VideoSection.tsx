import React, { useEffect, useRef, useState } from 'react';
import { FaVolumeMute, FaVolumeUp, FaPlay, FaCircleNotch } from 'react-icons/fa';

const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true); // Default to muted for better autoplay success
  const [isPaused, setIsPaused] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play().catch((error) => {
              if (error.name === 'NotAllowedError') {
                console.warn("Autoplay with sound was blocked, fallback to muted.");
                if (videoRef.current) {
                  videoRef.current.muted = true;
                  setIsMuted(true);
                  videoRef.current.play();
                }
              }
            });
            setIsPaused(false);
          } else {
            videoRef.current?.pause();
            setIsPaused(true);
          }
        });
      },
      { threshold: 0.3 } // Slightly lower threshold for better responsive play
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

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-gray-900 group cursor-pointer" onClick={() => videoRef.current?.paused ? videoRef.current.play() : videoRef.current?.pause()}>
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center z-20 bg-gray-900">
              <div className="flex flex-col items-center space-y-4">
                <FaCircleNotch className="w-12 h-12 text-primary animate-spin" />
                <p className="text-white text-sm font-medium tracking-widest uppercase">Buffering Video...</p>
              </div>
            </div>
          )}
          
          <video
            ref={videoRef}
            src="/video.mov"
            muted={isMuted}
            loop
            playsInline
            preload="auto"
            onCanPlay={handleLoadingComplete}
            onWaiting={() => setIsLoading(true)}
            onPlaying={() => setIsLoading(false)}
            onPause={() => setIsPaused(true)}
            onPlay={() => setIsPaused(false)}
            className="w-full h-full object-cover"
          >
            Your browser does not support the video tag.
          </video>
          
          {/* Play Overlay (if paused) */}
          {isPaused && !isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors pointer-events-none">
              <div className="bg-white/20 p-6 rounded-full backdrop-blur-md border border-white/30 transform scale-100 group-hover:scale-110 transition-transform">
                <FaPlay className="w-8 h-8 text-white ml-1" />
              </div>
            </div>
          )}

          {/* Mute/Unmute Overlay Button */}
          <button
            onClick={toggleMute}
            className="absolute bottom-6 right-6 p-4 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-sm transition-all duration-300 z-30 shadow-lg border border-white/20"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              <FaVolumeMute className="w-6 h-6" />
            ) : (
              <FaVolumeUp className="w-6 h-6" />
            )}
          </button>

          {/* Tap to Unmute Tooltip */}
          {isMuted && !isLoading && (
            <div className="absolute top-6 left-6 bg-black/50 text-white px-4 py-2 rounded-full backdrop-blur-sm text-xs font-semibold uppercase tracking-wider flex items-center space-x-2">
              <FaVolumeMute />
              <span>Video Muted - Click to Unmute</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
