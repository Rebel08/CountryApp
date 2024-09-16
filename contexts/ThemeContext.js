import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
  const [dark, setDark] = useState(
    JSON.parse(localStorage.getItem("darkTheme"))
  );
  return (
    <ThemeContext.Provider value={[dark, setDark]}>
      {children}
    </ThemeContext.Provider>
  );
}
