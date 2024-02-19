import React, { useContext, useEffect, useState, useCallback } from 'react';
import { LocationContext } from '@app/routes/Router';

interface RouteProps {
  path: string;
  component: React.ReactElement;
}

const Route = ({ path, component }: RouteProps) => {
  const { pathname } = window.location;
  const [isPath, setIsPath] = useState(false);
  const { setLocation } = useContext(LocationContext);

  const route = useCallback(
    (pathname: string) => {
      if (path === pathname) {
        setIsPath(true);
      } else {
        setIsPath(false);
      }

      window.onpopstate = () => {
        setLocation({ pathname });
      };
    },
    [path, setLocation]
  );

  useEffect(() => {
    console.log(pathname);
    route(pathname);
  }, [pathname, route]);

  return isPath ? component : null;
};

export default Route;
