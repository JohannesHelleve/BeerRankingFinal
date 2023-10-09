<script lang="ts">
	import Product from './product.svelte';
	export let products: { name: string; list: { store: string; price: number; }[] }[];
</script>

<div class="flex justify-center items-center mt-10">
	<section class="border-4">
		{#each products as product}
			<article>
				<Product name={product.name} vendors={product.list}/>
			</article>
		{/each}	
	</section>
</div>

