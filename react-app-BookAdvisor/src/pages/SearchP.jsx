import BookShelf from "../SearchPage-Components/BookShelf"
import'./SearchP.css'
const SearchP = () =>{
    return(
        <>
        <h1>Search for a book</h1>
        <input className="searchBar" type="text" placeholder="            enter title,auther, or gnere of the book" />
        <BookShelf />
        </>
    )
}



export default SearchP