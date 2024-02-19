import React, { createContext, useState } from 'react';

interface LocationContextProps {
  location: {
    pathname: string;
  };
  setLocation: React.Dispatch<
    React.SetStateAction<{
      pathname: string;
    }>
  >;
}

export const LocationContext = createContext<LocationContextProps>({
  location: {
    pathname: '',
  },
  setLocation: () => {
    console.log('');
  },
});

interface RoutesProps {
  children: React.ReactNode;
}

const Router = ({ children }: RoutesProps) => {
  const [location, setLocation] = useState({ pathname: '/' });
  console.log(location);
  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export default Router;
