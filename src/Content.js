import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

import routes from './pages/routes';

const Loading = () => <div>Loading...</div>;

function Content() {
  let location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        {routes.map(({ path, element: Component, props, ...rest }) => {
          return (
            <Route
              key={path}
              {...rest}
              path={path}
              element={
                <React.Suspense fallback={<Loading />}>
                  <Component {...props} />
                </React.Suspense>
              }
            />
          );
        })}
      </Routes>
    </AnimatePresence>
  );
}

export default Content;
