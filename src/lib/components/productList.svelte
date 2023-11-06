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

<div class="flex justify-center items-center ">
	<section class="p-5 flex justify-between flex-wrap items-stretch">
		{#each products as product}
			<article class="mb-5">
				<Product product={product}/>
			</article>
		{/each}	
	</section>
</div>

