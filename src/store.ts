
import { writable } from "svelte/store";

export const search = writable("");

export const handleFileter = (products: Products, search: string) => {
    return products.filter((product) => {
        return product.name.toLowerCase().includes(search.toLowerCase());
    });
};



export type Products = 
    { name: string; 
      list: 
            { store: string; price: number; }[] 
    }[];

