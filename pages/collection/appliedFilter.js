import Chip from '@/src/components/Chip'
import React from 'react'


const categoryChip = (item, onChangeCategory ) => {
    return <Chip  label= {item} onDelete={() => onChangeCategory(item, false)}/>
}

const ratingChip = (selectedRating, onChangeRating ) => {
    return <Chip  label= {`Rating:${selectedRating} ${selectedRating === 5 ? '' : '& UP'}`} onDelete={() =>  onChangeRating('clear')}/>
}

const priceChip = (selectedPriceRange, onChangePrice ) => {
    const {min, max} = selectedPriceRange
    return <Chip  label= {`Price:${min}- ${max}`} onDelete={() =>  onChangePrice(min, max, true)}/>
}

const appliedFilter = ({
    selectedCategories,
    onChangeCategory,
    selectedPriceRange,
    onChangePrice,
    selectedRating,
    onChangeRating,
    onClearAll

}) => {

    let isAnyFilter = selectedCategories.length
    + (selectedPriceRange.isApplied ? 1 :0 )
    + (selectedRating? 1 :0 )

    if(!isAnyFilter)
    return null 
  return (
    <div className='flex items-center gap-3'>
     <span>Filtered By:</span>
     {/*  make a chip */}
     {!!selectedCategories.length && selectedCategories.map(item => (
        <categoryChip 
        key ={item}
        item ={item}
        onChangeCategory = {onChangeCategory}
        />
     ))}
    {selectedPriceRange.isApplied && (
        <priceChip
            selectedPriceRange={selectedPriceRange}
            onChangePrice = {onChangePrice}
        />

    )}
    {selectedRating && (
        <ratingChip
            selectedRating={selectedRating}
            onChangeRating = {onChangeRating}
        />

    )}
    {isAnyFilter &&(
        <Chip 
        label='clear all'
        onDelete={onClearAll}
        />
    )}
    </div>
  )
}

export default appliedFilter