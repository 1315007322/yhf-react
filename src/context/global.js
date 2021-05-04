import { createContext } from "react";

export const defaultValue = {
  global: "react-day1",
};

export const globalContext = createContext(defaultValue);
