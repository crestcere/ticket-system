import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
const Basvuru = () => {
  const id = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      await fetch(
        `https://658474b64d1ee97c6bcfc71b.mockapi.io/api/v1/issues/${id.id}`,
      )
        .then((res) => res.json())
        .then((res) => setData(res));
    };
    getData();
  }, [id.id]);

  // const datas = await response.json();
  // setData(datas);
  return (
    <div className={styles.mainDiv}>
      <table>
        <tbody>
          <tr>
            <td>Başvuru:</td>
            <td>{id.id}</td>
          </tr>
          <tr>
            <td>Title:</td>
            <td>{data.title}</td>
          </tr>
          <tr>
            <td>Create Date:</td>
            <td>{data.createDate}</td>
          </tr>
          <tr>
            <td>Status:</td>
            <td>{data.status}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{data.email}</td>
          </tr>
          <tr className={styles.descriptionCell}>
            <td>Description:</td>
            <td>{data.description}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Basvuru;
