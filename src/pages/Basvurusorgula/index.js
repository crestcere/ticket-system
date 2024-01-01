import { useFormik } from "formik";
import validation from "./validation";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Basvurusorgula = () => {
  const [data, setData] = useState({});
  const [value, setValue] = useState({});
  const navigate = useNavigate();

  const getData = async (data) => {
    await fetch(
      `https://658474b64d1ee97c6bcfc71b.mockapi.io/api/v1/issues/${data.sorguid}`,
    )
      .then((res) => res.json())
      .then((datas) => {
        console.log(datas);
        setValue(datas);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    console.log("data: ", data);
    if (data.sorguid) {
      console.log();
      getData(data);
    }
  }, [data]);

  useEffect(() => {
    console.log("value: ", value);
  }, [value]);
  const formik = useFormik({
    initialValues: {
      sorguid: "",
    },
    onSubmit: (values, bag) => {
      console.log(JSON.stringify(values, null, 2));
      setData(values);
      bag.resetForm();
    },
    validationSchema: validation,
  });

  return (
    <div>
      <h1>Basvuru sorgula</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="sorguid">Başvuru Numarası</label>
        <input
          id="sorguid"
          name="sorguid"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.sorguid}
        />
        <button type="submit">Submit</button>
      </form>
      {formik.errors.sorguid && formik.touched.sorguid && (
        <div>{formik.errors.sorguid}</div>
      )}
      {value && (
        <div>
          <p onClick={() => navigate(`/basvuru/${value.id}`)}>{value.title}</p>
          <p>{value.status}</p>
        </div>
      )}
    </div>
  );
};

export default Basvurusorgula;
