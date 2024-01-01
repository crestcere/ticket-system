import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  if (localStorage.getItem("logged") === null) {
    localStorage.setItem("logged", "false");
  }
  const [logged, setLogged] = useState(localStorage.getItem("logged"));
  useEffect(() => {
    localStorage.setItem("logged", logged);
  }, [logged]);
  return (
    <>
      <AuthContext.Provider value={{ logged, setLogged }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthContext;
