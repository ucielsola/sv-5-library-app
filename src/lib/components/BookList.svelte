<script lang="ts">
	import { fade } from 'svelte/transition';

	import { getBooksState } from 'state/booksState.svelte';

	import BookListElement from 'components/BookListElement.svelte';
	import BookListElementSkeleton from 'components/BookListElementSkeleton.svelte';
	import InputSearch from 'components/InputSearch.svelte';
	import IconHourglass from 'components/Icons/IconHourglass.svelte';
	import IconMagnifier from 'components/Icons/IconMagnifier.svelte';

	import intersect from 'utils/intersect';

	import type { Book } from 'types/book';

	const skeletons = 10;
	const booksState = getBooksState();
	const books: Book[] = $derived(booksState?.books || []);

	let isLoadingMore = $state(false);

	const loadMore = () => {
		isLoadingMore = true;
		booksState.loadNextPage();
	};

	$effect(() => {
		if (isLoadingMore) {
			isLoadingMore = booksState.loading;
		}
	});
</script>

<div class="flex h-full flex-col gap-2 overflow-hidden">
	<InputSearch
		value={booksState.searchQuery}
		placeholder="Search for books or authors..."
		onChange={booksState.searchBooks}
	/>

	<div class="flex h-full w-full flex-col gap-2 overflow-y-auto pb-16">
		{#if booksState.loading && booksState.searchQuery && !isLoadingMore}
			<div
				class="flex items-center justify-center gap-2 rounded-lg border bg-slate-100 p-3"
				in:fade={{ duration: 150 }}
			>
				<IconMagnifier class="h-5 w-5" />
				<span>Searching...</span>
			</div>
		{:else}
			{#each books as book, index}
				{@const isLast = index === books.length - 1}
				<div use:intersect onEnterViewport={() => (isLast ? loadMore() : null)}>
					<BookListElement {book} />
				</div>

				{#if isLast && booksState.loading}
					<div class="flex items-center justify-center gap-2" transition:fade>
						<IconHourglass class="h-4 w-4 animate-spin" />
						<span>Loading more...</span>
					</div>
				{/if}
			{:else}
				{#if booksState.searchQuery}
					<div
						class="flex items-center justify-center gap-2 rounded-lg border bg-slate-100 p-3"
						in:fade={{ delay: 300 }}
					>
						<p class="text-center">No books found :(</p>
					</div>
				{:else}
					{#each Array(skeletons) as _}
						<BookListElementSkeleton />
					{/each}
				{/if}
			{/each}
		{/if}
	</div>
</div>
