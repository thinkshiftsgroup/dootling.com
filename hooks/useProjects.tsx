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
        releaseDate: string;
        description: string;
        images?: File[];
        files?: File[];
      };
    }) => {
      const formData = new FormData();
      formData.append("title", payload.title);
      formData.append("releasePercentage", String(payload.releasePercentage));
      formData.append("dueDate", payload.dueDate);
      // formData.append("releaseDate", payload.releaseDate);
      formData.append("description", payload.description);

      if (payload.images?.length) {
        payload.images.forEach((img) => formData.append("image", img));
      }

      if (payload.files?.length) {
        payload.files.forEach((file) => formData.append("file", file));
      }

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

  const editMilestone = useMutation({
    mutationKey: ["edit-milestone"],
    mutationFn: async ({
      id,
      payload,
    }: {
      id: string | number;
      payload: {
        title: string;
        releasePercentage: number;
        dueDate: string;
        releaseDate: string;
        description: string;
        images?: File[];
        files?: File[];
        action: string;
        id: string;
      };
    }) => {
      const formData = new FormData();
      formData.append("title", payload.title);
      formData.append("releasePercentage", String(payload.releasePercentage));
      formData.append("dueDate", payload.dueDate);
      // formData.append("releaseDate", payload.releaseDate);
      formData.append("description", payload.description);
      formData.append("action", payload.action);
      formData.append("id", payload.id);

      if (payload.images?.length) {
        payload.images.forEach((img) => formData.append("image", img));
      }

      if (payload.files?.length) {
        payload.files.forEach((file) => formData.append("file", file));
      }

      const res = await apiInstance.patch(
        `/api/milestones/${id}/manage`,
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

  const getMilestonebyId = (id: string | number | null) =>
    useQuery({
      queryKey: ["get-milestone-with-project-id", id],
      queryFn: async () => {
        const res = await apiInstance.get(`/api/milestones/${id}`);
        return res.data;
      },
      enabled: !!id && isInitialized && !!user && !!token,
    });

  const createTask = useMutation({
    mutationKey: ["create-task"],
    mutationFn: async ({
      projectId,
      milestoneId,
      payload,
    }: {
      projectId: string | number;
      milestoneId: string | number;
      payload: {
        title: string;
        percentageOfProject: number;
        dueDate: string;
        description: string;
        image?: File[];
        file?: File[];
        action: string;
        priority: string;
        contributorId: string;
        percentageToRelease?: number;
        releaseDate?: string;
        id?: string;
      };
    }) => {
      const formData = new FormData();

      // Basic fields
      formData.append("title", payload.title);
      formData.append(
        "percentageOfProject",
        String(payload.percentageOfProject)
      );
      formData.append("dueDate", payload.dueDate);
      formData.append("description", payload.description);
      formData.append("action", payload.action);
      formData.append("priority", payload.priority);
      formData.append("contributorId", payload.contributorId);
      
      if (payload.id !== undefined) {
        formData.append("id", String(payload.id));
      }
      if (payload.percentageToRelease !== undefined) {
        formData.append(
          "percentageToRelease",
          String(payload.percentageToRelease)
        );
      }

      if (payload.releaseDate) {
        formData.append("releaseDate", payload.releaseDate);
      }

      if (payload.image?.length) {
        payload.image.forEach((img) => formData.append("image", img));
      }

      if (payload.file?.length) {
        payload.file.forEach((file) => formData.append("file", file));
      }

      const res = await apiInstance.post(
        `/api/tasks/projects/${projectId}/milestones/${milestoneId}`,
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

  const getTasksbyId = (id: string | number | null) =>
    useQuery({
      queryKey: ["get-task-with-milestone-id", id],
      queryFn: async () => {
        const res = await apiInstance.get(`/api/tasks/milestones/${id}`);
        return res.data;
      },
      enabled: !!id && isInitialized && !!user && !!token,
    });

  return {
    getAllProject,
    getAllProjectById,
    editProjectById,
    createProject,

    convertProjectToEscrowFn,

    createMilestone,
    getMilestonebyId,
    editMilestone,

    createTask,
    getTasksbyId,
  };
};
