import {FC} from 'react'
import {IBook} from "../types/book";
import {ReducerActionTypes, SortActionTypes} from "../types/actions";

class LocalStore {
    books_local_store: string
    filter_settings_local_store: string
    reverse: string
    constructor() {
        this.books_local_store = 'BOOKS'
        this.filter_settings_local_store = 'FILTER'
        this.reverse = 'REVERSE'
    }

    static books = 'BOOKS'
    static option = 'FILTER'
    static reverse = 'REVERSE'

    getLocalData = (type) => {
        return JSON.parse(localStorage.getItem(type))
    }

    toggleReverse = () => {
        const IS_REVERSED =  this.getLocalData(this.reverse)
        const TOGGLED = IS_REVERSED ? 0: 1
        localStorage.setItem(this.reverse, JSON.stringify(TOGGLED))
    }

    resetReverse = () => {
        localStorage.setItem(this.reverse, JSON.stringify(0))
    }

    setFilterOption = (option) => {
        localStorage.setItem(this.filter_settings_local_store, JSON.stringify(option))
    }

    setLocalBooks:FC<IBook[]> = (books) => {
        localStorage.setItem(this.books_local_store, JSON.stringify(books))
    }
}

const localStore = new LocalStore()

type FilterParamTypes = {
    bookList: IBook[],
    type: SortActionTypes,
    reversed?: boolean
}

const filterHandle: FC<FilterParamTypes> = ({bookList, type, reversed}) => {
    let sortedList;
    switch (type) {
        case ReducerActionTypes.NAME:
            sortedList = [...bookList.sort((a, b) => a.title.localeCompare(b.title))]
            return reversed ? sortedList.reverse() : sortedList
        case ReducerActionTypes.NEWEST:
            sortedList = [...bookList.sort((a, b) => b._id - a._id)]
            return reversed ? sortedList.reverse() : sortedList
        case ReducerActionTypes.POPULARITY:
            sortedList = [...bookList.sort((a, b) => b.downloads - a.downloads)]
            return reversed ? sortedList.reverse() : sortedList
        default:
            return bookList
    }
}

export {localStore, filterHandle, LocalStore}
