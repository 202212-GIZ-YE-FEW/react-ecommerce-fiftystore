//import {products as DBProducts } from 

const getFilterData = (
    data,
    selectedCategories,
    selectedPriceRange,
    selectedRating
) =>{
    return data.filter((product) => {
        //category filter 
        let categoryMatch = true 
        if(selectedCategories.length && product.category)
        categoryMatch = selectedCategories.includes(product.category)

        //price filter 
        let priceMatch = true
        let {min, max, isApplied } = selectedPriceRange
            if(isApplied&& product.price)
            priceMatch = product.price >= min && product.price <= max

        // rating filter 
        let ratingMatch = true 
        if(selectedRating && product.rating)
        ratingMatch = product.rating >= +selectedRating

        return categoryMatch && priceMatch && ratingMatch
    })
}

const getSortData = (data, sortBy) => {
    return data.sort((product1, product2) => {
        if (sortBy === 'PriceHighToLow'){
            return product1.price > product2.price ? -1 : 1
        } 
        else if (sortBy === 'PriceLowToHigh'){
            return product1.price < product2.price ? -1 : 1
        }
        else if (sortBy === 'RatingLowToHigh'){
            return product1.rating < product2.rating ? -1 : 1
        } else{
            //default
            return product1.rating > product2.rating ? -1 : 1
        }

    })
}


export const  getVisibleProduct =(
    selectedCategories,
    selectedPriceRange,
    selectedRating,
    sortBy
)=>{
    let products = DBProducts
    if(
       selectedCategories.length ||
       selectedPriceRange.isApplied  ||
       selectedRating
    )
        products = getFilterData(
        products,
        selectedCategories,
        selectedPriceRange,
        selectedRating
    )

        products = getSortData(products, sortBy)
    return products
}


//find price range (min,max)
const findRange = () => {
    let min = DBProducts[0].price
    let max = 0 
    DBProducts.forEach((product) => {
        if(product.price < min) min = product.price
        if(product.price > max) max = product.price
    })
    return {min, max}
}

export const priceRange = findRange()