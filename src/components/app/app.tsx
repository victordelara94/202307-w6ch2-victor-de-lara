import { AppContextProvider } from '../../context/context.provider';
import { Info } from '../info/info';
import { Phone } from '../phone/phone';

export const App = () => {
  return (
    <>
      <AppContextProvider>
        <Info></Info>
        <Phone></Phone>
      </AppContextProvider>
    </>
  );
};
