import React, {FC, Fragment} from 'react';
import BookCard from "../BookCard";
import Thumbnail from "../BookCard/components/Thumbnail";
import TextLine from "../BookCard/components/TextLite";
import Rating from "../BookCard/components/Rating";
import {IBook} from "../../types/book";
import s from './List.module.scss'

interface IBookList {
    data: IBook[],
}

const BookList: FC<IBookList> = ({data}) => {
    return (
        <div className={s.list}>
            {data.map((book: IBook) =>
                <BookCard key={book._id} id={book._id} className={s.card} view={book.viewed} isMain
                    components={
                        <Fragment>
                            <Thumbnail isMain imageUrl={book.thumbnail} viewed={book.viewed} />
                            <TextLine className={'text_bold mt-8'} fullName={book.author} />
                            <TextLine className={'text'} fullName={book.title} />
                            <Rating className={'text'} rate={book.rating} />
                        </Fragment>
                    }
                />
            )}
        </div>
    );
}

export default BookList;
