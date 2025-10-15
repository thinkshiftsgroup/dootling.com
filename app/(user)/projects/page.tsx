"use client";
import Navbar from "@/components/main/landing-page/navbar/navbar";
import React from "react";

import ProjectChatSidebar from "@/components/main/projects/projectsSidebar";
import ProjectMessage from "@/components/main/projects/projectMessage";

const Projects = () => {
  return (
    <div className="">
      <Navbar fixed={true} />


      <div className="pt-[5rem] h-[95vh] hide-scrollbar overflow-y-hidden">
        <div className="container mx-auto">
          <div className="w-full col-span-7 ">
            <div className="w-full mx-auto">
              <div className="grid grid-cols-8">
                <ProjectChatSidebar />
                <ProjectMessage />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
