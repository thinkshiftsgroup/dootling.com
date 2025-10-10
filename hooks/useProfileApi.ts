import { useProfileStore } from "@/stores/useProfileStore";
import apiInstance from "@/api/apiInstance";
const useProfileActions = () => {
  const {
    setProfile,
    updatePartialProfile,
    setLoading,
    setLoaded,
    clearProfile,
  } = useProfileStore();

  const fetchUserProfile = async () => {
    setLoading(true);
    try {
      const response = await apiInstance.get("/api/profile");
      const combinedProfileData = response.data;
      setProfile(combinedProfileData);
    } catch (error) {
      console.error("Failed to fetch profile:", error);
      clearProfile();
    } finally {
      setLoading(false);
      setLoaded(true);
    }
  };

  const updateProfileDetails = async (data: any) => {
    setLoading(true);
    try {
      const response = await apiInstance.post("/api/profile", data);
      const updatedProfile = response.data;

      updatePartialProfile(updatedProfile);
      return updatedProfile;
    } catch (error) {
      console.error("Failed to update profile:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { fetchUserProfile, updateProfileDetails };
};

export default useProfileActions;
