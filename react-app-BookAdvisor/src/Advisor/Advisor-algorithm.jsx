// Define the initial genre list and user score list
let genre_list = [/* list of all genres */];
let user_score = Array(genre_list.length).fill(0);

// Function to update user score based on genres of books read by the user
function update_user_score(userReadList) {
    userReadList.forEach(book => {
        let temp = book.genres(); // Assuming book.genres() returns an array of genres for the book
        temp.forEach(genre => {
            let index = genre_list.indexOf(genre);
            if (index !== -1) {
                user_score[index] += 1;
            }
        });
    });
}

// Define the book list and user book dictionary (scores)
let book_list = [/* list of all books, sorted alphabetically */];
let user_book_dict = new Map();

// Calculate the score for each book based on user preferences
book_list.forEach(book => {
    let book_score = 0;
    book.genres().forEach(genre => {
        let index = genre_list.indexOf(genre);
        if (index !== -1) {
            book_score += 1 * user_score[index];
        }
    });
    user_book_dict.set(book, book_score);
});

// Sort the user book dictionary by scores in descending order
let sorted_books = Array.from(user_book_dict.entries()).sort((a, b) => b[1] - a[1]);

// Create the recommendation list with top 5-10 items
let recommendation_list = sorted_books.slice(0, 10).map(entry => entry[0]);

// Now recommendation_list contains the top recommended books for the user
