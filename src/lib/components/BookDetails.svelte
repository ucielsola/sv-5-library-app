<script lang="ts">
	import { getBooksState } from 'state/booksState.svelte';
	import { Format } from 'types/format';
	import type { Person } from 'types/person';
	import type { Book } from 'types/book';
	import BookAuthor from './BookAuthor.svelte';
	import BookSubject from './BookSubject.svelte';
	import IconCloudArrowDown from './Icons/IconCloudArrowDown.svelte';

	const booksState = getBooksState();

	const selectedBook = $derived(booksState?.selectedBook as Book);
	const image = $derived(selectedBook.formats[Format.Image]);
	const authors = $derived(selectedBook.authors.map((author: Person) => author.name));
	const downloadLink = $derived(selectedBook.formats[Format.Epub]);
</script>

<div class="flex flex-col gap-6">
	<div class="flex h-80 w-full items-center justify-center rounded-lg border p-3">
		<img src={image} alt={selectedBook?.title} class="object-cover" />
	</div>
	<div class="flex flex-col gap-3">
		<div class="flex items-center justify-between gap-4">
			<h2 class="text-2xl font-semibold">{selectedBook.title}</h2>
			{#if downloadLink}
				<a
					href={downloadLink}
					class="flex items-center gap-2 whitespace-nowrap text-sm text-blue-500 hover:text-blue-800 hover:underline"
				>
					<IconCloudArrowDown class="h-5 w-5" />
					<span> Download EPUB </span>
				</a>
			{/if}
		</div>

		<h3 class="text-lg font-semibold">Authors</h3>
		<div class="flex flex-col gap-3">
			{#each authors as author}
				<BookAuthor name={author} />
			{/each}
		</div>

		<h4 class="text-lg font-semibold">Subjects</h4>
		<div class="flex flex-col gap-3">
			{#each selectedBook.subjects as subject}
				<BookSubject name={subject} />
			{/each}
		</div>
	</div>
</div>
