import "./Header.scss";
import { PAGE_CONSTANTS } from "../../constants/pageConstants";
import { ROUTE_CONSTANTS } from "../../constants/routeConstants";
import logo from "../../assets/logos/crewMate_logo.png";
import woman from "../../assets/icons/woman.png";
import man from "../../assets/icons/man.png";
import { useNavigate } from "react-router-dom"

var { LOGO } = PAGE_CONSTANTS;

const Header = () => {
  const navigate = useNavigate();

  const handleHomePageRedirect = () => {
    navigate(ROUTE_CONSTANTS.HOME)
  };

  return (
    <header className="d-flex justify-content-between align-items-center">
      <div
        className="brand d-flex align-items-center text-decoration-none"
        onClick={handleHomePageRedirect}
      >
        <div className="logo-wrapper">
          <img src={logo} alt="CrewMate" className="logo w-100" />
        </div>
        <h1 className="brand-name text-white mb-0">{LOGO.brandName}</h1>
      </div>
      <div className="user-wrapper">
        <img src={woman} alt="User" className="user w-100" />
      </div>
    </header>
  );
};

export default Header;
