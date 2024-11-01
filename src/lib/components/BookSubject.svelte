<script lang="ts">
	import IconLightBulb from 'components/Icons/IconLightBulb.svelte';

	let {
		name
	}: {
		name: string;
	} = $props();
</script>

<div class="flex items-center gap-2">
	<IconLightBulb class="h-4 w-4" />
	<span class="text-sm">{name}</span>
</div>
