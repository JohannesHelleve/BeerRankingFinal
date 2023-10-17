import { products } from '$db/products';
import type { PageServerLoad } from './$types';
import { KASSAL_BEARER_TOKEN } from "$env/static/private";
import eanList from "$db/ean";


async function updateDB(){
    for (let i = 0; i < eanList.length; i++) {
        const product = await getProduct(eanList[i].ean)
        await updateProduct(product)
    }
}


async function getProduct(ean: string) {
    const response = await fetch("https://kassal.app/api/v1/products/ean/" + ean, {
        headers: {
            Authorization: `Bearer ${KASSAL_BEARER_TOKEN}`
        }
    })
    return response.json()
}


async function updateProduct(product) {
    try{
        const collection = products; 
        await collection.insertOne(product)
        
    } catch (error) {
        return {
            status: 500,
            body: error
        }
    }
}


export const load: PageServerLoad = async function() {
    let data = await products.find({}).toArray();
    const db = await updateDB();
    return {
        products: data
    }
}

