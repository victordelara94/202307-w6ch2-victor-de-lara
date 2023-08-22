import { ReactNode } from 'react';
import { AppContext, AppContextStructure } from './context';
import { usePhone } from '../components/hook/hook';


type Props = {
  children: ReactNode;
};
export function AppContextProvider({ children }: Props) {
  const context: AppContextStructure = {
    phoneContext: usePhone(),
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
