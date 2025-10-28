import { create } from "zustand";

interface RoleState {
  role: "admin" | "user" | "manager" | null;
  setRole: (role: RoleState["role"]) => void;
  isAdmin: () => boolean;
  isUser: () => boolean;
}

export const useRoleStore = create<RoleState>((set, get) => ({
  role: null,
  setRole: (role) => set({ role }),
  isAdmin: () => get().role === "admin",
  isUser: () => get().role === "user",
}));
