import React, {FC} from 'react';
import s from './Thumbnail.module.scss';

type ThumbnailTypes = {
    isMain?: boolean,
    imageUrl: string,
    viewed: boolean
}

const Thumbnail:FC<ThumbnailTypes> = ({ isMain, imageUrl, viewed }) => {
    return (
        <div className={`${isMain ? s.thumbFull : s.thumb}`} style={{backgroundImage: `url(${imageUrl})`}}>
            {isMain && <i className={[s.ico, `${viewed ? 'icon-viewed' : 'icon-not-view'}`].join(' ')} />}
        </div>
    );
}

export default Thumbnail;
