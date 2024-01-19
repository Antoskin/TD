import React, {Fragment, FC} from 'react';
import BookCard from "../../components/BookCard";
import Thumbnail from "../../components/BookCard/components/Thumbnail";
import TextLine from "../../components/BookCard/components/TextLite";
import Rating from "../../components/BookCard/components/Rating";
import Testimonial from "../../components/BookCard/components/Testimonial";
import {IBook} from "../../types/book";
import s from './Book.module.scss';

const BookPage: FC<IBook> = ({title, reviews, rating, author, downloads, thumbnail, description, viewed}) => {
    return (
        <BookCard id={1} className={s.wrap} components={
            <Fragment>
                <section>
                    <div className={s.thumbWrap}>
                        <Thumbnail imageUrl={thumbnail} viewed={viewed} />
                    </div>
                    <TextLine className={s.text} label={'downloads:'} fullName={downloads} />
                </section>
                <section className={s.info}>
                    <TextLine className={s.text} label={'title:'} fullName={title} />
                    <TextLine className={s.text} label={'author:'} fullName={author} />
                    <Rating className={s.text} label={'Rating:'} rate={rating} />
                    <TextLine className={s.text} label={'description:'} fullName={description} />
                    <Testimonial label={'Reader reviews:'} reviews={reviews} />
                </section>
            </Fragment>
        }/>
    );
}

export default BookPage;
