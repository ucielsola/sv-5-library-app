<script lang="ts">
	import IconCancel from 'components/Icons/IconCancel.svelte';
	import IconMagnifier from 'components/Icons/IconMagnifier.svelte';

	type Props = {
		value: string;
		placeholder: string;
		onChange: (value: string) => void;
		disabled?: boolean;
	};

	let { value, placeholder, onChange, disabled }: Props = $props();

	let inputTimeout: NodeJS.Timeout | null = null;

	const debounceDelay = 500;

	const handleInput = (e: Event) => {
		if (!e.target) return;

		if (inputTimeout) {
			clearTimeout(inputTimeout);
		}

		inputTimeout = setTimeout(() => {
			onChange((e.target as HTMLInputElement).value);
		}, debounceDelay);
	};

	const handleButton = () => {
		if (value) {
			value = '';
			onChange('');
		} else {
			onChange(value);
		}
	};
</script>

<div class="relative rounded-lg border bg-slate-50 px-4 py-2 text-slate-500">
	<input
		bind:value
		type="text"
		{placeholder}
		{disabled}
		oninput={handleInput}
		class="w-full bg-slate-50 focus:outline-none focus:ring-0 active:outline-none active:ring-0"
	/>

	<button
		class="absolute right-0 top-0 flex h-full w-min items-center justify-center border-l p-4 transition-all hover:bg-slate-100"
		onclick={handleButton}
	>
		{#if value}
			<IconCancel class="h-6 w-6 text-slate-400" />
		{:else}
			<IconMagnifier class="h-6 w-6 text-slate-400" />
		{/if}
	</button>
</div>
