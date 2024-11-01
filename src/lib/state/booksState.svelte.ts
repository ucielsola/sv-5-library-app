import { getContext, setContext } from "svelte"
import { getBooks } from 'api/getBooks';
import type { Book } from "types/book"
import { getBooksByPage } from "api/getBooksByPage";

const bookContextKey = Symbol("bookContext")

const createBooksState = () => {
    let books: Book[] = $state([])
    let selectedBook: Book | null = $state(null)
    let loading: boolean = $state(false)
    let nextPage: string | null = $state(null)
    let previousPage: string | null = $state(null)

    let searchQuery: string = $state('')

    const loadBooks = async () => {
        loading = true
        searchQuery = ""
        const data = await getBooks(searchQuery)

        books = data.results
        nextPage = data.next
        previousPage = data.previous
        loading = false
    }

    const loadNextPage = async () => {
        if (!nextPage) return
        loading = true

        const data = await getBooksByPage(nextPage)

        books = [...books, ...data.results]
        nextPage = data.next
        previousPage = data.previous
        loading = false
    }

    const searchBooks = async (query: string) => {
        loading = true
        searchQuery = query
        const data = await getBooks(searchQuery)

        books = data.results
        nextPage = data.next
        previousPage = data.previous
        loading = false
    }

    const setSelectBook = (book: Book) => {
        selectedBook = book
    }

    return {
        get books() { return books },
        get selectedBook() { return selectedBook },
        get loading() { return loading },
        get nextPage() { return nextPage },
        get previousPage() { return previousPage },
        get searchQuery() { return searchQuery },
        loadBooks,
        loadNextPage,
        setSelectBook,
        searchBooks
    }
}

export const setBooksState = () => {
    const BooksState = createBooksState()
    return setContext(bookContextKey, BooksState)
}

export const getBooksState = (): ReturnType<typeof setBooksState> => {
    return getContext(bookContextKey)
}