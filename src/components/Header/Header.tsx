import React, {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import s from './Header.module.scss';

const Header: FC = ({isMain}: boolean) => {
    const navigate = useNavigate();

    const handleBack = (): void => navigate('/')

    return (
        <div className={[s.header, 'text_md'].join(' ')}>
            {isMain ? 'Books read this month' : <i className={'icon-back'} onClick={handleBack} />}
        </div>
    );
}

export default Header;
