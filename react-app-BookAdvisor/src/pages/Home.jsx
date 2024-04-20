import BookShelf from '../HomePage-Components/BookShelf';
import Discover from '../HomePage-Components/Discover';

const Home = () =>{
    return(
    <><Discover /><div className="content">
        <BookShelf />
    </div></>
    )
}

export default Home