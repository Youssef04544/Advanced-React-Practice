import { useContext } from "react";
import { NavbarContext } from "./Navbar";

const UserContainer = () => {
  const { user, logout } = useContext(NavbarContext);
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Welcome, {user?.name}.</p>
          <button onClick={logout} className="btn">
            Logout
          </button>
        </>
      ) : (
        <p>Please log in.</p>
      )}
    </div>
  );
};
export default UserContainer;
