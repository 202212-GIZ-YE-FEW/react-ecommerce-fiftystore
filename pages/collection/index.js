import React, { useState } from 'react'
import  productCard from './productCard'
import categoryFilter from './categoryFilter'
import { getVisibleProduct, priceRange } from '@/services/productQueries'
import priceFilter from './priceFilter'
import ratingFilter from './ratingFilter'
import rating from '@/src/components/Rating'
import appliedFilter from './appliedFilter'
import sortComponent from './sortComponent'

const initPriceFilter = {
  min: priceRange.min,
  max: priceRange.max,
  isApplied: false 
}
const Collection = () => {
  const [selectedCategories, setselectedCategories] = useState([])
  const [selectedPriceRange, setSelectedPriceRange] = useState(initPriceFilter)
  const [selectedRating, setSelectedRating] = useState('')
  const [sortBy, setSortBy] = useState('')
  const [isClearPrice, setIsClearPrice] = useState(false)

  const onChangeCategoryHandler =(category, isChecked) => {
      isChecked
      ? setselectedCategories((prevCategory)=> [...prevCategory, category])
      : setselectedCategories(
        selectedCategories.filter(
          cat => cat !== category
        )
      )   
  }

    const onChangePriceHandler = (min, max, isClear)=>{
     
        if(isClear){
           setSelectedPriceRange(initPriceFilter)
           setIsClearPrice(true)
           return 
        }

        if (
          min === priceRange.min &&
          max === priceRange.max
          )
            return setSelectedPriceRange(initPriceFilter)
            
            //console.log('Price Filter')

          setSelectedPriceRange({
            min,
            max,
            isApplied:true
          })
          setIsClearPrice(false)
    }

    const onChangeRatingHandler = rating => {
      if (rating === 'clear') return setSelectedRating('')
      setSelectedRating(rating)
    }
    const onClearAllHandler = () => {
        setselectedCategories([])
        setSelectedPriceRange(initPriceFilter)
        setSelectedRating('')
        setIsClearPrice(true)
    }
    const products = getVisibleProduct(selectedCategories, selectedPriceRange, selectedRating, sortBy)

  return (
    <div className='grid grid-cols-12 gap-4 my-4 px-3'>
        <div className='col-span-2 space-y-3'>
          <categoryFilter 
          selectedCategories = {selectedCategories}
          onChangeCategory = {onChangeCategoryHandler}
          />

            <priceFilter
            isClear = {isClearPrice}
            initPriceRange = {selectedPriceRange}
            onChangePrice = {onChangePriceHandler}
            />
            {/* rating filter  */}
            <ratingFilter 
            setSelectedRating={selectedRating}
            onChangeRating = {onChangeRatingHandler}
            />
            
        </div>
        <div className='col-span-10'>
          <div className='grid grid-cols-12 items-center'>
            <div className='col-span-10'>
          <appliedFilter 
            selectedCategories = {selectedCategories}
            onChangeCategory = {onChangeCategoryHandler}
            selectedPriceRange={selectedPriceRange}
            // setSelectedPriceRange={setSelectedPriceRange}
            onChangePrice = {onChangePriceHandler}
            selectedRating={selectedRating}
            onChangeRating = {onChangeRatingHandler}
            onClearAll = {onClearAllHandler}
          />
            </div>
            <div className='col-span-2'>
              <sortComponent 
              sortBy = {sortBy}
              setSortBy = {setSortBy}
              />
            </div>

          </div>
          <div className='border-b py-1' />
          <div className='grid grid-cols-12 gap-3 mt-3'>
          {products.map((product)=>(
            <div  key={Product.id} className='col-span-3'>
            <productCard product={product}/>
            </div>
          ))}
         </div>
        </div>
    </div>
  )
}

export default Collection