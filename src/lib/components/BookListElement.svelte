<script lang="ts">
	import { getBooksState } from '$lib/state/booksState.svelte';
	import type { Book } from '$lib/types/book';
	import { Format } from '$lib/types/format';

	let {
		book
	}: {
		book: Book;
	} = $props();

	const titleMaxLength = 90;

	const booksState = getBooksState();

	const bookTitle = $derived.by(() => {
		if (book.title.length > titleMaxLength) {
			return book.title.slice(0, titleMaxLength) + '...';
		} else {
			return book.title;
		}
	});
	const image = $derived(book.formats[Format.Image]);
	const authors = $derived(book.authors.map((author) => author.name).join(', '));
	const isSelected = $derived(booksState.selectedBook?.id === book.id);
</script>

<button
	class="flex h-24 w-full items-center gap-2 rounded-lg border bg-slate-50 p-2 text-start transition-all hover:shadow-md active:bg-slate-100 {isSelected &&
		'border-blue-500'}"
	onclick={() => booksState.setSelectBook(book)}
>
	<img
		src={image}
		alt={bookTitle + ' cover'}
		class="h-full w-16 rounded-lg object-cover shadow-sm"
	/>
	<div class="flex flex-col gap-0.5">
		<span>
			{bookTitle}
		</span>
		{#if authors.length}
			<span class="text-xs">
				by {authors}
			</span>
		{/if}
	</div>
</button>
