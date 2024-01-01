import { Outlet } from "react-router-dom";
import Menu from "../../components/Menu";
import { AuthContextProvider } from "../../contexts/AuthContext";

function LoggedIn() {
  return (
    <>
      <AuthContextProvider>
        <Menu />
      </AuthContextProvider>
      <div id="content">
        <Outlet />
      </div>
    </>
  );
}

export default LoggedIn;
