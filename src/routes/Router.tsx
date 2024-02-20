import React, { createContext, useState, useEffect } from 'react';

interface RouterContext {
  pathname: string;
  changePath(value: string): void;
}

export const RouterContext = createContext<RouterContext>({
  pathname: '',
  changePath: () => undefined,
});

interface RouterProps {
  children?: React.ReactNode;
}
const Router = ({ children }: RouterProps) => {
  const [pathname, setPathname] = useState(window.location.pathname);

  const changePath = (path: string) => {
    setPathname(path);
    history.pushState(null, '', path);
  };

  useEffect(() => {
    window.onpopstate = () => {
      setPathname(window.location.pathname);
    };

    // onpopstate 이벤트 핸들러 초기화
    return () => {
      window.onpopstate = null;
    };
  }, []);

  const contextValue: RouterContext = {
    pathname,
    changePath,
  };

  return (
    <RouterContext.Provider value={contextValue}>
      {children}
    </RouterContext.Provider>
  );
};

export default Router;
