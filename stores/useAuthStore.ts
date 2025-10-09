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

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isLoggedIn: false,
  unverifiedEmail: null,
  setUnverifiedEmail: (email) => set({ unverifiedEmail: email }),
  clearUnverifiedEmail: () => set({ unverifiedEmail: null }),
  login: (token, userData) => {
    const authState = JSON.stringify({ token, user: userData });
    localStorage.setItem(AUTH_STORAGE_KEY, authState);

    set({
      token,
      user: userData,
      isLoggedIn: true,
    });
  },

  logout: () => {
    localStorage.removeItem(AUTH_STORAGE_KEY);

    set({
      token: null,
      user: null,
      isLoggedIn: false,
    });
  },

  initializeAuth: () => {
    if (typeof window !== "undefined") {
      const storedState = localStorage.getItem(AUTH_STORAGE_KEY);
      if (storedState) {
        try {
          const { token, user } = JSON.parse(storedState);
          set({
            token,
            user,
            isLoggedIn: true,
          });
        } catch (e) {
          console.error("Failed to parse stored auth state:", e);
          localStorage.removeItem(AUTH_STORAGE_KEY);
        }
      }
    }
  },
}));
