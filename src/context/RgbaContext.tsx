import { createContext, Dispatch, SetStateAction, useState } from "react";

export const RgbaContext = createContext<Uint8ClampedArray | undefined>(undefined);
export const RgbaDispatcherContext = createContext<RgbaDispatch>(() => {});

export const RgbaContextProvider = ({ children }: ContextProviderProps) => {
  const [rgba, setRgba] = useState<Uint8ClampedArray | undefined>(undefined);

  return (
    <RgbaDispatcherContext.Provider value={setRgba}>
      <RgbaContext.Provider value={rgba}>{children}</RgbaContext.Provider>
    </RgbaDispatcherContext.Provider>
  );
};

type RgbaDispatch = Dispatch<SetStateAction<Uint8ClampedArray | undefined>>;

interface ContextProviderProps {
  children: JSX.Element | JSX.Element[];
}
