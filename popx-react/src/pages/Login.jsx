import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import BottomNav from "../components/BottomNav";

const Login = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!user || user.email !== email) {
      setError("Invalid credentials");
      return;
    }
    navigate("/account");
  };

  return (
    <>
      <h3>Login to your account</h3>

      {error && <div className="error">{error}</div>}

      <input
        placeholder="Email address"
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>

      <BottomNav page={2} />
    </>
  );
};

export default Login;
