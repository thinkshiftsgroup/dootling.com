"use client";

import Navbar from "@/components/main/landing-page/navbar/navbar";
import Suggestions from "@/components/main/landing-page/sidebar/suggestions";

import AddPostModal from "@/components/main/modal/addPostModal";
import StoriesLanding from "@/components/main/landing-page/index/stories";
import SimilarProfiles from "@/components/main/profile/side-card/similarProfiles";
import FeedMessage from "@/components/main/atom/feedMessage";
import TrendingProjects from "@/components/main/profile/side-card/tredingProjects";
import TrendingSpaces from "@/components/main/profile/side-card/trendingSpaces";
import ReferralSideTab from "@/components/main/profile/side-card/referralSideTab";
import { useAuthStore } from "@/stores/useAuthStore";
import { useEffect } from "react";

export default function Home() {
  const feedContent = [
    "/images/page-img/pizza.jpg",
    "/images/page-img/pizza.jpg",
    "https://www.youtube.com/embed/IEHKekzTzPg",
  ];

  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  // const { user, setUser, isInitialized, token, initializeAuth } =
  //   useAuthStore();

  // useEffect(() => {
  //   if (!isInitialized) {
  //     console.log("-> Initializing Auth Store...");
  //     initializeAuth();
  //   }
  // }, [isInitialized, initializeAuth]);

  return (
    <main className="main-content pb-20">
      <div className="relative">
        <Navbar />
        <div>
          <div className="position-relative"></div>
          <div className="content-inner " id="page_layout">
            <div className="container mx-auto">
              <div className="flex flex-wrap">
                <div
                  className="w-full lg:w-2/3 px-0 md:px-4"
                  id="dynamicDivContainer"
                >
                  <div id="content">
                    <StoriesLanding />
                    <AddPostModal />
                    <div className="flex flex-wrap social-post-container pb-4">
                      {feedContent.map((content, i) => (
                        <FeedMessage key={i} content={content} />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="w-full hidden lg:block lg:w-1/3 ps-5">
                  {isLoggedIn && <SimilarProfiles />}
                  <TrendingProjects />
                  <TrendingSpaces />
                  <ReferralSideTab />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
