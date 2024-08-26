import { create } from "zustand";

const currentBackgroundColor = getComputedStyle(document.documentElement)
  .getPropertyValue("--background-color")
  .trim();

type ModeStore = {
  mode: string;
  setMode: (data: string) => void;
};

export const useStore = create<ModeStore>()((set) => ({
  mode: currentBackgroundColor !== "black" ? "white" : "black",
  setMode: (currentMode: string) => set({ mode: currentMode }),
}));
