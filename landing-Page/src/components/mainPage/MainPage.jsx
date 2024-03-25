import "../mainPage/MainPage.css";
import arrowDown from "../../assets/chevron-down.png";
import searchIcon from "../../assets/search-icon.png";
const MainPage = () => {
  return (
    <main>
      {/* <p>Day 1384</p> */}
      <div className="main-text">
        <h1>Free UI resources for everyone</h1>
        <p>
          The largest database of 100% free UI components and designs available
          in the formats popular by UI designers.
        </p>
      </div>
      <div className="search-menu">
        <div className="left">
          <p>Free designs</p>
          <img src={arrowDown} alt="arrow down" />
        </div>
        <div className="right">
          <img src={searchIcon} alt="" />
          <input type="text" name="" id="search" placeholder="Search" />
        </div>
      </div>
    </main>
  );
};

export default MainPage;
