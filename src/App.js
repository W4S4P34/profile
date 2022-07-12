import React from 'react'
import { Routes, Route } from 'react-router-dom'

import routes from './pages/routes'

function App() {
  return (
    <Routes>
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
        )
      })}
    </Routes>
  )
}

const Loading = () => <div>Loading...</div>;

export default App
