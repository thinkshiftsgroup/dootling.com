import { create } from "zustand";

interface UserProfile {
  id: string;
  email: string;
  username: string;
  fullName: string;
  firstname: string | null;
  lastname: string | null;
  userType: string;
  isVerified: boolean;
}

interface Biodata {
  dateOfBirth: Date | string;
  country: string | null;
  pronouns: string | null;
  phone: string | null;
  languages: string | null;
  city: string | null;
  role: string | null;
  industry: string | null;
  tags: string | null;
  headline: string | null;
}

type ProfileType = UserProfile & Biodata;

interface ProfileState {
  profile: ProfileType | null;
  isLoading: boolean;
  isLoaded: boolean;

  setProfile: (profileData: ProfileType) => void;
  clearProfile: () => void;
  setLoading: (loading: boolean) => void;
  setLoaded: (loaded: boolean) => void;

  updatePartialProfile: (data: Partial<ProfileType>) => void;
}

const PROFILE_STORAGE_KEY = "dootling_profile_state";

let preloadedProfile: { profile: ProfileType | null } = {
  profile: null,
};

if (typeof window !== "undefined") {
  const stored = localStorage.getItem(PROFILE_STORAGE_KEY);
  if (stored) {
    try {
      preloadedProfile = JSON.parse(stored);

      if (preloadedProfile.profile && !("id" in preloadedProfile.profile)) {
        preloadedProfile.profile = null;
        localStorage.removeItem(PROFILE_STORAGE_KEY);
      }
    } catch {
      localStorage.removeItem(PROFILE_STORAGE_KEY);
    }
  }
}

export const useProfileStore = create<ProfileState>((set) => ({
  profile: preloadedProfile.profile,
  isLoading: false,
  isLoaded: !!preloadedProfile.profile,

  setLoading: (loading) => set({ isLoading: loading }),
  setLoaded: (loaded) => set({ isLoaded: loaded }),

  setProfile: (profileData) => {
    localStorage.setItem(
      PROFILE_STORAGE_KEY,
      JSON.stringify({ profile: profileData })
    );
    set({
      profile: profileData,
      isLoaded: true,
      isLoading: false,
    });
  },

  clearProfile: () => {
    localStorage.removeItem(PROFILE_STORAGE_KEY);
    set({
      profile: null,
      isLoaded: false,
      isLoading: false,
    });
  },

  updatePartialProfile: (data) =>
    set((state) => {
      if (!state.profile) return state;

      const newProfile = {
        ...state.profile,
        ...data,
      };

      localStorage.setItem(
        PROFILE_STORAGE_KEY,
        JSON.stringify({ profile: newProfile })
      );

      return {
        profile: newProfile,
      };
    }),
}));
