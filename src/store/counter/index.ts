import { ICounterState } from "types/store/counter";
import { create } from "zustand";

export const useCounterStore = create<ICounterState>()((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  add: (number) => set((state) => ({ count: state.count + number })),
}));
