import { usePhone } from '../hook/use.phone';

export const Info = (/*Props*/) => {
  const { phoneState } = usePhone();
  return <span>{phoneState.mode}</span>;
};
