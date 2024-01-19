import {localStore, LocalStore} from "./utils";

const useStorage = () => {
    const switchOnView = (id: number) => {
        const {getLocalData, setLocalBooks} = localStore

        const books = getLocalData(LocalStore.books);

        if (!!books) {
            const res = books.map(book => {
                if (book._id === id) book.viewed = true;

                return book
            })

            setLocalBooks(res)
        }
    }

    return { switchOnView }
}

export {useStorage}
