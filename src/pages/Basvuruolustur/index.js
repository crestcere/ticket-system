import { useEffect, useState } from "react";
import { useFormik } from "formik";
import validation from "./validation";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Basvuruolustur = () => {
  const navigate = useNavigate();
  const [ids, setIds] = useState(0);

  useEffect(() => {
    console.log("id: ", ids);
  }, [ids]);

  const createTask = (values) => {
    fetch("https://658474b64d1ee97c6bcfc71b.mockapi.io/api/v1/issues", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((task) => {
        setIds(task.id);
        navigate("/basvuru-basarili", {
          state: { id: task.id },
        });
      })
      .catch((error) => console.log(error));
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      title: "",
      description: "",
    },
    onSubmit: (values, bag) => {
      values.createDate = new Date().toISOString().slice(0, 10);
      values.status = "Open";
      values.resolveDate = "";
      createTask(values);
    },
    validationSchema: validation,
  });

  return (
    <div className={styles.body}>
      <h1>Başvuru Oluştur</h1>
      <form className={styles.formMain} onSubmit={formik.handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        {formik.errors.title && (
          <div className={styles.error}>{formik.errors.title}</div>
        )}
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && (
          <div className={styles.error}>{formik.errors.email}</div>
        )}
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          className={styles.description}
          type="text"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
        {formik.errors.description && (
          <div className={styles.error}>{formik.errors.description}</div>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Basvuruolustur;
