// store/useRoleStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface RoleState {
  role: "admin" | "user" | "manager" | null;
  setRole: (role: RoleState["role"]) => void;
  isAdmin: boolean;
  isUser: boolean;
}

export const useRoleStore = create<RoleState>()(
  persist(
    (set) => ({
      role: "admin",
      isAdmin: true,
      isUser: false,
      setRole: (role) =>
        set({
          role,
          isAdmin: role === "admin",
          isUser: role === "user",
        }),
    }),
    {
      name: "role-storage",
    }
  )
);
