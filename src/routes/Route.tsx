import { routerContext } from '@app/routes/Router';
import React, { useState, useEffect, useContext, useCallback } from 'react';
interface RouteProps {
  path: string;
  component: React.ReactElement;
}
const Route = ({ path, component }: RouteProps) => {
  const { pathname } = useContext(routerContext);
  const [isPath, setIsPath] = useState(false);

  // pathname과 일치하면 해당 컴포넌트 렌더
  // route 함수 인스턴스 useCallback 으로 메모이제이션
  const route = useCallback(
    (pathname: string) => {
      if (path === pathname) setIsPath(true);
      else setIsPath(false);
    },
    [path]
  );

  useEffect(() => {
    route(pathname);
  }, [pathname, route]);

  return isPath ? component : null;
};

export default Route;
