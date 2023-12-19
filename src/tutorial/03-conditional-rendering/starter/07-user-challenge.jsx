import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);
  const youssef = { name: "Youssef" };

  const login = () => setUser(youssef);
  const logout = () => setUser(null);

  const LoggedIn = () => {
    return (
      <>
        <h4>Hello there, {user.name}.</h4>
        <button type="button" className="btn" onClick={logout}>
          Log out
        </button>
      </>
    );
  };
  const LoggedOut = () => {
    return (
      <>
        <h4>Please log in.</h4>
        <button type="button" className="btn" onClick={login}>
          Log in
        </button>
      </>
    );
  };

  return <>{user ? <LoggedIn /> : <LoggedOut />}</>;
};

export default UserChallenge;
