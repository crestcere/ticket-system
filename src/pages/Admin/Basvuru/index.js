import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const Basvuru = () => {
  const id = useParams();
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(false);
  const [form, setForm] = useState({});
  const [comment, setComment] = useState({ comments: "", email: "", date: "" });

  useEffect(() => {
    getData();
  }, []);

  const handleEdit = () => {
    setEdit(true);
  };

  const handleSave = () => {
    console.log(form);
    setEdit(false);
    saveData(form);
    setData(form);
  };

  useEffect(() => {
    if (data) {
      saveData(data);
    }
  }, [data]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCommentChange = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };
  const handleCommentSave = () => {
    setData({
      ...data,
      comments: [
        ...data.comments,
        {
          comment: comment.comments,
          date: new Date().toISOString(),
          email: comment.email,
        },
      ],
    });
    console.log(data);
  };

  const saveData = async (data) => {
    fetch(
      `https://658474b64d1ee97c6bcfc71b.mockapi.io/api/v1/issues/${id.id}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      },
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((task) => {
        console.log("updated", task);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getData = async () => {
    await fetch(
      `https://658474b64d1ee97c6bcfc71b.mockapi.io/api/v1/issues/${id.id}`,
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("data: ", data);
        setData(data);
        setForm(data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className={styles.body}>
      <h1>Basvuru: {id.id}</h1>
      <p>{data.title}</p>
      <p>{data.status}</p>
      <p>{data.email}</p>
      <p>{data.description}</p>
      <p>{data.createDate}</p>
      <button
        onClick={() => {
          handleEdit();
        }}
      >
        Edit
      </button>
      {edit && (
        <div>
          <label>Title</label>
          <input name="title" value={form.title} onChange={handleChange} />
          <label>Status</label>
          <select name="status" value={form.status} onChange={handleChange}>
            <option value="Open" selected={form.status === "Open"}>
              Open
            </option>
            <option
              value="In Progress"
              selected={form.status === "In Progress"}
            >
              In Progress
            </option>
            <option value="Closed" selected={form.status === "Closed"}>
              Closed
            </option>
          </select>
          <label>E-Mail</label>
          <input name="email" value={form.email} onChange={handleChange} />
          <label>Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
          />
          <button onClick={() => handleSave()}>Save</button>
        </div>
      )}
      <div className={styles.commentBody}>
        {data.comments &&
          data.comments.map((comment, id) => (
            <div key={id}>
              <p>{comment.date}</p>
              <p>{comment.email}</p>
              <p>{comment.comment}</p>
            </div>
          ))}
        <label>Comment</label>
        <label>E-Mail</label>
        <input
          name="email"
          value={comment.email}
          onChange={handleCommentChange}
        />
        <label>Comment</label>
        <textarea
          name="comments"
          value={comment.comments}
          onChange={handleCommentChange}
        ></textarea>
        <button onClick={() => handleCommentSave()}>Send</button>
      </div>
    </div>
  );
};

export default Basvuru;
