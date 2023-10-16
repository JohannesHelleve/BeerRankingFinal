<script lang="ts">
	import Product from './product.svelte';
	export let products: { name: string; list: { store: string; price: number; }[] }[];
</script>

<div class="">
	<section class="flex flex-wrap">
		{#each products as product}
			<article>
				<Product name={product.name} vendors={product.list}/>
			</article>
		{/each}	
	</section>
</div>

