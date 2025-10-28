import apiInstance from "@/api/apiInstance";
import { useAuthStore } from "@/stores/useAuthStore";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "sonner";

export const useProject = () => {
  const { user, isInitialized, token, initializeAuth } = useAuthStore();

  useEffect(() => {
    if (!isInitialized) initializeAuth();
  }, [isInitialized, initializeAuth]);

  const getAllProject = useQuery({
    queryKey: ["get-all-project"],
    queryFn: async () => {
      const res = await apiInstance.get("/api/projects");
      return res.data;
    },
    enabled: isInitialized && !!user && !!token,
  });

  const getAllProjectById = (id: string | number | null) =>
    useQuery({
      queryKey: ["get-all-project-with-id", id],
      queryFn: async () => {
        const res = await apiInstance.get(`/api/projects/${id}/details`);
        return res.data.data;
      },
      enabled: !!id && isInitialized && !!user && !!token,
    });

  const editProjectById = useMutation({
    mutationKey: ["edit-project-with-id"],
    mutationFn: async ({
      id,
      payload,
    }: {
      id: string | number;
      payload: Record<string, any>;
    }) => {
      const res = await apiInstance.patch(
        `/api/projects/${id}/manage`,
        payload
      );
      return res.data;
    },
    onError: (err: any) => {
      toast.error(err.response?.data?.message || "Something went wrong!");
    },
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
    onError: (err: any) => {
      toast.error(err.response?.data?.message || "Failed to create project");
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
      toast.error(err.response?.data?.message || "Something went wrong!");
    },
  });

  const createMilestone = useMutation({
    mutationKey: ["create-milestone"],
    mutationFn: async ({
      id,
      payload,
    }: {
      id: string | number;
      payload: {
        title: string;
        releasePercentage: number;
        dueDate: string;
        description: string;
        image?: File;
        file?: File;
      };
    }) => {
      const formData = new FormData();
      formData.append("title", payload.title);
      formData.append("releasePercentage", String(payload.releasePercentage));
      formData.append("dueDate", payload.dueDate);
      formData.append("description", payload.description);

      if (payload.image) formData.append("image", payload.image);
      if (payload.file) formData.append("file", payload.file);

      const res = await apiInstance.post(
        `/api/milestones/${id}/create`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      return res.data;
    },
    onError: (err: any) => {
      toast.error(err.response?.data?.message || "Something went wrong!");
    },
  });

  return {
    getAllProject,
    getAllProjectById,
    editProjectById,
    createProject,
    convertProjectToEscrowFn,
    createMilestone,
  };
};
