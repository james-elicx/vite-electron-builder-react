import { useCallback, useMemo, useState } from 'react';

const fieldSetStyle: React.CSSProperties = {
  margin: '2rem',
  padding: '1rem',
};

export const ReactiveHash = (): JSX.Element => {
  const [rawString, setRawString] = useState<string>('HelloWorld');

  const onInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRawString(event.target.value);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [rawString],
  );

  const hashedString = useMemo(() => {
    return window.nodeCrypto.sha256sum(rawString);
  }, [rawString]);

  return (
    <fieldset style={fieldSetStyle}>
      <legend>Test Node.js API</legend>
      <label>
        Raw valued
        <input value={rawString} type="text" onChange={onInputChange} />
      </label>
      <br />
      <label>
        Hashed by node:crypto
        <input value={hashedString} type="text" readOnly={true} />
      </label>
    </fieldset>
  );
};
