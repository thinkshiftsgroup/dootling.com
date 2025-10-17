"use client";
import React, { useEffect, useRef, useState } from "react";

interface StoryItem {
  id: string;
  type: "photo" | "video";
  src: string;
  thumb: string;
}

interface StoryViewerProps {
  story: { id: string; name: string; items: StoryItem[] };
  onClose: () => void;
}

export function StoryViewer({ story, onClose }: StoryViewerProps) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const progressRef = useRef<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const current = story.items[index];
  const duration = current.type === "video" ? 6000 : 4000; // slightly longer for videos

  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    progressRef.current = 0;
    intervalRef.current = setInterval(() => {
      progressRef.current += 100 / (duration / 100);
      if (progressRef.current >= 100) {
        clearInterval(intervalRef.current!);
        handleNext();
      }
    }, 100);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, isPaused]);

  const handleNext = () => {
    if (index < story.items.length - 1) {
      setIndex((prev) => prev + 1);
    } else {
      onClose();
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  const handleMouseDown = () => {
    setIsPaused(true);
  };

  const handleMouseUp = () => {
    setIsPaused(false);
  };

  return (
    <div
      className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50 select-none"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
    >
      {/* Progress bar */}
      <div className="absolute top-6 w-[90%] flex gap-1">
        {story.items.map((_, i) => (
          <div key={i} className="flex-1 h-[3px] bg-white/30 rounded overflow-hidden">
            <div
              className={`h-full bg-white transition-all duration-100 ease-linear`}
              style={{
                width:
                  i < index
                    ? "100%"
                    : i === index
                    ? `${progressRef.current}%`
                    : "0%",
              }}
            />
          </div>
        ))}
      </div>

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white text-xl font-bold"
      >
        ✕
      </button>

      {/* Current Story */}
      <div className="w-full max-w-md flex items-center justify-center">
        {current.type === "photo" ? (
          <img
            src={current.src}
            alt="story"
            className="max-h-[85vh] rounded-lg object-contain transition-all duration-500"
          />
        ) : (
          <video
            src={current.src}
            autoPlay
            muted
            playsInline
            className="max-h-[85vh] rounded-lg object-contain"
            onEnded={handleNext}
          />
        )}
      </div>

      <div className="absolute inset-0 flex">
        <button
          className="w-1/2 h-full"
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
        />
        <button
          className="w-1/2 h-full"
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
        />
      </div>
    </div>
  );
}
