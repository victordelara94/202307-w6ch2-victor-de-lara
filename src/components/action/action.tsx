// type Props = {
//   numbersLength: number;

import { usePhone } from '../hook/use.phone';

// };
export const Action = () => {
  const { hang, call } = usePhone();
  return (
    <>
      <a href="#" className="call" onClick={(event) => call(event)}>
        Call
      </a>

      <a href="#" className="hang active" onClick={(event) => hang(event)}>
        Hang
      </a>
    </>
  );
};
