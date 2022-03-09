import { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '/@/pages';
import { Navigation } from '/@/components';
import ReactLogo from '/@/../assets/logo.svg';
import './app.scss';

const About = lazy(() => import('/@/pages/about').then((module) => ({ default: module.About })));

export const App = (): JSX.Element => {
  return (
    <>
      <img alt="React logo" src={ReactLogo} width="300" height="300" />
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <About />
              </Suspense>
            }
          />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};
