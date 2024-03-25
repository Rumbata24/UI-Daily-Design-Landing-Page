import "../Navbar/Navbar.css";
import logo from "../../assets/Logo.png";
import { useState } from "react";

const Navbar = () => {
  const [activeId, setActiveId] = useState(null);

  const handleClick = (id) => {
    setActiveId(id);
  };

  // Define your array of items
  const items = [
    { id: 1, label: "Free Designs" },
    { id: 2, label: "License" },
    { id: 3, label: "Article" },
    { id: 4, label: "Contributors" },
    { id: 5, label: "About" },
  ];

  return (
    <nav>
      <img src={logo} alt="Logo" />
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            className={`item ${activeId === item.id ? "active" : ""}`}
            onClick={() => handleClick(item.id)}
          >
            <a href="#">{item.label}</a>
          </li>
        ))}
      </ul>
      <div className="log-in-sign-up-container">
        <button className="log-in-btn">Log in</button>
        <button className="sign-up-btn">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
