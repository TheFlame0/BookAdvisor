import Discover from './HomePage-Components/Discover';
import Navbar from './HomePage-Components/Navbar';

function App() {
  // const title = "My First React App";
// const book = { name: "history", date: "2022-2-2", price: "$15" };
  // const liked = 50;

  return (
    <>
      <div className='App'>
        <Navbar/>
        <div className="content">
          <Discover/>

        </div>
      </div>

    </>
  )
}

export default App





          {/* <h1> {title} </h1> */}
          {/* <h2> {book}</h2> */}
          {/* <p> liked { liked } times</p>
          <p> {10} </p>
          <p> { " Hello World"} </p>
          <p> { [ 1,2,3,4,5,6 ] } </p>
          <a href='http://www.google.com'> Google Site</a> */}
