import { useState } from 'react';

const fieldSetStyle: React.CSSProperties = {
  margin: '2rem',
  padding: '1rem',
};

export const ReactiveCounter = (): JSX.Element => {
  const [count, setCount] = useState<number>(0);

  const onCountClicked = () => setCount((prevVal) => prevVal + 1);

  return (
    <fieldset style={fieldSetStyle}>
      <legend>Test React Reactivity</legend>
      <button onClick={onCountClicked}>count is: {count}</button>
    </fieldset>
  );
};
