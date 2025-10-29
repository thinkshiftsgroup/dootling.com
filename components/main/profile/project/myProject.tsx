import { Loader2 } from "lucide-react";
import ProjectCard from "./projectCard";
import { useProject } from "@/hooks/useProjects";
import { ProjectI } from "@/types/project";
import { useRouter } from "next/navigation";

const MyProjectsContent: React.FC<{
  projects: ProjectI[];
  isLoading: boolean;
  setManageProject: any;
  setSelectedProjectId: any;
  setConfirmCPEscrow: any;
}> = ({
  projects,
  isLoading,
  setSelectedProjectId,
  setManageProject,
  setConfirmCPEscrow,
}) => {
  const onManageClick = (id: string) => {
    setSelectedProjectId(id);
    setManageProject(true);
  };

  const router = useRouter();

  const onConfirmCPEClick = (id: string) => {
    setSelectedProjectId(id);
    setConfirmCPEscrow(true);
  };
  // const onCPEClick = (id: string) => {
  //   setSelectedProjectId(id);
  //   setCPEcrow(true);
  // };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center text-gray-500">
        <Loader2 size={20} className="animate-spin text-[#157bff]" />
        <p className="text-sm font-medium">Loading projects...</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {projects.length > 0 ? (
        <>
          {projects
            ?.filter((project: any) => project.isEscrowed === false)
            .map((project: any) => (
              <ProjectCard
                onManageClick={() => onManageClick(project.id)}
                // onCPEClick={() => onCPEClick(project.id)}
                onConfirmCPEClick={() => onConfirmCPEClick(project.id)}
                key={project.id}
                {...project}
              />
            ))}
        </>
      ) : (
        <div className="sm:!py-8 py-4 text-center text-gray-500">
          <p className="text-lg font-medium">No Projects</p>
          <p className="text-sm mt-1">
            Create your first project to get started
          </p>
        </div>
      )}
      {/* {projects.length > 0 ? (
        <>
          {projects
            ?.filter((project: any) => project.isEscrowed === false)
            .slice(0, 4)
            .map((project: any) => (
              <ProjectCard
                onManageClick={() => onManageClick(project.id)}
                // onCPEClick={() => onCPEClick(project.id)}
                onConfirmCPEClick={() => onConfirmCPEClick(project.id)}
                key={project.id}
                {...project}
              />
            ))}

          <p
            onClick={() => router.push("/projects")}
            className="mt-3 text-main hover:text-[#157bff] font-medium text-center text-sm cursor-pointer hover:underline"
          >
            view all
          </p>
        </>
      ) : (
        <div className="sm:!py-8 py-4 text-center text-gray-500">
          <p className="text-lg font-medium">No Projects</p>
          <p className="text-sm mt-1">
            Create your first project to get started
          </p>
        </div>
      )} */}
    </div>
  );
};

export default MyProjectsContent;
