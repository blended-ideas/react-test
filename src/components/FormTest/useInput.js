import { useState } from 'react';

function useInput() {
  const [value, setValue] = useState('');
  const updateValue = (event) => setValue(event.target.value);
  return [value, updateValue];
}

export default useInput;
