
const API_URL = `https://fakestoreapi.com`;

export async function getAllProducts(path='products') {
    const res =  await fetch(`${API_URL}/${path}`);
    const data = await res.json();
    return data;
}
export async function getAllCategories() {
    const res = await fetch(`${API_URL}/products/categories`);
    const data = res.json();
    return data;
}
export async function getAllProductsByCategory(name){
    return await getAllProducts(`products/category/${name}`);
}
export async function getProductsByTitle(title, setSearchResults) {
    const products  = await getAllProducts();
    await setSearchResults(products.filter(product => product.title.toLowerCase().includes(title.toLowerCase())));
}
