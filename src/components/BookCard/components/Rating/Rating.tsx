import React, {FC} from 'react';

type AuthorType = {
    className: string,
    label: string | null,
    rate: number
}

const Rating:FC<AuthorType> = ({className, label, rate }) => {
    return (
        <div className={className}>
            {label && <span>{label}</span>}<article>5/{rate}</article>
        </div>
    );
}

export default Rating;
