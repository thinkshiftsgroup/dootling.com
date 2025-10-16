"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Stories from "react-insta-stories";

export interface StoryItem {
  id: string;
  type: "photo" | "video";
  src: string;
  thumb: string;
}

export interface Story {
  id: string;
  name: string;
  photo: string;
  items: StoryItem[];
}

const StoriesLanding = () => {
  const stories: Story[] = [
    {
      id: "bni",
      name: "Your Story",
      photo: "/images/user/1.jpg",
      items: [
        {
          id: "bni-1",
          type: "video",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/4.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/4.mp4",
        },
        {
          id: "bni-2",
          type: "photo",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/5.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/5.jpg",
        },
      ],
    },
    {
      id: "bob",
      name: "Bob Frapples",
      photo: "/images/user/13.jpg",
      items: [
        {
          id: "bob-1",
          type: "photo",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
        },
        {
          id: "bob-2",
          type: "video",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.mp4",
        },
      ],
    },
    {
      id: "greta",
      name: "Greta Life",
      photo: "/images/user/14.jpg",
      items: [
        {
          id: "greta-1",
          type: "photo",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg",
        },
        {
          id: "greta-2",
          type: "photo",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg",
        },
      ],
    },
    {
      id: "bob",
      name: "Bob Frapples",
      photo: "/images/user/13.jpg",
      items: [
        {
          id: "bob-1",
          type: "photo",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
        },
        {
          id: "bob-2",
          type: "video",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.mp4",
        },
      ],
    },
    {
      id: "greta",
      name: "Greta Life",
      photo: "/images/user/14.jpg",
      items: [
        {
          id: "greta-1",
          type: "photo",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg",
        },
        {
          id: "greta-2",
          type: "photo",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg",
        },
      ],
    },
    {
      id: "bob",
      name: "Bob Frapples",
      photo: "/images/user/13.jpg",
      items: [
        {
          id: "bob-1",
          type: "photo",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
        },
        {
          id: "bob-2",
          type: "video",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.mp4",
        },
      ],
    },
    {
      id: "greta",
      name: "Greta Life",
      photo: "/images/user/14.jpg",
      items: [
        {
          id: "greta-1",
          type: "photo",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg",
        },
        {
          id: "greta-2",
          type: "photo",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg",
        },
      ],
    },
    {
      id: "bob",
      name: "Bob Frapples",
      photo: "/images/user/13.jpg",
      items: [
        {
          id: "bob-1",
          type: "photo",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
        },
        {
          id: "bob-2",
          type: "video",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.mp4",
        },
      ],
    },
    {
      id: "greta",
      name: "Greta Life",
      photo: "/images/user/14.jpg",
      items: [
        {
          id: "greta-1",
          type: "photo",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg",
        },
        {
          id: "greta-2",
          type: "photo",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg",
        },
      ],
    },
    {
      id: "bob",
      name: "Bob Frapples",
      photo: "/images/user/13.jpg",
      items: [
        {
          id: "bob-1",
          type: "photo",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
        },
        {
          id: "bob-2",
          type: "video",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.mp4",
        },
      ],
    },
    {
      id: "greta",
      name: "Greta Life",
      photo: "/images/user/14.jpg",
      items: [
        {
          id: "greta-1",
          type: "photo",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg",
        },
        {
          id: "greta-2",
          type: "photo",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg",
        },
      ],
    },
    {
      id: "bob",
      name: "Bob Frapples",
      photo: "/images/user/13.jpg",
      items: [
        {
          id: "bob-1",
          type: "photo",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
        },
        {
          id: "bob-2",
          type: "video",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.mp4",
        },
      ],
    },
    {
      id: "greta",
      name: "Greta Life",
      photo: "/images/user/14.jpg",
      items: [
        {
          id: "greta-1",
          type: "photo",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg",
        },
        {
          id: "greta-2",
          type: "photo",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg",
        },
      ],
    },
    {
      id: "bob",
      name: "Bob Frapples",
      photo: "/images/user/13.jpg",
      items: [
        {
          id: "bob-1",
          type: "photo",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
        },
        {
          id: "bob-2",
          type: "video",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.mp4",
        },
      ],
    },
    {
      id: "greta",
      name: "Greta Life",
      photo: "/images/user/14.jpg",
      items: [
        {
          id: "greta-1",
          type: "photo",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg",
        },
        {
          id: "greta-2",
          type: "photo",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg",
        },
      ],
    },
    {
      id: "bob",
      name: "Bob Frapples",
      photo: "/images/user/13.jpg",
      items: [
        {
          id: "bob-1",
          type: "photo",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
        },
        {
          id: "bob-2",
          type: "video",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.mp4",
        },
      ],
    },
    {
      id: "greta",
      name: "Greta Life",
      photo: "/images/user/14.jpg",
      items: [
        {
          id: "greta-1",
          type: "photo",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg",
        },
        {
          id: "greta-2",
          type: "photo",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg",
        },
      ],
    },
    {
      id: "bob",
      name: "Bob Frapples",
      photo: "/images/user/13.jpg",
      items: [
        {
          id: "bob-1",
          type: "photo",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
        },
        {
          id: "bob-2",
          type: "video",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.mp4",
        },
      ],
    },
    {
      id: "greta",
      name: "Greta Life",
      photo: "/images/user/14.jpg",
      items: [
        {
          id: "greta-1",
          type: "photo",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg",
        },
        {
          id: "greta-2",
          type: "photo",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg",
        },
      ],
    },
  ];

  const [activeStoryIndex, setActiveStoryIndex] = useState<number | null>(null);
  const [viewedStories, setViewedStories] = useState<Set<string>>(new Set());
  const scrollRef = useRef<HTMLDivElement>(null);

  // --- Persist viewed stories ---
  useEffect(() => {
    const saved = localStorage.getItem("viewedStories");
    if (saved) setViewedStories(new Set(JSON.parse(saved)));
  }, []);

  useEffect(() => {
    localStorage.setItem("viewedStories", JSON.stringify([...viewedStories]));
  }, [viewedStories]);

  // --- Scroll ---
  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = 150;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // --- Format stories ---
  const formatStories = (story: Story) =>
    story.items.map((item) => ({
      url: item.src,
      type: item.type === "video" ? "video" : "image",
      header: {
        heading: story.name,
        subheading: "36 minutes ago",
        profileImage: story.photo,
      },
    }));

  const handleAllStoriesEnd = () => {
    if (activeStoryIndex === null) return;
    const storyId = stories[activeStoryIndex].id;
    setViewedStories((prev) => new Set([...prev, storyId]));

    if (activeStoryIndex < stories.length - 1) {
      setActiveStoryIndex(activeStoryIndex + 1);
    } else {
      setActiveStoryIndex(null);
    }
  };

  return (
    <div className="flex flex-wrap pb-4 relative">
      <button
        onClick={() => scroll("left")}
        className="bg-white rounded-full flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-10 shadow-md p-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={22}
          height={22}
          viewBox="0 0 24 24"
          className="text-gray-700"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m14 7l-5 5l5 5"
          />
        </svg>
      </button>

      <div
        ref={scrollRef}
        className="storiesWrapper flex gap-3 overflow-x-auto hide-scrollbar px-10 scroll-smooth"
      >
        {stories.map((story, idx) => {
          const isViewed = viewedStories.has(story.id);
          return (
            <div
              key={idx}
              className="story flex flex-col items-center cursor-pointer shrink-0 w-[90px]"
              onClick={() => setActiveStoryIndex(idx)}
            >
              <span
                className={`p-[2px] rounded-full ${
                  isViewed
                    ? "bg-gray-300"
                    : "bg-gradient-to-tr from-pink-500 to-yellow-400"
                }`}
              >
                <span className="block rounded-full overflow-hidden border-2 border-white w-[90px] h-[90px]">
                  <Image
                    src={story.photo}
                    alt={story.name}
                    width={90}
                    height={90}
                    className="object-cover"
                  />
                </span>
              </span>
              <span className="info name text-xs block text-center mt-1">
                {story.name}
              </span>
            </div>
          );
        })}
      </div>

      <button
        onClick={() => scroll("right")}
        className="bg-white rounded-full flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-10 shadow-md p-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={22}
          height={22}
          viewBox="0 0 24 24"
          className="text-gray-700"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m10 17l5-5l-5-5"
          />
        </svg>
      </button>

      {activeStoryIndex !== null && (
        <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center">
          <button
            onClick={() => setActiveStoryIndex(null)}
            className="absolute top-3 right-4 text-white text-3xl font-bold z-[999999]"
          >
            ✕
          </button>
          <Stories
            stories={formatStories(stories[activeStoryIndex])}
            defaultInterval={4000}
            width="100vw"
            height="100vh"
            keyboardNavigation
            loop={false}
            onAllStoriesEnd={handleAllStoriesEnd}
            storyStyles={{
              objectFit: "contain",
              width: "100vw",
              height: "100vh",
            }}
          />
        </div>
      )}

      <style jsx global>{`
        .stories div[class*="progress"] > div {
          background: white !important;
        }
        .stories > div[class*="progress"] {
          top: 0 !important;
        }
        .stories > div[class*="header"] {
          position: absolute !important;
          top: 12px !important;
          left: 12px !important;
          display: flex !important;
          align-items: center !important;
          gap: 8px !important;
        }
        .stories img,
        .stories video {
          object-fit: contain !important;
          width: 100% !important;
          height: 100% !important;
        }
      `}</style>
    </div>
  );
};

export default StoriesLanding;
