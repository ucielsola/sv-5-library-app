import type { Book } from "$lib/types/book";

const gutendexURL = "https://gutendex.com/books";

export const getBooks = async (query: string): Promise<{
    count: number;
    next: string | null;
    previous: string | null;
    results: Book[];
}> => {

    const params = new URLSearchParams({
        search: query,
    });

    const response = await fetch(`${gutendexURL}?${params}`);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data as ReturnType<typeof getBooks>;
}