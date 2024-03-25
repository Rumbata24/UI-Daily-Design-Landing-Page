import "../Latest/Latest.css";
import appreciate from "../../assets/appreciate.png";
import code from "../../assets/code.png";
import figmaIcon from "../../assets/brand-logos-figma.png";
import figmaIconPremium from "../../assets/brand-logos-figma-prem.png";
import downloadProject from "../../assets/download-project.png";
import avatar from "../../assets/avatar.png";
import componentProject from "../../assets/component-project.png";
import reportProject from "../../assets/report-project.png";
import softwareSquire from "../../assets/brand-logos-square.png";
import xdIcon from "../../assets/brand-logos-xd.png";
import photoshopIcon from "../../assets/brand-logos-ps.png";
import { useState } from "react";

const Latest = () => {
  const [activeId, setActiveId] = useState(null);
  const [activeIdImg, setActiveIdImg] = useState(null);

  // Define your array of items
  const items = [
    { id: 1, label: "All" },
    { id: 2, label: "Web" },
    { id: 3, label: "Mobile" },
    { id: 4, label: "UI Kit" },
    { id: 5, label: "Coded" },
  ];

  const images = [
    { id: 1, img: figmaIcon },
    { id: 2, img: figmaIconPremium },
    { id: 3, img: softwareSquire },
    { id: 4, img: xdIcon },
    { id: 5, img: photoshopIcon },
  ];

  const handleClick = (id) => {
    setActiveId(id);
  };

  const handleClickIMG = (id) => {
    setActiveIdImg(id);
  };
  return (
    <section>
      <div className="top-section-main">
        <div className="left-section">
          <p className="latest">Latest</p>
          <p className="popular">Popular</p>
        </div>
        <ul className="middle-section">
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
        <div className="right-section">
          {images.map((img) => (
            <div
              key={img.id}
              className={`img-wrapper ${
                activeIdImg === img.id ? "active" : ""
              }`}
              onClick={() => handleClickIMG(img.id)}
            >
              <img src={img.img}></img>
            </div>
          ))}
        </div>
      </div>

      <div className="bottom-section-main">
        <div className="projects">
          <img src={downloadProject} alt="" />
          <div className="text-project">
            <div className="left-box">
              <img src={avatar} alt="" />
              <p>
                by <strong>Jenny Molla</strong>
              </p>
            </div>
            <div className="text-icon">
              <div className="box">
                <img src={code} alt="" />
                <p>25</p>
              </div>
              <div className="box">
                <img src={appreciate} alt="" />
                <p>25</p>
              </div>
            </div>
          </div>
        </div>

        <div className="projects">
          <img src={componentProject} alt="" />
          <div className="text-project">
            <div className="left-box">
              <img src={avatar} alt="" />
              <p>
                by <strong>Jenny Molla</strong>
              </p>
            </div>
            <div className="text-icon">
              <div className="box">
                <img src={code} alt="" />
                <p>25</p>
              </div>
              <div className="box">
                <img src={appreciate} alt="" />
                <p>25</p>
              </div>
            </div>
          </div>
        </div>

        <div className="projects">
          <img src={reportProject} alt="" />
          <div className="text-project">
            <div className="left-box">
              <img src={avatar} alt="" />
              <p>
                by <strong>Jenny Molla</strong>
              </p>
            </div>
            <div className="text-icon">
              <div className="box">
                <img src={code} alt="" />
                <p>25</p>
              </div>
              <div className="box">
                <img src={appreciate} alt="" />
                <p>25</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Latest;
