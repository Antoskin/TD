import {useReducer, Reducer, FC, useEffect} from "react";
import {IBook} from "../types/book";
import {ReducerActionTypes, SortActionTypes} from "../types/actions";
import {bookList} from "../const";
import {localStore, filterHandle, LocalStore} from "./utils";
import {optionList} from "../const";

interface IReducerState {
    bookList: IBook[],
    bookState: IBook,
    optionState: {
        id: number,
        type: SortActionTypes
    }
}

interface IReducerAction {
    type: ReducerActionTypes,
    payload?: IBook[] | number
}

const reducer: Reducer<IReducerState, IReducerAction> = (state, action): IReducerState => {
    switch (action.type) {
        case ReducerActionTypes.FETCH:
            const savedLocalOption = localStore.getLocalData(LocalStore.option)
            const is_reversed = localStore.getLocalData(LocalStore.reverse)

            let optionState;
            let bookList;

            if (savedLocalOption) {
                optionState = optionList.find(option =>
                    option.type === savedLocalOption
                );
                bookList = filterHandle({
                    bookList: [...action.payload],
                    type: ReducerActionTypes[savedLocalOption],
                    reversed: !!is_reversed
                })
            } else {
                optionState = optionList[0]
                bookList = bookList = filterHandle({
                    bookList: [...action.payload],
                    type: ReducerActionTypes.POPULARITY,
                    reversed: !!is_reversed
                })
            }

            return {
                ...state, bookList, optionState
            };
        case ReducerActionTypes.POPULARITY:
            return {
                ...state,
                bookList: filterHandle({
                    bookList: state.bookList,
                    type: ReducerActionTypes.POPULARITY
                })
            };
        case ReducerActionTypes.NAME:
            return {
                ...state,
                bookList: filterHandle({
                    bookList: state.bookList,
                    type: ReducerActionTypes.NAME
                })
            };
        case ReducerActionTypes.NEWEST:
            return {
                ...state,
                bookList: filterHandle({
                    bookList: state.bookList,
                    type: ReducerActionTypes.NEWEST
                }),
            };
        case ReducerActionTypes.REVERSE:
            localStore.toggleReverse()
            return {
                ...state,
                bookList: state.bookList.reverse()
            };
        case ReducerActionTypes.GET_BOOK:
            const book = state.bookList.find(book => book._id === action.payload);
            return {
                ...state,
                bookState: book
            }
        default: return state;
    }
}

const useBooks: FC = () => {
    const [state, dispatch] = useReducer<Reducer<IReducerState, IReducerAction>, undefined>(
        reducer, {bookList: [], bookState: {}, optionState: {}}
    );

    const onSort = (type: SortActionTypes) => { // SORT OR REVERSE BOOK LIST
        if (type === ReducerActionTypes.REVERSE) {
            return dispatch({ type: ReducerActionTypes.REVERSE })
        }

        dispatch({ type: ReducerActionTypes[type] });
        localStore.setFilterOption(ReducerActionTypes[type])
        localStore.resetReverse()
    }

    const getBook = (id: number) => { // GET BOOK  BY ID
        dispatch({
            type: ReducerActionTypes.GET_BOOK,
            payload: id
        })
    }

    useEffect(() => { // FETCH LOCAL BOOKS
        const {setLocalBooks} = localStore;
        const isEmpty = !localStore.getLocalData(LocalStore.books)

        if (isEmpty) setLocalBooks(bookList);

        const response = localStore.getLocalData(LocalStore.books)

        dispatch({ type: ReducerActionTypes.FETCH, payload: response })
    }, [])

    return {
        data: state.bookList,
        book: state.bookState,
        optionState: state.optionState,
        getBook,
        onSort
    }
}

export default useBooks;
