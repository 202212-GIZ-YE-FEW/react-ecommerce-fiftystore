import multiRangeSlider from "@/src/components/multiRangeSlider"
import { priceRange } from "@/services/productQueries"

const priceFilter = ({onChangePrice, isClear, initPriceRange }) => {
  return (
    <div className='h-24 p-5 bg-[#1b1b1b] rounded-md space-y-2'>
    <h2 className="font-medium">Price</h2>
        <multiRangeSlider 
        min={priceRange.min}
        max={priceRange.max}
        initPriceRange = {initPriceRange}
        isClear = {isClear}
        onChange = {({min, max}) => onChangePrice(min, max)}
        />
    </div>
  )
}

export default priceFilter