import './profile.css';
import Navbar from '../HomePage-Components/Navbar';
import Footer from  '../HomePage-Components/Footer';


const UserProfile = () => {
    return ( 

      <>
      {/* <Navbar /> */}
      <div className="main-profile">
            <div className='container-name-img'>
              <div className="imgProfile-container">
                <img src="/src/imgs/prifile-img-cartoon.png" alt="Profile" className="imgProfile"/>
                <p>Hamza Baaqil</p>
              </div>
            </div>
          </div>
      {/* <Footer /> */}
    </>

    );
}

export default UserProfile;