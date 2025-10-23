import apiInstance from "@/api/apiInstance";
import { useAuthStore } from "@/stores/useAuthStore";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "sonner";

export const useProject = () => {
  const { user, setUser, isInitialized, token, initializeAuth } =
    useAuthStore();

  useEffect(() => {
    if (!isInitialized) {
      console.log("-> Initializing Auth Store...");
      initializeAuth();
    }
  }, [isInitialized, initializeAuth]);

  const getAllProject = useQuery({
    queryKey: ["get-all-project"],
    queryFn: async () => {
      const res = await apiInstance.get("/api/projects");
      return res.data;
    },
    enabled: isInitialized && !!user && !!token,
  });

  const createProject = useMutation({
    mutationKey: ["create-project"],
    mutationFn: async ({
      title,
      description,
      isPublic,
      contributorIds,
    }: {
      title: string;
      description: string;
      isPublic: boolean;
      contributorIds?: string[];
    }) => {
      const res = await apiInstance.post("api/projects", {
        title,
        description,
        isPublic,
        contributorIds,
      });
      return res.data;
    },
  });

  const convertProjectToEscrowFn = useMutation({
    mutationKey: ["convert-project-to-escrow"],
    mutationFn: async ({ projectId }: { projectId: string }) => {
      const res = await apiInstance.patch(
        `api/projects/${projectId}/escrow-activate`
      );
      return res.data;
    },
    onError: (err: any) => {
      // if (
      //   err.response.data.detail ===
      //   "Project is already marked as escrowed and cannot be updated again."
      // ) {
      //   toast.error("Project is already an escrow project");
      // } else {
        // }
        toast.error(err.response.data.message || "Something went wrong!");
    },
  });

  return {
    getAllProject,
    createProject,

    convertProjectToEscrowFn,
  };
};
