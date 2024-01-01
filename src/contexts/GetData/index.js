import { createContext, useState, useEffect } from "react";

const GetData = createContext();

export const GetDataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const datas = async () => {
    try {
      const response = await fetch(
        "https://658474b64d1ee97c6bcfc71b.mockapi.io/api/v1/issues",
      );
      const datas = await response.json();
      setData(datas);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    datas();
  }, []);

  return (
    <>
      {loading && <p>Loading...</p>}
      <GetData.Provider value={data}>{children}</GetData.Provider>
    </>
  );
};

export default GetData;
