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
        const filter = { ean: product.data.ean };
        console.log(product.data.ean)
        const test = await collection.findOne(filter).catch(err => console.log(err))
        console.log(test)
        //await collection.findOneAndReplace(filter, product, { upsert: true });
        return {
            status: 200,
            body: test
        }

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

