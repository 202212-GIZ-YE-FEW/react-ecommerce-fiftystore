
const API_URL = `https://fakestoreapi.com`;

export async function getAllProducts(from='products') {
    const res =  await fetch(`${API_URL}/${from}`);
    const data = await res.json();
    return data;
}
export async function getAllCategories() {
    const res = await fetch(`${API_URL}/products/categories`);
    const data = res.json();
    return data;
}
export async function getProductsByTitle(from, title, setSearchResults) {
    const products  = await getAllProducts();
    await setSearchResults(products.filter(product => product.title.toLowerCase().includes(title.toLowerCase())));
}
