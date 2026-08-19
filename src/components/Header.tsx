import { Link, NavLink } from "react-router-dom";

const getNavLinkStyle = ({ isActive }: { isActive: boolean }) => ({
  color: isActive ? "#df3c39" : "#8A8A8A",
});

const Header = () => {
  return (
    <>
      <header className="flex flex-col items-start gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between" style={{borderBottom:"#313231 solid 0.1px"}}>
        <div className="header-left flex flex-row" style={{ color: "#F5F5F5" }}>
          <Link
            to="/"
            aria-label="Metal Bands home"
            style={{ color: "#F5F5F5", fontWeight: "bold", fontSize: "1.2rem" }}
          >
            Metal Bands
          </Link>
        </div>
        <nav className="header-nav w-full sm:w-auto" aria-label="Main navigation">
          <ul
            className="nav-list flex flex-wrap gap-x-4 gap-y-2"
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
            <li>
              <NavLink to="/admin" style={getNavLinkStyle}>
                Admin
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
