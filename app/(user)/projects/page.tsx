"use client";
import Navbar from "@/components/main/landing-page/navbar/navbar";
import React, { useEffect, useRef, useState } from "react";
import ProjectChatSidebar from "@/components/main/projects/projectsSidebar";
import ProjectMessage from "@/components/main/projects/projectMessage";
import { useProject } from "@/hooks/useProjects";

const Projects = () => {
  const { getAllProject } = useProject();
  const data = getAllProject?.data?.data || [];
  const isLoading = getAllProject?.isLoading;
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null
  );

  const messageSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (selectedProjectId && window.innerWidth < 768) {
      messageSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedProjectId]);

  return (
    <div>
      <Navbar fixed={true} />

      <div className="lg:!pt-[5rem] pt-[6rem] px-2 md:!md-0 hide-scrollbar overflow-y-hidden">
        <div className="container mx-auto">
          <div className="w-full mx-auto">
            <div className="grid gap-2 md:!gap-0 grid-cols-1 md:!grid-cols-8">
              <ProjectChatSidebar
                projects={data}
                onSelectProject={(id: any) => setSelectedProjectId(id)}
                selectedProjectId={selectedProjectId}
                isLoading={isLoading}
              />

              <div ref={messageSectionRef} className="md:!col-span-6 col-span-8">
                {selectedProjectId ? (
                  <ProjectMessage projectId={selectedProjectId} />
                ) : (
                  <div className="flex flex-col items-center justify-center text-gray-500 bg-[#F8FAFC] h-[86vh] shadow-sm rounded-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-32 mb-4 opacity-80"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="m243.07 65.728l34.263 14.684v46.42l-41.306-17.703l-107.695 61.54l116.919 66.811L256 243.623v146.285l106.667-60.952v-94.288h42.666v119.048l-10.749 6.143l-149.333 85.333l-10.584 6.048l-10.585-6.048l-149.333-85.333L64 353.716V158.289l10.749-6.142l149.333-85.333l9.224-5.271zm-29.737 324.18V268.383l-106.666-60.952v121.525zm106.666-283.24h55.163l-91.581 91.582l30.17 30.17l91.581-91.582v55.163h42.667v-128h-128z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <h2 className="text-lg font-semibold mb-1">
                      No Project Selected
                    </h2>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
