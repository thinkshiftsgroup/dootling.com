import { create } from "zustand";

interface User {
  id: string | number;
  email: string;
  name?: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isLoggedIn: boolean;
  unverifiedEmail: string | null;
  setUnverifiedEmail: (email: string) => void;
  clearUnverifiedEmail: () => void;
  login: (token: string, userData: User) => void;
  logout: () => void;
  initializeAuth: () => void;
}

const AUTH_STORAGE_KEY = "dootling_auth_state";

let preloadedAuth = { token: null, user: null };
if (typeof window !== "undefined") {
  const stored = localStorage.getItem(AUTH_STORAGE_KEY);
  if (stored) {
    try {
      preloadedAuth = JSON.parse(stored);
    } catch {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    }
  }
}

export const useAuthStore = create<AuthState>((set) => ({
  user: preloadedAuth.user,
  token: preloadedAuth.token,
  isLoggedIn: !!preloadedAuth.token,
  unverifiedEmail: null,

  setUnverifiedEmail: (email) => set({ unverifiedEmail: email }),
  clearUnverifiedEmail: () => set({ unverifiedEmail: null }),

  login: (token, userData) => {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify({ token, user: userData }));
    set({ token, user: userData, isLoggedIn: true });
  },

  logout: () => {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    set({ token: null, user: null, isLoggedIn: false });
  },

  initializeAuth: () => {
    if (typeof window !== "undefined") {
      const storedState = localStorage.getItem(AUTH_STORAGE_KEY);
      if (storedState) {
        try {
          const { token, user } = JSON.parse(storedState);
          set({ token, user, isLoggedIn: true });
        } catch (e) {
          console.error("Failed to parse stored auth state:", e);
          localStorage.removeItem(AUTH_STORAGE_KEY);
        }
      }
    }
  },
}));
