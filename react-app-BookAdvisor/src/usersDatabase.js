
import app from "./fireBaseConfig";
import {getDatabase, ref,set, push} from "firebase/database"

const createUser = async (Fname,Lname,email,password) => {
    const db = getDatabase(app);
    const newDocRef = push(ref(db, "users"));
    set(newDocRef, {
      Fname: Fname,
      Lname: Lname,
      email: email,
      password: password,
      books: [],
      genre: ""
    }).then( () => {
      alert("data saved successfully")
    }).catch((error) => {
      alert("error: ", error.message);
    })
  }

  export default createUser