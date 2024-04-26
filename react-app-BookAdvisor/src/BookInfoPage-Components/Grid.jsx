import BookImage from "./bookImage";
import AddToButton from "./AddToReadListBtn";
import BookTitle from "./BookTitle";
import AuthorName from "./AuthorName";
import Rating from "./Rating";
import BookDescribtion from "./BookDescribtion";
import Locations from "./Locations";
import Genres from "./Geners";
import "./Grid.css";

function PageGrid (){
    return (
        <div className = "grid-container">
            <div className = "grid-item" id = "Book image">
                <BookImage></BookImage>
            </div>
            <div className = "grid-item" id = "add to later button">
                <AddToButton></AddToButton>
            </div>
            <div className = "grid-item" id = "Book title">
                <BookTitle></BookTitle>
            </div>
            <div className = "grid-item" id = "rating">
                <Rating></Rating>
            </div>
            <div className = "grid-item" id = "Author's name" >
                <AuthorName></AuthorName>
            </div>
            <div className = "grid-item" id = "Book descrption">
                <BookDescribtion></BookDescribtion>
            </div>
            <div className = "grid-item" id = "Locations">
                <Locations></Locations>
            </div>
            <div className = "grid-item" id = "Genres">
                <Genres></Genres>
            </div>
        </div>
    );
        
}

export default PageGrid;