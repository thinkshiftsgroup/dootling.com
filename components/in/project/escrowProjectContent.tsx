"use client";
import { useState } from "react";
import { ProjectI } from "@/types/project";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import EscrowProjectCard from "./escrowProjectCard";

const EscrowProjectsContent: React.FC<{
  projects: ProjectI[];
  isLoading: boolean;
  selectedProjectId: string;
}> = ({ projects, isLoading, selectedProjectId }) => {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center text-gray-500">
        <Loader2 size={20} className="animate-spin text-[#157bff]" />
        <p className="text-sm font-medium">Loading escrow projects...</p>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-2">
        {projects?.filter((project: any) => project.isEscrowed === true)
          .length > 0 ? (
          <>
            {projects
              ?.filter((project: any) => project.isEscrowed === true)
              .map((project: any) => (
                <EscrowProjectCard key={project.id} {...project} />
              ))}
          </>
        ) : (
          <div className="py-8 text-center text-gray-500">
            <p className="text-lg font-medium">No Escrow Projects</p>
            <p className="text-sm mt-1">Convert your projects to escrow</p>
          </div>
        )}
      </div>
    </>
  );
};

export default EscrowProjectsContent;
