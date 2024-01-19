import React, {FC} from 'react';
import Dropdown from '../Dropdown';
import {ReducerActionTypes, SortActionTypes} from "../../types/actions";
import {OptionType} from "../Dropdown/Dropdown";
import s from './Filter.module.scss';

interface IFilter {
    optionState: OptionType,
    onSort: (type: SortActionTypes) => void
}

const Filter: FC<IFilter> = ({optionState, onSort}) => {
    return (
        <div className={s.filter}>
            <i className={[s.filter_btn, 'icon-sort'].join(' ')} onClick={() => onSort(ReducerActionTypes.REVERSE)}>
                <span className={'text'}>Sort by</span>
            </i>
            <Dropdown optionState={optionState} onSort={onSort} isMain />
        </div>
    );
}

export default Filter;
