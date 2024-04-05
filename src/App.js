import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginSignup from "./pages/LoginSignup";
import Users from "./pages/usersPage/Users";
import Register from "./pages/Register";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginSignup />} />
      <Route path="/users" element={<Users />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
