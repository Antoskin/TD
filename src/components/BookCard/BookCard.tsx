import React, {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import {useStorage} from "../../hooks/useStorage";

interface IBookCard {
    className: string,
    isMain: boolean,
    id: number,
    view?: boolean
    components: React.ReactElement
}

const BookCard:FC<IBookCard> = ({className, isMain, id, view, components}) => {
    const navigate = useNavigate()
    const {switchOnView} = useStorage()

    const goToBookPage = (): void => {
        if (isMain) {
            navigate(`book/:${id}`)
            !view && switchOnView(id);
        }
    }

    return (
        <div className={className} onClick={goToBookPage}>
            {components}
        </div>
    );
}

export default BookCard;
