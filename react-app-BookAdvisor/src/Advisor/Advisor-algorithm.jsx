/* the idea is as follows: 
* Take the "to read list" from user
* depending on that, we can generate a profile score for him
* find books that realte to that score 
* put them in the recommended books array 
*/

/* genre_list = [list of all genres]
* User_score = [value of each genre to the user, intialized at 0]  
* Update_user_score: 
*   for book in userReadList: 
*       temp = get(book.geners())
*       for genere in temp:  
*           user_score[genre_list.indexOf(genre)] =+ 1
*/ 

/*  book_list = [list of all books, sorted alphabetically ] 
*   user_book_dict = [score for each book on the webstie] 
*   for book in book_list: 
*       book_score = 0
*       for genre in book.genres(): 
*           book_score += 1*user_score[genre_list.indexOf(genre)]
*       user_book_scores[book_list.indexOf(book)] = book_score
*   sort(user_book_dict)
*   recommendation_list = [top 5-10 items of user_book_dict]
*/
