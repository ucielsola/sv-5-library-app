import type { Book } from "$lib/types/book";

export const getBooksByPage = async (page: string): Promise<{
    count: number;
    next: string | null;
    previous: string | null;
    results: Book[];
}> => {
    const response = await fetch(page);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data as ReturnType<typeof getBooksByPage>;
}