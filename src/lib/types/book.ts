import type { Format } from "./format"
import type { Person } from "./person"

export type Book = {
    id: number,
    title: string,
    subjects: string[],
    authors: Person[],
    translators: Person[],
    bookshelves: string[],
    languages: string[],
    copyright: boolean | null,
    media_type: string,
    formats: Record<Format, string>,
    download_count: number
}