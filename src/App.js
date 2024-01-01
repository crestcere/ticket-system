import "./App.css";
import Basvurulistesi from "./pages/Admin/Basvurulistesi";
import Basvuruolustur from "./pages/Basvuruolustur";
import Basvurusorgula from "./pages/Basvurusorgula";
import Basvurubasarili from "./pages/Basvurubasarili";
import Basvuru from "./pages/Basvuru";
import AdminBasvuru from "./pages/Admin/Basvuru";
import AdminGiris from "./pages/Admin/Giris";
import { GetDataProvider } from "./contexts/GetData";
import Notfound from "./pages/Notfound";
// import Menu from "./components/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import LoggedIn from "./layout/LoggedIn";
import LoggedOut from "./layout/LoggedOut";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<LoggedIn />}>
          <Route
            path="/admin/basvuru-listesi"
            element={
              <GetDataProvider>
                <AuthContextProvider>
                  <Basvurulistesi />
                </AuthContextProvider>
              </GetDataProvider>
            }
          />
          <Route path="/admin/basvuru/:id" element={<AdminBasvuru />}></Route>
        </Route>

        <Route path="/" element={<LoggedOut />}>
          <Route index element={<Basvuruolustur />}></Route>
          <Route
            path="/giris"
            element={
              <AuthContextProvider>
                <AdminGiris />
              </AuthContextProvider>
            }
          />
          <Route path="basvuru-sorgula" element={<Basvurusorgula />}></Route>
          <Route path="basvuru-basarili" element={<Basvurubasarili />}></Route>
          <Route path="basvuru/:id" element={<Basvuru />}></Route>
          <Route path="*" element={<Notfound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
