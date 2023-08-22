import { createContext } from 'react';
import { usePhone } from '../components/hook/hook';

export type AppContextStructure = {
  phoneContext: ReturnType<typeof usePhone>;
};

export const AppContext = createContext<AppContextStructure>(
  {} as AppContextStructure
);
