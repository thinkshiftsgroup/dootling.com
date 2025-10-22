import apiInstance from "@/api/apiInstance";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export const useFollowing = () => {
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
  });

  return {
    followUser,
    unFollowUser,
    similarProfiles
  };
};
