import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBook] = useState(
        [
            { title: "the way of kings", id: 1 },
            { title: "the name of the wind", id: 2 },
            { title: "the final empire", id: 3 }
        ]
    );
    return ( 
        <BookContext.Provider value={{books}}>{props.children}</BookContext.Provider>
     );
}

export default BookContextProvider; 