import { ReactiveHash, ReactiveCounter } from '../../components';

const aStyle: React.CSSProperties = {
  color: '#42b983',
};

export const Home = (): JSX.Element => {
  return (
    <div>
      <p>
        For a guide and recipes on how to configure / customize this project,
        <br />
        check out the{' '}
        <a
          href="https://github.com/cawa-93/vite-electron-builder"
          rel="noopener noreferrer"
          target="_blank"
          style={aStyle}
        >
          vite-electron-builder documentation
        </a>
        .
      </p>

      <p>
        <a
          href="https://vitejs.dev/guide/features.html"
          target="_blank"
          rel="noreferrer"
          style={aStyle}
        >
          Vite Documentation
        </a>{' '}
        |{' '}
        <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noreferrer">
          React Documentation
        </a>
      </p>

      <ReactiveCounter />

      <ReactiveHash />

      <p>
        Edit <code>renderer/src/pages/home/page.tsx</code> to test hot module replacement.
      </p>
    </div>
  );
};
