import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="bg-pink-50 px-4 pt-4 pb-2 sticky top-0 z-50">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-pink-100 shadow-sm px-6 py-4 flex items-center justify-between">
  <h1 className="text-lg font-bold text-pink-600">TaskFlow</h1>
  <div className="flex items-center gap-3">
    <span className="text-sm text-gray-600 hidden sm:block">{user?.name}</span>
    <span className="bg-pink-100 text-pink-600 text-xs px-2 py-1 rounded-full font-medium">
      {user?.role}
    </span>
    <button
      onClick={handleLogout}
      className="bg-pink-500 text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-pink-600 transition"
    >
      Logout
    </button>
  </div>
</div>
    </div>
  );
};

export default Navbar;