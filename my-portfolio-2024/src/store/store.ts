import { create } from "zustand";
import { persist } from "zustand/middleware";

const currentBackgroundColor = getComputedStyle(document.documentElement)
  .getPropertyValue("--background-color")
  .trim();

/*--------------------------------DARK MODE STORE------------------------------------- */
type DarkModeStore = {
  mode: string;
  setMode: (data: string) => void;
};

export const darkModeStore = create<DarkModeStore>()((set) => ({
  mode: currentBackgroundColor !== "black" ? "white" : "black",
  setMode: (currentMode: string) => set({ mode: currentMode }),
}));

/*--------------------------------BLINKING STORE------------------------------------- */
type BlinkingStore = {
  isBlinking: boolean;
  setBlinking: (data: boolean) => void;
};

export const blinkingStore = create<BlinkingStore>()((set) => ({
  isBlinking: true,
  setBlinking: (blinking: boolean) => set({ isBlinking: blinking }),
}));

/*--------------------------------SELECTED STACK STORE------------------------------------- */
type SelectedStackStore = {
  stackSelected: number;
  setStackSelected: (data: number) => void;
};

export const selectedStackStore = create<SelectedStackStore>()(
  persist(
    (set) => ({
      stackSelected: 1, // JAVA BY DEFAULT
      setStackSelected: (stack: number) => set({ stackSelected: stack }),
    }),
    {
      name: "selected-stack-storage", // unique name for storage
      getStorage: () => localStorage, // (optional) specify the storage type, localStorage is default
    }
  )
);
