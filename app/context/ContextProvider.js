"use client";
import React, { createContext, useState, useContext } from "react";
import { specialtiesData } from "../data/fakeDb";
// Create a Context
const MyContext = createContext();

// Create a provider component
const ContextProvider = ({ children }) => {
  const [userState, setUserState] = useState({
    id: null,
    phoneNumber: null,
  });

  return (
    <MyContext.Provider value={{ specialtiesData, userState, setUserState }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, ContextProvider };
export const useDataContext = () => useContext(MyContext);
