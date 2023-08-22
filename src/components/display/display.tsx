import { useContext } from 'react';
import { AppContext } from '../../context/context';

export const Display = () => {
  const {
    phoneContext: { numbers },
  } = useContext(AppContext);
  return <span className="number">{numbers}</span>;
};
