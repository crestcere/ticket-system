import { useContext, useEffect } from "react";
import GetData from "../../../contexts/GetData";
// import Basvuru from "../Basvuru";
import { Link } from "react-router-dom";
import AuthContext from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
const Basvurulistesi = () => {
  const data = useContext(GetData);
  const { logged } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (logged === "false") {
      navigate("/admin/giris");
    }
  }, [logged, navigate]);

  console.log("data", data);

  return (
    <div>
      <h1>Başvuru Listesi</h1>
      <table>
        <tbody>
          <tr>
            <th>Başvuru ID</th>
            <th>Başvuru Adı</th>
            <th>Başvuru Durumu</th>
          </tr>
          {data.map((item) => (
            <tr key={item.id} className={styles.tableRow}>
              <td>{item.id}</td>
              <td>
                <Link to={`/admin/basvuru/${item.id}`} state={item.id}>
                  {item.title}
                </Link>
              </td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Basvurulistesi;
