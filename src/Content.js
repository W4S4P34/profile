import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import routes from "./pages/routes";

const Loading = () => <div>Loading...</div>;

function Content() {
  return (
    <Routes>
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
