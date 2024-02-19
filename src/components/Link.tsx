import { useRouter } from '@app/hooks/hook';
import React from 'react';

interface LinkProps {
  children: React.ReactNode;
  to: string;
}

const Link = ({ children, to }: LinkProps) => {
  const { push } = useRouter();
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        push(to);
      }}
    >
      {children}
    </button>
  );
};

export default Link;
