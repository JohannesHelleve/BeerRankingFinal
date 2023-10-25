import { products } from '$db/products';
import type { PageServerLoad } from './$types';



export const load: PageServerLoad = async function() {
    const data = await products.find({}).toArray();
    const productsWithoutId = data.map(({ _id, ...rest }) => rest);
    return {
        products: productsWithoutId
    };
}
