import { products } from '$db/products';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async function() {
    let data = await products.find({}).toArray();
    
    return {
        products: data
    }
}