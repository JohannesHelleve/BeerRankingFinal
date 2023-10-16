import { writable } from "svelte/store"

export const createSearchStore = (data) => {

    const { subscribe, set, update} = writable({
        data: data,
        filtered : data,
        search: '',
    });

    return {
        subscribe,
        set,
        update,
    }
}

export const searchHandler = (searchStore) => {
    const searchTerm = searchStore.search.toLowerCase() || ''
    searchStore.filtered = searchStore.data.filter((item) => {
        return item.name.toLowerCase().includes(searchTerm)
    })
}
