import apiInstance from "@/api/apiInstance";
import { useAuthStore } from "@/stores/useAuthStore";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

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

  return {
    getAllProject,
    createProject
  };
};
