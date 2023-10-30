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

<div class="flex justify-center items-center ">
	<div class="p-5">
		<section class="flex justify-between flex-wrap self-stretch">
			{#each products as product}
				<article class="mb-5">
					<Product product={product}/>
				</article>
			{/each}	
		</section>
	</div>
</div>

