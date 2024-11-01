<script lang="ts">
	import IconGithub from './Icons/IconGithub.svelte';
</script>

<div class="flex flex-col items-center justify-center gap-0.5 py-2">
	<div class="flex items-center justify-center gap-1 text-sm">
		<span>Createdy by</span>
		<a
			href="https://ucielsola.me"
			target="_blank"
			class="font-medium text-violet-500 hover:underline"
		>
			Uciel Sola
		</a>
		<span>with</span>
		<a
			href="https://svelte.dev"
			target="_blank"
			class="font-medium text-orange-500 hover:underline"
		>
			Svelte
		</a>
		<span>and</span>
		<a
			href="https://tailwindcss.com"
			target="_blank"
			class="font-medium text-blue-500 hover:underline"
		>
			Tailwind CSS
		</a>
	</div>
	<span class="text-xs">
		Books data from <a
			href="https://gutenberg.org/"
			target="_blank"
			class="font-medium text-green-500 hover:underline"
		>
			Project Gutenberg
		</a>
	</span>

	<span class="flex items-center gap-1 text-xs">
		<IconGithub class="h-4 w-4" />
		<a
			href="https://github.com/ucielsola/sv-5-library-app"
			target="_blank"
			class="font-medium text-slate-900 hover:underline"
		>
			Github Repository
		</a>
	</span>
</div>
