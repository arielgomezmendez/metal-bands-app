import { NavLink } from "react-router-dom";

const getNavLinkStyle = ({ isActive }: { isActive: boolean }) => ({
  color: isActive ? "#d32f2f" : "#8A8A8A",
});

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
              <NavLink to="/" end style={getNavLinkStyle}>
                Bands
              </NavLink>
            </li>
            <li>
              <NavLink to="/guess-the-riff" style={getNavLinkStyle}>
                Guess the Riff
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" style={getNavLinkStyle}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
