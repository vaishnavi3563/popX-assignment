import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import BottomNav from "../components/BottomNav";

const Account = () => {
  const { user } = useContext(UserContext);

  if (!user) return <p>No user data found</p>;

  return (
    <>
      <h3>Account Settings</h3>

      <div className="profile">
        <img src="https://i.pravatar.cc/100" alt="profile" />
        <div>
          <h4>{user.name}</h4>
          <p>{user.email}</p>
        </div>
      </div>

      <p style={{ marginTop: "18px" }}>
        Phone: {user.phone} <br />
        Company: {user.company || "N/A"} <br />
        Agency: {user.agency}
      </p>

      <BottomNav page={3} />
    </>
  );
};

export default Account;
