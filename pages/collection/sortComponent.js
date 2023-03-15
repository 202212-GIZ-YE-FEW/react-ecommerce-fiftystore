
const sortOptions = [
{value: 'RatingHighToLow', title: 'Rating High To Low'},
{value: 'RatingLowToHigh', title: 'Rating Low To High'},
{value: 'PriceHighToLow', title: 'Price High To Low'},
{value: 'PriceLowToHigh', title: 'Price Low To High'}
]

const sortComponent = ( { sortBy, setSortBy } ) => {
  return (
    <select 
    className='bg-transparent border outline-none'
    value={sortBy || 'PriceHighToLow'}
    onChange={(e) => setSortBy(e.target.value)}
    >
      {sortOptions.map((item)=> (
        <option className='bg-[#161616]' value={item.value}>{item.title}</option>
      ))}
    </select>
  )
}

export default sortComponent