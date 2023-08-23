import { usePhone } from '../hook/use.phone';

type Props = {
  children: string;
};
export const Key = ({ children }: Props) => {
  const { add } = usePhone();
  return (
    <li>
      <button onClick={() => add(children)} className="key">
        {children}
      </button>
    </li>
  );
};
