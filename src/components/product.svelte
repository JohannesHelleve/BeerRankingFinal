<script lang="ts">
    export let name: string;
    export let vendors: { store: string; price: number; }[];
</script>

<div class=" flex flex-col pb-4">
    <h1 class="bg-red-600">{name}</h1>
    <ul>
        {#each vendors as vendor}
            <li class="bg-green-600">{vendor[0]} - {vendor[1]}</li>
        {/each}
</div>

