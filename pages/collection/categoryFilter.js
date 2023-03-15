//import React from 'react'
//import {categoryTitle} 

const categoryFilter = ({selectedCategories, onChangeCategory}) => {
  return (
    <div className='h-42 p-5 bg-[#1b1b1b] rounded-md space-y-2'>
        <h2 className="font-medium">Category</h2>
        {categoryTitle.map((category)=> (
        <div key={category} className='flex items-center gap-2'>
            <input type='checkbox' 
            checked={selectedCategories.includes(category)}
            onChangeC = {(e)=> onChangeCategory(category, e.target.checked)}
            />
            <label>{category}</label>
        </div>
        ))}
    </div>
  )
}

export default categoryFilter