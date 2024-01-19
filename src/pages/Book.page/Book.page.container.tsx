import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import BookPage from "./Book.page";
import useBooks from "../../hooks/useBooks";

const BookPageContainer = () => {
    const {book, getBook} = useBooks()
    const location = useLocation()

    useEffect(() => {
        const bookId = +location.pathname.split(':')[1];

        getBook(bookId)
    }, [])

    return !book?._id ? 'loading' : <BookPage {...book} />
};

export default BookPageContainer;
