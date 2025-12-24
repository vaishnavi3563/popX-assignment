import { useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2>Welcome to PopX</h2>
      <p>Create your PopX account to manage your profile, explore features,and access your dashboard seamlessly from one place.</p>

      <button onClick={() => navigate("/signup")}>Create Account</button>
      <button className="secondary-btn" onClick={() => navigate("/login")}>
        Already Registered? Login
      </button>

      <BottomNav page={1} />
    </>
  );
};

export default Welcome;
