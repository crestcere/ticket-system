import { useState, useEffect } from "react";

const Getdata = () => {
  useEffect(() => {
    fetch("https://658474b64d1ee97c6bcfc71b.mockapi.io/api/v1/issues")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((e) => console.log(e))
      .finally();
  }, []);
  return (
    <>
      <p>GetData</p>
    </>
  );
};

export default Getdata;
