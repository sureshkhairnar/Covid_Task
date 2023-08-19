import React, { Suspense, useEffect } from "react";
import routes from "../FrontendRoutes";
import { Routes, Navigate, Route } from "react-router-dom";

const SidebarRoutes = () => {
  return (
    <>
      <Suspense
        fallback={
          <>
            <h2>Loading....</h2>
          </>
        }
      >
        <Routes>
          {Array.isArray(routes) &&
            routes.map(({ path, hasSubRoutes, component }, i) => (
              <>
                <Route
                  path={hasSubRoutes ? `${path}/*` : path}
                  element={component}
                />
                <Route path="" element={<Navigate to={path} />} />
              </>
            ))}
        </Routes>
      </Suspense>
    </>
  );
};

export default SidebarRoutes;
