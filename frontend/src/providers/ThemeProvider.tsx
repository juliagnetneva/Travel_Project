import React, { useState } from "react";
//
import { themes } from "../theme/themes";

export const ThemeContext = React.createContext(themes.lightTheme);

export const ThemeStore = ({ children }: any) => {
  const [theme, setTheme] = useState(themes.lightTheme);

  const themeToggler = () => {
    setTheme(theme.type === "light" ? themes.darkTheme : themes.lightTheme);
  };

  return (
    <ThemeContext.Provider value={{ themeToggler, theme } as any}>
      {children}
    </ThemeContext.Provider>
  );
};
