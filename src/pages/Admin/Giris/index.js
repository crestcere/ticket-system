import { useContext, useState } from "react";
import AuthContext from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
const Giris = () => {
  const { logged, setLogged } = useContext(AuthContext);
  const [login, setLogin] = useState({ id: "", password: "" });
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  // useEffect(() => {
  //   if (logged === "true") {
  //     navigate("/admin/basvuru-listesi");
  //   }
  // }, [logged]);

  const handleSubmit = () => {
    if (login.id === "kodluyoruz" && login.password === "bootcamp109") {
      setLogged("true");
      console.log("logged in setLogged: ", logged);
      localStorage.setItem("logged", "true");
      navigate("/admin/basvuru-listesi");
    } else {
      setError(true);
    }
  };
  return (
    <div className={styles.body}>
      <label>Username</label>
      <input onChange={handleChange} name="id" value={login.id} />
      <label>Password</label>
      <input onChange={handleChange} name="password" value={login.password} />
      <button
        className={styles.button}
        onClick={() => {
          handleSubmit();
        }}
      >
        Giriş
      </button>
      {error && <p>Username or password is incorrect</p>}
    </div>
  );
};

export default Giris;
