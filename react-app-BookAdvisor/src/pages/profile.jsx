import './profile.css';
import Navbar from '../HomePage-Components/Navbar';
import Footer from  '../HomePage-Components/Footer';


const UserProfile = () => {
    return ( 
        <>
          <div className="main-profile">
            <div className="imgProfile-container">
              <img src="/src/imgs/user.png" alt="" className="imgProfile"/>

            </div>
            {/* <Footer /> */}
          </div>

      </>

     );
}
 
export default UserProfile;