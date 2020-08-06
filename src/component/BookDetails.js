import React,{useContext} from 'react';
import { BookContext } from '../context/Book';


const BookDetails = ({book}) =>{
    const { dispatch} = useContext(BookContext);
    
    return  (
        <li className="container" id="details" onClick={()=> dispatch({type:'REMOVE_BOOK',id: book.id})}>
            <div className="title"> { book.title } </div>
            <div className="author"> { book.author } </div>
        </li>
    );
}

export default BookDetails;