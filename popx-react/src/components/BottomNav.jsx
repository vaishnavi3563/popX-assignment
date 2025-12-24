import { AiFillHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const BottomNav = ({ page }) => {
  const navigate = useNavigate();

  const goPrev = () => {
    if (page === 2) navigate("/");
    if (page === 3) navigate("/signup");
  };

  const goNext = () => {
    if (page === 1) navigate("/signup");
    if (page === 2) navigate("/account");
  };

  return (
    <div className="bottom-nav">
      {/* Home Icon */}
      <AiFillHome
        size={24}
        color="#6c2bd9"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
      />

      {/* Navigation Arrows */}
      <div style={{ fontSize: "18px", fontWeight: "600" }}>
        {page !== 1 && (
          <span
            style={{ marginRight: "16px", cursor: "pointer" }}
            onClick={goPrev}
          >
            &lt;
          </span>
        )}

        {page !== 3 && (
          <span style={{ cursor: "pointer" }} onClick={goNext}>
            &gt;
          </span>
        )}
      </div>
    </div>
  );
};

export default BottomNav;
