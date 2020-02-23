import React, { useState, useContext, useEffect } from 'react';
import { BookContext } from '../contexts/BookContext';

const NewBookForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const { dispatch } = useContext(BookContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_BOOK', book: { title, author } });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>book :</label>
            <input type="text" className="title" required value={title} onChange={(e) => setTitle(e.target.value)}></input>
            <input type="text" className="author" required value={author} onChange={(e) => setAuthor(e.target.value)}></input>
            <input type="submit" value="add book" />
        </form>
    );
}

export default NewBookForm;