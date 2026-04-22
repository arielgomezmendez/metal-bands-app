import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="flex flex-row justify-between items-center px-4 py-3" style={{borderBottom:"#313231 solid 0.1px"}}>
        <div className="header-left flex flex-row" style={{ color: "#F5F5F5" }}>
          <a></a>
          <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Metal Bands</p>
        </div>
        <nav className="header-nav">
          <ul
            className="nav-list flex flex-row gap-4"
            style={{ color: "#8A8A8A" }}
          >
            <li>
              <Link to="/">Bands</Link>
            </li>
            <li>
              <Link to="/guess-the-riff">Guess the Riff</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
