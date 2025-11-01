import apiInstance from "@/api/apiInstance";
import { useAuthStore } from "@/stores/useAuthStore";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "sonner";

export const useFollowing = () => {
  const { user, setUser, isInitialized, token, initializeAuth } =
    useAuthStore();

  useEffect(() => {
    if (!isInitialized) {
      console.log("-> Initializing Auth Store...");
      initializeAuth();
    }
  }, [isInitialized, initializeAuth]);

  const followUser = useMutation({
    mutationKey: ["followUser"],
    mutationFn: async ({ userId }: { userId: string }) => {
      const res = await apiInstance.post(`api/follows/${userId}`);
      console.log(res.data, "follow res");
      return res.data;
    },
    onError: (err: any) => {
      toast.error(err || "Something went wrong!");
    },
  });

  const unFollowUser = useMutation({
    mutationKey: ["unFollowUser"],
    mutationFn: async ({ userId }: { userId: string }) => {
      const res = await apiInstance.delete(`api/follows/${userId}`);
      return res.data;
    },
    onError: (err: any) => {
      toast.error(err || "Something went wrong!");
    },
  });

  const similarProfiles = useQuery({
    queryKey: ["similar-users"],
    queryFn: async () => {
      const res = await apiInstance.get("/api/follows/find");
      return res.data;
    },
    enabled: isInitialized && !!user && !!token,
  });

  const getFollowers = useQuery({
    queryKey: ["get-followers"],
    queryFn: async () => {
      const res = await apiInstance.get("/api/follows/followers");
      return res.data;
    },
    enabled: isInitialized && !!user && !!token,
  });
 
  const getAllContributors = useQuery({
    queryKey: ["get-all-contributors"],
    queryFn: async () => {
      const res = await apiInstance.get("/api/projects/contributors");
      return res.data;
    },
    enabled: isInitialized && !!user && !!token,
  });

  const recentContributors = useQuery({
    queryKey: ["get-recent-contributors"],
    queryFn: async () => {
      const res = await apiInstance.get("/api/projects/contributors/recent");
      return res.data;
    },
    enabled: isInitialized && !!user && !!token,
  });

  return {
    followUser,
    unFollowUser,
    similarProfiles,
    getFollowers,
    getAllContributors,
    recentContributors
  };
};
