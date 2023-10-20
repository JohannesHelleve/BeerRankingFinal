
import { writable } from "svelte/store";

export const search = writable("");

export const handleFileter = (products: Products, search: string) => {
    return products.filter((product) => {
        return product.productName.toLowerCase().includes(search.toLowerCase());
    });
};



export type Products = {
    ean: string;
    productName: string; // Change the type to the actual type of productName
    stores: {
        storeName: string;
        storePrice: number; // Change the type to the actual type of storePrice
    }[];
}[];

