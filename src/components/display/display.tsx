import { usePhone } from '../hook/use.phone';

export const Display = () => {
  const { phoneState } = usePhone();
  return <span className="number">{phoneState.phoneNumbers}</span>;
};
