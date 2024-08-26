// context/AppContext.tsx
import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { Product } from "@/utils/types";

// Define the state interface
interface AppState {
  user: { name: string } | null;
  theme: "light" | "dark";
  isAuthenticated: boolean;
  cartContent: Product[];
}

// Define the type for the context value
interface AppContextType {
  state: AppState;
  setState: Dispatch<SetStateAction<AppState>>;
}

// Create the context with a default value
export const AppContext = createContext<AppContextType | undefined>(undefined);

// Define the props for the provider component
interface AppProviderProps {
  children: ReactNode;
}

// Create the provider component
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, setState] = useState<AppState>({
    user: null,
    theme: "light",
    isAuthenticated: false,
    cartContent: [], // Initialize cartContent as an empty array
  });

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};
