import { RouterContext } from '@app/routes/Router';
import React, { MouseEventHandler, useContext } from 'react';

interface LinkProps {
  to: string;
  children?: React.ReactNode;
}

const Link = ({ to, children }: LinkProps) => {
  const { changePath } = useContext(RouterContext);

  const handleClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault(); // a tag 기본 동작 막기
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
