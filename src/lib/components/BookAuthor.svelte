<script lang="ts">
	import IconPerson from './Icons/IconPerson.svelte';

	let {
		name
	}: {
		name: string;
	} = $props();
</script>

<div class="flex items-center gap-2">
	<IconPerson class="h-4 w-4" />
	<span class="text-sm">{name}</span>
</div>
