import { Actions } from '../actions/actions';
import { Keyboard } from '../keyboard/keyboard';

export const Phone = () => {
  return (
    <main className="phone">
      <Keyboard></Keyboard>
      <Actions></Actions>
    </main>
  );
};
