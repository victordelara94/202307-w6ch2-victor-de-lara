import { useContext } from 'react';
import { AppContext } from '../../context/context';

type Props = {
  children: string;
};
export const Key = ({ children }: Props) => {
  const {
    phoneContext: { add },
  } = useContext(AppContext);
  return (
    <li>
      <button onClick={() => add(children)} className="key">
        {children}
      </button>
    </li>
  );
};
