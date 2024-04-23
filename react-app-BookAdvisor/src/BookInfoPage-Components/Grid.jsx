import BookImage from "./bookImage";
import AddToButton from "./AddToReadListBtn";
import BookTitle from "./BookTitle";
import AuthorName from "./AuthorName";
import Rating from "./rating";
import BookDescribtion from "./BookDescribtion";
import Locations from "./Locations";
import Genres from "./Geners";
import "./grid.css";

function PageoGrid (){
    return (
        <div clacc = "grid-container">
            <div class = "grid-item" id = "Book image">
                <BookImage></BookImage>
            </div>
            <div class = "grid-item" id = "add to later button">
                <AddToButton></AddToButton>
            </div>
            <div class = "grid-item" id = "Book title">
                <BookTitle></BookTitle>
            </div>
            <div class = "grid-item" id = "rating">
                <Rating></Rating>
            </div>
            <div class = "grid-item" id = "Author's name" >
                <AuthorName></AuthorName>
            </div>
            <div class = "grid-item" id = "Book descrption">
                <BookDescribtion></BookDescribtion>
            </div>
            <div class = "grid-item" id = "Locations">
                <Locations></Locations>
            </div>
            <div class = "grid-item" id = "Genres">
                <Genres></Genres>
            </div>
        </div>
    );
        
}

export default PageGrid