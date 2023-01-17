export interface ICounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
  add: (number: number) => void;
}
