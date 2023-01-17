import { MenuOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

const Navbar: FC = () => {
  const [showNav, setShowNav] = useState(false);

  const handleShowNavbar = () => {
    setShowNav(!showNav);
  };

  const isDoctor = true;

  return (
    <nav className="navbar">
      <div className="container">
        <div className="menu-icon" onClick={handleShowNavbar}>
          <h1>
            <Button
              aria-label={"Open Menu"}
              icon={<MenuOutlined />}
            />
          </h1>
        </div>
        <div className={`nav-elements  ${showNav && "active"}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/star-classifier-info">Star Classifier Info</NavLink>
            </li>
            <li>
              <NavLink to="/star-classifier">Star Classifier</NavLink>
            </li>
            <li>
              <NavLink to="/neo-classifier-info">NEO Classifier Info</NavLink>
            </li>
            <li>
              <NavLink to="/neo-classifier">NEO Classifier</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
