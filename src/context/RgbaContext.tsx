import { createContext, Dispatch, SetStateAction, useState } from "react";

const INITIAL_VALUE: number[][] = [[]];

export const RgbaContext = createContext<number[][]>(INITIAL_VALUE);
export const RgbaDispatcherContext = createContext<RgbaDispatch>(() => {});

export const RgbaContextProvider = ({ children }: ContextProviderProps) => {
  const [rgba, setRgba] = useState<number[][]>([[]]);

  return (
    <RgbaDispatcherContext.Provider value={setRgba}>
      <RgbaContext.Provider value={rgba}>{children}</RgbaContext.Provider>
    </RgbaDispatcherContext.Provider>
  );
};

type RgbaDispatch = Dispatch<SetStateAction<number[][]>>;

interface ContextProviderProps {
  children: JSX.Element | JSX.Element[];
}
