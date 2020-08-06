import React,{useContext, useState} from 'react';
import nextId from "react-id-generator";

export const BookReducer = (state, action) => {
    switch(action.type){
        case 'ADD_BOOK':
            return [...state,{
                title:action.book.title,
                author:action.book.author,
                id: nextId()
            }]
        case 'REMOVE_BOOK':
            return state.filter(books=> books.id !== action.id)
        
        default:
            return state;
    }

}

