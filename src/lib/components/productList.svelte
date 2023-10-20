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

<div class="">
	<section class="flex flex-wrap">
		{#each products as product}
			<article>
				<Product product={product}/>
			</article>
		{/each}	
	</section>
</div>

