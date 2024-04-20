import './Navbar.css';
const Navbar = () => {
    return (
        <nav>
            <div className=" wrapHead">
                <a href="main.jsx"><img className="logo" src={"/src/imgs/logoBookAdvisor.jpeg"} alt="logo" height="50" width="50"></img> </a>
                <a href ="/"><p > Home </p> </a>
                <a href ="/Search"><p > Search </p> </a>
                <a href =""><p > My Books </p> </a>
                <a href="/SignUp"> <img className="userLogo" src={"/src/imgs/user.png"} alt="logo" height="50" width="50"></img></a>
            </div>
        </nav>
    );
}

export default Navbar;