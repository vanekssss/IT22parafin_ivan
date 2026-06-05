import { createContext, useState } from "react";

export const AppContext = createContext();

function AppProvider({ children }) {
  const [students, setStudents] = useState([]);

  return (
    <AppContext.Provider
      value={{ students, setStudents }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;