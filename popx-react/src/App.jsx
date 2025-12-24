import { BrowserRouter, Routes, Route } from "react-router-dom";
import MobileWrapper from "./components/MobileWrapper";
import Welcome from "./pages/Welcome";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Account from "./pages/Account";

function App() {
  return (
    <BrowserRouter>
      <MobileWrapper>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </MobileWrapper>
    </BrowserRouter>
  );
}

export default App;
