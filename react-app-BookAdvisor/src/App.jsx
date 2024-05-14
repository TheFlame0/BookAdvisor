// import firebase from 'firebase/app';
// import { initializeApp } from 'firebase/app';
// import 'firebase/firestore';
// import { getFirestore } from 'firebase/firestore';
import Footer from './HomePage-Components/Footer';
import Navbar from './HomePage-Components/Navbar';
// import CustomFooter from './HomePage-Components/Footer';
import Home from './pages/Home.jsx';
import SearchP from './pages/SearchP.jsx';
import SignUp from './pages/SignUp.jsx';
import UserProfile from './pages/profile.jsx';
import LogIn from './pages/LogIn.jsx';
import {BrowserRouter as Router , Route , Routes} from "react-router-dom";
// import SignUp from './pages/SignUp.jsx';

// // Initialize Firebas
// const firebaseConfig = {

//   apiKey: "AIzaSyC6LgETW93tfyJ26Q9e0UbMsu-OgSgWa40",
//   authDomain: "bookadvice-a2fe0.firebaseapp.com",
//   projectId: "bookadvice-a2fe0",
//   storageBucket: "bookadvice-a2fe0.appspot.com",
//   messagingSenderId: "105964974950",
//   appId: "1:105964974950:web:7fa191f6ad719bc2f34ea7"

// };


// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Get a Firestore instance
// const db = getFirestore(app);

// const App = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const db = firebase.firestore();
//       const snapshot = await db.collection('yourCollection').get();
//       const fetchedData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//       setData(fetchedData);
//     };
//     fetchData();
//   }, []);

//   return (

//     <div className='App'>
//       <h1>Data from Firestore</h1>
//       <ul>
//         {data.map(item => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//           <Navbar/>
//           <Discover/>
//           <div className="content">
//           <BookShelf/>
//           </div>
//         </div>
//   );
// };

// export default App;


const App = () => {
  
  return (
    <Router>
    <div className='App'>
      <Navbar />
        <div className='Content'>
          <Routes>
            <Route path="/" element = {<Home />} />
            <Route path="/Search" element = {<SearchP/>} />
            <Route path="/SignUp" element = {<SignUp />} />
            <Route path="/LogIn" element = {<LogIn />} />
            <Route path="/Profile" element = {<UserProfile />} />
            <Route path="/add_book" element = {<></>} />  
          </Routes>
        </div>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
//<div className='Content'>
//<Switch>
 // <Route path="/">
   // <Page />
  //</Route>
//</Switch>
// </div>