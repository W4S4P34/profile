import { Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import routes from "./pages/routes";

const Loading = () => <div>Loading...</div>;

function Content() {
  let location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      {routes.map(({ path, element: Component, props, ...rest }) => {
        return (
          <Route
            key={path}
            {...rest}
            path={path}
            element={
              <Suspense fallback={<Loading />}>
                <Component {...props} />
              </Suspense>
            }
          />
        );
      })}
    </Routes>
  );
}

export default Content;
