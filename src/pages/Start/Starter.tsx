import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Starter = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      navigate("/home");
    }, 5000);
    return () => clearTimeout(loadingTimeout);
  }, [navigate]);

  return (
    <div className="bg-white h-screen text-primary-800 flex flex-col justify-center items-center overflow-hidden">
      <h1 className="fade-in-scale uppercase">Oleksandr Oleksyuk</h1>
      <div className="w-full h-auto flex justify-center items-center">
        <div className="w-3/5 h-1 border-[1px] border-primary-600 rounded-sm overflow-hidden loading-line-box-container">
          <div className="h-1 loading-starter"></div>
        </div>
      </div>
    </div>
  );
};

export default Starter;
