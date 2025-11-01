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
  biodata: {
    dateOfBirth: Date;
    country: string | null;
    pronouns: string | null;
    phone: string | null;
    city: string | null;
    role: string | null;
    industry: string | null;
    tags: string | null;
    headline: string | null;
    languages: string | null;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
  } | null;
}

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

type ProfileType = UserProfile;

const AUTH_STORAGE_KEY = "dootling_auth_state";

let preloadedProfile: { profile: ProfileType | null; token: string | null } = {
  profile: null,
  token: null,
};

if (typeof window !== "undefined") {
  const stored = localStorage.getItem(AUTH_STORAGE_KEY);
  if (stored) {
    try {
      const parsedState = JSON.parse(stored) as {
        token: string | null;
        user: ProfileType | null;
      };

      if (parsedState.user && "id" in parsedState.user) {
        preloadedProfile.profile = parsedState.user;
        preloadedProfile.token = parsedState.token;
      } else {
        localStorage.removeItem(AUTH_STORAGE_KEY);
      }
    } catch {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    }
  }
}

const getStoredAuthState = (): {
  token: string | null;
  user: ProfileType | null;
} => {
  if (typeof window === "undefined") return { token: null, user: null };
  const stored = localStorage.getItem(AUTH_STORAGE_KEY);
  if (stored) {
    try {
      const parsed = JSON.parse(stored) as {
        token: string | null;
        user: ProfileType | null;
      };
      return parsed;
    } catch {}
  }
  return { token: null, user: null };
};

export const useProfileStore = create<ProfileState>((set, get) => ({
  profile: preloadedProfile.profile,
  isLoading: false,
  isLoaded: !!preloadedProfile.profile,

  setLoading: (loading) => set({ isLoading: loading }),
  setLoaded: (loaded) => set({ isLoaded: loaded }),

  setProfile: (profileData) => {
    const { token: tokenToPreserve } = getStoredAuthState();

    const storagePayload = { user: profileData, token: tokenToPreserve };

    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(storagePayload));
    set({
      profile: profileData,
      isLoaded: true,
      isLoading: false,
    });
  },

  clearProfile: () => {
    localStorage.removeItem(AUTH_STORAGE_KEY);
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

      const { token: tokenToPreserve } = getStoredAuthState();

      const storagePayload = { user: newProfile, token: tokenToPreserve };

      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(storagePayload));

      return {
        profile: newProfile,
      };
    }),
}));
