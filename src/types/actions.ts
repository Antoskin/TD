export enum ReducerActionTypes {
    FETCH = 'FETCH',
    POPULARITY = 'POPULARITY',
    NAME = 'NAME',
    NEWEST = 'NEWEST',
    REVERSE = 'REVERSE',
    GET_BOOK = 'GET_BOOK'
}

export type SortActionTypes = ReducerActionTypes.NAME | ReducerActionTypes.NEWEST | ReducerActionTypes.POPULARITY | ReducerActionTypes.REVERSE;
