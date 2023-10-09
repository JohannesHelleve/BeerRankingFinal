<script lang="ts">
	import ProductList from '../components/productList.svelte';
	import Header from '../components/header.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	$: ({products} = data)
</script>

<section>
	<Header/>
	<ProductList products={products}/>
</section>

