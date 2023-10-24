<script lang="ts">
	import Product from './product.svelte';
	export let products: {
    ean: string;
    productName: string;
    stores: {
        storeName: string;
        storePrice: number; 
    }[];
}[];
</script>

<div class="flex justify-items-end border-4">
	<section class="flex flex-wrap justify-center">
		{#each products as product}
			<article>
				<Product product={product}/>
			</article>
		{/each}	
	</section>
</div>

