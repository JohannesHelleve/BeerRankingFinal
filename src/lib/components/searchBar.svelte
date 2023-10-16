<script>
    import { search } from "../../store";

</script>

<div class="flex justify-center">   
    <label for="søk">Søk her</label>
    <input id="søk" type="text" class="border-4" bind:value={$search}>
</div>