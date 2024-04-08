const Navbar = () => {
    return ( 
        <nav>
            <div className=" wrapHead">
                <a href="index.html"><img class="logo" src="src\imgs\logoBookAdvisor.jpeg" alt="logo" height="50" width="50"></img> </a>
                    <p> Home </p>
                    <p> Search </p>
                    <p> My Books </p>
                <a href="index.html"> <img class="userLogo" src="src\imgs\user.png" alt="logo" height="50" width="50"></img></a>
            </div>
        </nav>
     );
}

export default Navbar;