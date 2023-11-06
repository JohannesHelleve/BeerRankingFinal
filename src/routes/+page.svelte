<script lang="ts">
	import Footer from '$lib/components/footer.svelte';
	import ProductList from '../lib/components/productList.svelte';
	import Header from '../lib/components/header.svelte';
	import SearchBar from '../lib/components/searchBar.svelte';
	import { handleFileter, search } from '../store';


	import type { PageData } from './$types';
	export let data: PageData;
	$: filteredItems = handleFileter(data.products, $search);
</script>

<div class="h-screen bg-palett-Lighblue w">
	<section class="bg-palett-Lighblue">
		<Header/>
		<SearchBar/>
		<ProductList products={filteredItems}/>
		<ProductList products={filteredItems}/>
		<Footer/>
	</section>
</div>

