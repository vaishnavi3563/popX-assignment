import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import BottomNav from "../components/BottomNav";

const Signup = () => {
  const { saveUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    company: "",
    agency: "Yes",
  });

  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.phone || !form.password) {
      setError("All required fields must be filled");
      return;
    }
    saveUser(form);
    navigate("/account");
  };

  return (
    <>
      <h3>Create your PopX account</h3>

      {error && <div className="error">{error}</div>}

      <input name="name" placeholder="Full Name*" onChange={handleChange} />
      <input name="phone" placeholder="Phone number*" onChange={handleChange} />
      <input name="email" placeholder="Email address*" onChange={handleChange} />
      <input
        name="password"
        type="password"
        placeholder="Password*"
        onChange={handleChange}
      />
      <input name="company" placeholder="Company name" onChange={handleChange} />

      <p>Are you an Agency?</p>
      <div className="radio-group">
        <label>
          <input
            type="radio"
            name="agency"
            value="Yes"
            checked={form.agency === "Yes"}
            onChange={handleChange}
          />{" "}
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="agency"
            value="No"
            onChange={handleChange}
          />{" "}
          No
        </label>
      </div>

      <button onClick={handleSubmit}>Create Account</button>

      <BottomNav page={2} />
    </>
  );
};

export default Signup;
