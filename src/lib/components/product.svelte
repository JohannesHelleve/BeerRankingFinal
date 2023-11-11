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

<div class="flex flex-col  border-4 border-black rounded-lg w-80 bg-white h-56">
    <div class="bg-palett-Paynes_gray h-14">
        <h1 class="text-xl px-2 text-palett-Ghost_white">{product.productName}</h1>
    </div>
    <div class="flex pt-3">
        <ul class="p-2 w-2/4 border-r-4 border-r-black border-spacing-7">
            {#each product.stores as store}
                <li class="text-sm">{store.storeName} - {store.storePrice}</li>
            {/each}
        </ul>
        <div class="w-full flex justify-center">
            <img class="object-scale-down h-28" src={product.image} alt={product.productName}/>
        </div>
    </div>
</div>

