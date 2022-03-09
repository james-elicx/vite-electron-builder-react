import { Link } from 'react-router-dom';

const navStyle: React.CSSProperties = {
  display: 'flex',
  gap: '1em',
  justifyContent: 'center',
};

export const Navigation = (): JSX.Element => {
  return (
    <nav className="navigation" style={navStyle}>
      <Link to="/">Home</Link>
      <span> | </span>
      <Link to="/about">About</Link>
    </nav>
  );
};
