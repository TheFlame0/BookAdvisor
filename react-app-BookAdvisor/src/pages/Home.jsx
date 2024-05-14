import BookShelf from '../HomePage-Components/BookShelf';
import Discover from '../HomePage-Components/Discover';
import ChatBot from './chatBot.jsx';

const Home = () =>{
    return(
    <><Discover /><div className="content">
        <BookShelf />
        <ChatBot />

    </div></>
    )
}

export default Home