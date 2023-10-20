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

<div class="flex flex-col p-5">
    <h1 class="bg-red-600">{product.productName}</h1>
    <ul>
        {#each product.stores as store}
            <li class="bg-blue-600">{store.storeName} - {store.storePrice}</li>
        {/each}
    </ul>
</div>

