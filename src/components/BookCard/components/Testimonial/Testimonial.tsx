import React, {FC} from 'react';
import {Review} from "../../../../types/book";
import s from './Testimonial.module.scss';

interface ITestimonial {
    label: string,
    reviews: Review[]
}

const Testimonial:FC<ITestimonial> = ({label, reviews}) => {
    return (
        <div className={s.wrap}>
            <span className={'text_md_bold'}>{label}</span>
            <div>
                {reviews.map(review => {
                    return (
                        <div key={review.reader} className={s.reviewBox}>
                            {review.testimonial}
                            <div>
                                {review.reader}, {review.age} years old
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Testimonial;
