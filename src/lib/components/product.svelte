<script lang="ts">
    export let product: {
    ean: string;
    productName: string;
    stores: {
        storeName: string;
        storePrice: number; 
    }[];
    image: string;
    description: string;
};
</script>

<div class="flex flex-col py-2 px-3 border-4 border-black rounded-lg w-80 bg-white h-400">
    <h1 class="text-xl">{product.productName}</h1>
    <div class="flex justify-between">
        <ul class="pt-2">
            {#each product.stores as store}
                <li class="text-sm">{store.storeName} - {store.storePrice}</li>
            {/each}
        </ul>
        <img class="object-scale-down h-28" src={product.image} alt={product.productName}/>
    </div>
</div>

