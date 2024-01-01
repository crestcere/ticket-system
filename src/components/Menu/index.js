import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import { useContext } from "react";
import styles from "./styles.module.css";

const Menu = () => {
  const navigate = useNavigate();
  const { logged, setLogged } = useContext(AuthContext);
  logged();
  return (
    <>
      <ul className={styles.menuTitle}>
        <li
          className={styles.menuItem}
          onClick={() => navigate("/admin/basvuru-listesi")}
        >
          Başvuru Listesi
        </li>
        <li
          className={styles.menuItem}
          onClick={() => {
            setLogged("false");
            navigate("/");
          }}
        >
          Çıkış
        </li>
      </ul>
    </>
  );
};

export default Menu;
