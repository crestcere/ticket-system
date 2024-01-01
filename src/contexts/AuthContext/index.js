import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [logged, setLogged] = useState(() => localStorage.getItem("logged") || "false");
  if (localStorage.getItem("logged") === null) {
    localStorage.setItem("logged", "false");
  };

  // useEffect(() => {
  //   localStorage.setItem("logged", logged);
  // }, [logged]);
  return (
    <>
      <AuthContext.Provider value={{ logged, setLogged }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthContext;
