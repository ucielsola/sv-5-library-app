<script lang="ts">
	import '../app.css';
	import { getBooksState, setBooksState } from '$lib/state/booksState.svelte';
	import { onMount } from 'svelte';
	import Footer from 'components/Footer.svelte';

	setBooksState();

	let { children } = $props();

	const bookState = getBooksState();

	onMount(bookState.loadBooks);
</script>

<div class="flex h-screen w-screen flex-col">
	<div class="w-full flex-1 overflow-hidden">
		{@render children()}
	</div>

	<footer class="h-20 border-t">
		<Footer />
	</footer>
</div>
