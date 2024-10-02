import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className="display-1">404</h1>
      <p className="lead">Page Not Found</p>
      <button className="btn btn-dark" onClick={goHome}>
        Go Back to Home
      </button>
    </div>
  );
};

export default NotFound;
