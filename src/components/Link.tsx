import { routerContext } from '@app/routes/Router';
import React, { MouseEventHandler, useContext } from 'react';

interface LinkProps {
  to: string;
  children?: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ to, children }) => {
  const { changePath } = useContext(routerContext);

  const handleClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    console.log('link');
    changePath(to);
  };

  return (
    <a
      href={to}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

export default Link;
