import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Starter = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      navigate("/home");
    }, 3000);
    return () => clearTimeout(loadingTimeout);
  }, [navigate]);

  return (
    <div className="bg-black h-screen text-white flex flex-col justify-center items-center">
      <h1>Oleksandr Oleksyuk</h1>
      <div className="w-full h-auto flex justify-center items-center">
        <div className="w-3/5 h-3 border-[1px] border-white rounded overflow-hidden">
          <div className="h-3 bg-white loading-starter"></div>
        </div>
      </div>
    </div>
  );
};

export default Starter;
