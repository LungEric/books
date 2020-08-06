import React,{useContext } from 'react';
import { BookContext } from '../context/Book';


const Navbar = () =>{
    const { books } = useContext(BookContext);

    return(
        <div className="navbar">
            <h1> Liste des livres à lire </h1>
            <p> Vous avez {books.length} dans votre list</p>
        </div>
    );

}

export default Navbar;