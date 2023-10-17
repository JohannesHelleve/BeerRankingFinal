import { products } from "./products";
import { KASSAL_BEARER_TOKEN } from "$env/static/private";
import eanList from "./ean";

async function updateDB(){
    for (const ean in eanList) {
        const product = await getProduct(ean)
        await updateProduct(product)
    }
}

async function getProduct(ean: string) {
    const response = await fetch("https://kassal.app/api/v1/products", {
        headers: {
            Authorization: `Bearer ${KASSAL_BEARER_TOKEN}`
        }
    })
    return response.json()
}


async function updateProduct(request) {
    try{
        const collection = products; 
        const product = JSON.parse(request.body)
        await collection.insertOne(product)
        return {
            status: 200,
            body: product
        }
    } catch (error) {
        return {
            status: 500,
            body: error
        }
    }
}
