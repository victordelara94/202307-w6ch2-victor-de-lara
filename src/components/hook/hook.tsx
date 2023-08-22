import { useState } from 'react';
import { Key } from '../key/key';

Key;
export function usePhone() {
  const initialValue = '';
  const [numbers, setNumbers] = useState<string>(initialValue);

  const add = (number: string) => {
    setNumbers(numbers + number);
  };
  return { numbers, setNumbers, add };
}
