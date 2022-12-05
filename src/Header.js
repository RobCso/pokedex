import { Link } from "react-router-dom";


const Header = (props) => {
  return (
    <nav className="nav-links">
      <Link to="/best-pokemon" className="link">
        Best Pokemon
      </Link>
      <Link to="/caught-pokemon" className="link">
        Caught Pokemon
      </Link>
      <Link to=`/pokemon/${props.name}` className="link">
        Pokemon Info
      </Link>
    </nav>
  );
};

export default Header;
