<script lang="ts">
	import ProductList from '../components/productList.svelte';
	import Header from '../components/header.svelte';
	import Searchbar from '../components/searchBar.svelte';
	import type { PageData } from './$types';
	import { createSearchStore, searchHandler } from '../store';
	import { onDestroy } from 'svelte';
	export let data: PageData;
	const {products} = data;

	const searchStore = createSearchStore({products}.products);

	const unsubscribed = searchStore.subscribe((model) => searchHandler(model));
	 
	onDestroy(() => {
		unsubscribed();
	}); 
</script>

<section>
	<Header/>
	<Searchbar/>
	<ProductList products={$searchStore.filtered}/>
</section>

