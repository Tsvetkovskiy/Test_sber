import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../assets/styles/header.css";

const Header = () => {
  const isAuthorized = useSelector((state) => state.login.isAuthorized);

  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__title">LOGO</div>
        <nav className="header__nav">
          <Link className="header__nav-item" to="/">
            General
          </Link>
          <Link className="header__nav-item" to="/currency">
            Currency
          </Link>
        </nav>
        {isAuthorized ? (
          "ADMIN"
        ) : (
          <Button className="header__nav-item" variant="contained">
            <Link to="/login">LOGIN</Link>
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
