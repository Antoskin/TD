import React, {FC} from 'react';

type TextType = {
    className: string,
    label: string | null,
    fullName: string
}

const TextLine:FC<TextType> = ({className, label, fullName }) => {
    return (
        <div className={className}>
            <span>{label}</span> <article>{fullName}</article>
        </div>
    );
}

export default TextLine;
