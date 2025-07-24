import { create } from "zustand"

import { persist, createJSONStorage } from "zustand/middleware"

import type { GlobalStore } from "@/shared/types"

const useGlobalStore = create<GlobalStore>()(
  persist(
    (set) => ({
      manualInput: {
        number: "",
        type: "math"
      },
      random: "",
      setManualInput: (data) =>
        set((state) => ({
          manualInput: { ...state.manualInput, ...data }
        })),
      setRandom: (random) =>
        set(() => ({
          random
        }))
    }),
    { name: "global-storage", storage: createJSONStorage(() => localStorage) }
  )
)

export default useGlobalStore
