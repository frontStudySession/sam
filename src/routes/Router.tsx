import React from 'react';

interface RoutesProps {
  children: React.ReactElement;
}

const Router = ({ children }: RoutesProps) => {
  return children;
};

export default Router;
