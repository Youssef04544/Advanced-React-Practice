import { createContext, useState } from "react";
import Navlinks from "./Navlinks";

export const NavbarContext = createContext();

const Navbar = () => {
  const [user, setUser] = useState({ name: "Youssef" });
  const logout = () => setUser(null);

  return (
    <nav className="navbar">
      <h3>CONTEXT API</h3>
      <NavbarContext.Provider value={{ user, logout }}>
        <Navlinks />
      </NavbarContext.Provider>
    </nav>
  );
};
export default Navbar;
