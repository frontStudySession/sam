import React, { createContext, useState, useEffect } from 'react';

interface RouterContext {
  pathname: string;
  changePath(value: string): void;
}

export const routerContext = createContext<RouterContext>({
  pathname: '',
  changePath: () => undefined,
});

routerContext.displayName = 'RouterContext';

interface RouterProps {
  children?: React.ReactNode;
}
const Router = ({ children }: RouterProps) => {
  const [pathname, setPathname] = useState(window.location.pathname);

  const changePath = (path: string) => {
    setPathname(path);
    window.history.pushState(null, '', path);
  };

  // useEffect(() => {
  //   const handleOnpopstate = (event: PopStateEvent) => {
  //     setPathname(event.state?.path || '/');
  //   };

  //   window.addEventListener('popstate', handleOnpopstate);
  //   return () => {
  //     window.removeEventListener('popstate', handleOnpopstate);
  //   };
  // }, []);

  const contextValue: RouterContext = {
    pathname,
    changePath,
  };

  return (
    <routerContext.Provider value={contextValue}>
      {children}
    </routerContext.Provider>
  );
};

export default Router;
