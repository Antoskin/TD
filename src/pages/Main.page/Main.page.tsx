import React, {Fragment} from 'react';
import Counter from "../../components/Counter";
import Filter from "../../components/Filter";
import BookList from "../../components/BookList";
import useBooks from "../../hooks/useBooks";
import s from './Main.module.scss';

const MainPage = () => {
    const {data, onSort, optionState} = useBooks()

    if (!data.length) {
        return 'loading'
    }

    return (
        <Fragment>
            <div className={s.bar}>
                <Counter count={data.length} />
                <Filter optionState={optionState} onSort={onSort} />
            </div>
            <BookList isMain data={data} />
        </Fragment>
    );
}

export default MainPage;
