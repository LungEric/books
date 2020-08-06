import React from 'react';
import BookContextProvider from './context/Book';
import Navbar from './component/Navbar';
import BookList from './component/BookList';
import BookForms from './component/BookForms';

function App() {
  return (
    <div className="App">
        <BookContextProvider>
          <Navbar/>
          <BookList/>
          <BookForms></BookForms>
        </BookContextProvider>
    </div>
  );
}

export default App;
