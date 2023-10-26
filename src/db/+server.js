import { KASSAL_BEARER_TOKEN } from "$env/static/private";
import eanList from "./ean";


export async function updateDB(){
    for (let i = 0; i < eanList.length; i++) {
        const product = await getProduct(eanList[i].ean)
        await updateProduct(product)
    }
}


async function getProduct(ean) {
    const response = await fetch("https://kassal.app/api/v1/products/ean/" + ean, {
        headers: {
            Authorization: `Bearer ${KASSAL_BEARER_TOKEN}`
        }
    })
    return prettifyProduct(response);
}

async function prettifyProduct(response){
    const responseJSON = await response.json();
    const stores = []

    for (const store of responseJSON.data.products) {
        if (store.store == null || store.current_price == null){
            continue
        }

        stores.push({
            storeName : store.store.name,
            storePrice : store.current_price.price,
        })
    }

    stores.sort((a, b) => (a.storePrice > b.storePrice) ? 1 : -1)

    const prettyProduct = {
        ean : responseJSON.data.ean,
        productName : responseJSON.data.products[0].name,
        stores : stores
    }
    return prettyProduct;
}


async function updateProduct(product) {
    try{
        const collection = products;
        const filter = { ean: product.ean };
        await collection.findOneAndReplace(filter, product, { upsert: true });
        return {
            status: 200,
        }

    } catch (error) {
        return {
            status: 500,
            body: error
        }
    }
}
