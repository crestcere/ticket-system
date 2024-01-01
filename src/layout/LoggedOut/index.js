import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const LoggedOut = () => {
  const navigate = useNavigate();
  return (
    <>
      <ul className={styles.menuTitle}>
        <li className={styles.menuItem} onClick={() => navigate("/giris")}>
          Giriş
        </li>
        <li className={styles.menuItem} onClick={() => navigate("/")}>
          Başvuru Oluştur
        </li>
        <li
          className={styles.menuItem}
          onClick={() => navigate("basvuru-sorgula")}
        >
          Başvuru Sorgula
        </li>
      </ul>
      <div id="content">
        <Outlet />
      </div>
    </>
  );
};

export default LoggedOut;
