import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav>
            <div className=" wrapHead">
                <Link to="/"><img className="logo" src={"/src/imgs/logoBookAdvisor.jpeg"} alt="logo" height="50" width="50"></img> </Link>
                <Link to ="/"><p > Home </p> </Link>
                <Link to ="/Search"><p > Search </p> </Link>
                <Link to =""><p > My Books </p> </Link>
                <Link to="/Profile"> <img className="userLogo" src={"/src/imgs/user.png"} alt="logo" height="50" width="50"></img></Link>
            </div>
        </nav>
    );
}

export default Navbar;