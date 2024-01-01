import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Basvurubasarili = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("location: ", location);
  }, [location]);
  return (
    <div>
      <h1>
        Başvurunuz başarıyla alınmıştır. Başvuru numaranız: {location.state.id}{" "}
      </h1>
      <p>
        Başvurunuzu takip etmek için{" "}
        <a href={`/basvuru/${location.state.id}`}>tıklayınız</a>
      </p>
    </div>
  );
};

export default Basvurubasarili;
