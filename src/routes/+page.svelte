<script lang="ts">
	import BookDetails from '$lib/components/BookDetails.svelte';
	import BookList from '$lib/components/BookList.svelte';
	import { getBooksState } from 'state/booksState.svelte';

	const booksState = getBooksState();
</script>

<div class="flex h-full flex-col gap-6 overflow-hidden p-6">
	<h1 class="text-center text-xl font-semibold">Little library App to test Svelte 5 ❤️</h1>
	<div class="grid h-full grid-cols-2 gap-6">
		<BookList />

		<div class="rounded-lg border border-slate-200 p-6">
			{#if booksState.selectedBook}
				<BookDetails />
			{:else}
				<p class="text-center">Select a book to view details</p>
			{/if}
		</div>
	</div>
</div>
