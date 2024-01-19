import React, {FC} from 'react';
import Header from "../Header";
import s from './Layout.module.scss';

type LayoutProps = {
    children: React.ReactDOM | React.ReactElement,
    isMain: boolean
}

const Layout: FC<LayoutProps> = ({children, isMain}) => {
    return (
        <div className={s.layout}>
            <Header isMain={isMain} />
            <div className={''}>
                {children}
            </div>
        </div>
    );
}

export default Layout;
