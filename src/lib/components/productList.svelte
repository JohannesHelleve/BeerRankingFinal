<script lang="ts">
	import Product from './product.svelte';
	export let products: {
    ean: string;
    productName: string;
    stores: {
		storeName: string;
        storePrice: number; 
    }[];
	image: string;
	description: string;
}[];
</script>

<div class="flex justify-center">
	<section class="flex flex-wrap border-4 justify-around">
		{#each products as product}
			<article class="mb-5">
				<Product product={product}/>
			</article>
		{/each}	
	</section>
</div>

