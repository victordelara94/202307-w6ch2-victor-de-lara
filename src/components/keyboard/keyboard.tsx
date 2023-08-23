import { usePhone } from '../hook/use.phone';
import { Key } from '../key/key';

export const Keyboard = () => {
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const { deleteLastNumber } = usePhone();
  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        {numbers.map((number) => (
          <Key key={number}>{number}</Key>
        ))}
        <li>
          <button onClick={() => deleteLastNumber()} className="key big">
            delete
          </button>
        </li>
      </ol>
    </div>
  );
};
