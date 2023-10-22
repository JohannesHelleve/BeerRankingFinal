<script>
    import { search } from "../../store";

</script>

<div class="flex justify-center">   
    <input id="søk" placeholder="Søk her!" type="text" class="mb-5 rounded-md  border-2 w-60 shadow-lg"  bind:value={$search}>
</div>