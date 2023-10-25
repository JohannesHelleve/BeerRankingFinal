<script lang="ts">
    export let product: {
    ean: string;
    productName: string;
    stores: {
        storeName: string;
        storePrice: number; 
    }[];
};
</script>

<div class="flex flex-col py-2 px-3 border-4 border-black rounded-lg w-80 h-48 ">
    <h1 class="text-xl">{product.productName}</h1>
    <ul class="pt-2">
        {#each product.stores as store}
            <li class="text-sm">{store.storeName} - {store.storePrice}</li>
        {/each}
    </ul>
</div>

