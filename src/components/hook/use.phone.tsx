import { SyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux/phone.slice';
import { AppDispatch, RootState } from '../../store/store';

export function usePhone() {
  const phoneState = useSelector((state: RootState) => state.phone);
  const dispatch = useDispatch<AppDispatch>();

  const add = (number: string) => {
    if (phoneState.phoneNumbers.length < 9)
      dispatch(actions.addNumbers(number));
  };
  const call = (event: SyntheticEvent) => {
    if (phoneState.phoneNumbers.length === 9) {
      (event.target as HTMLAnchorElement).classList.add('active');
      dispatch(actions.call());
      setTimeout(() => hang(event), 5000);
    }
  };
  const hang = (event: SyntheticEvent) => {
    dispatch(actions.hang());
    (event.target as HTMLAnchorElement).classList.remove('active');
  };

  const deleteLastNumber = () => {
    dispatch(actions.clear());
  };
  return {
    add,
    phoneState: phoneState,
    call,
    hang,
    deleteLastNumber,
  };
}
