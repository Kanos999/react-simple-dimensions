import React, { createContext, useContext } from 'react';

const defaultSize = { width: 100, height: 100 };

export const SizeContext = createContext(defaultSize);

export const useSize = () => useContext(SizeContext);

export const SizeProvider = ({children, width, height}) => {

  
  return (
    <SizeContext.Provider value={{width, height}}>
      {children}
    </SizeContext.Provider>
  );
};