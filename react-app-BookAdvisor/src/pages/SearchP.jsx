import SearchBooks from "../SearchPage-Components/SearchBooks"
import './SearchP.css'
const SearchP = () =>{
    return(
    <> 
        <div className="search-page"> {/* Flex container for centering */}
            <h1>Search for a book</h1>
            <input 
                className="searchBar" 
                type="text" 
                placeholder="Enter title, author, or genre of the book"
            />
            
        </div>
        <SearchBooks />
    </>
    )
}



export default SearchP