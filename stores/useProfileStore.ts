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

interface ProfileState {
  profile: (UserProfile & Biodata) | null;
  isLoading: boolean;
  isLoaded: boolean;

  setProfile: (profileData: UserProfile & Biodata) => void;
  clearProfile: () => void;
  setLoading: (loading: boolean) => void;
  setLoaded: (loaded: boolean) => void;

  updatePartialProfile: (data: Partial<UserProfile & Biodata>) => void;
}

export const useProfileStore = create<ProfileState>((set) => ({
  profile: null,
  isLoading: false,
  isLoaded: false,

  setLoading: (loading) => set({ isLoading: loading }),
  setLoaded: (loaded) => set({ isLoaded: loaded }),

  setProfile: (profileData) =>
    set({
      profile: profileData,
      isLoaded: true,
      isLoading: false,
    }),

  clearProfile: () =>
    set({
      profile: null,
      isLoaded: false,
      isLoading: false,
    }),

  updatePartialProfile: (data) =>
    set((state) => {
      if (!state.profile) return state;

      return {
        profile: {
          ...state.profile,
          ...data,
        },
      };
    }),
}));
