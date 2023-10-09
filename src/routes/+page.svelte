<script lang="ts">
	import type { PageData } from './$types';
	import Product from '../components/product.svelte';
	export let data: PageData;

	$: ({products} = data)
</script>

<section class="text-3xl font-bold underline">
	{#each products as product}
		<article>
			<h2>{product.name}</h2>
			<Product>{product.name}</Product>
		</article>
	{/each}	
</section>

