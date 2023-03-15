import Rating from "@/src/components/Rating"


const ratingFilter = ( { selectedRating, onChangeRating } ) => {
  return (
    <div className=' p-4 bg-[#1b1b1b] rounded-md space-y-2'>
        <h2 className="font-medium">Rating</h2>
        {[5, 4, 3, 2, 1].map((rating)=> (
            <div 
                key={rating}  
                onClick={() => onChangeRating(rating)}
                className='flex items-center gap-2'
            >
            <Rating 
                stars = {Array(5).fill(rating)}
                ratingClassName = {`${ rating == selectedRating? 'text-black': '' }`}
            
            />
            <p className='text-gray-400'>{rating === 5 ? 5.0:rating.toFixed(1) + '+'}</p>
            </div>
            
        ))}
    
    </div>
  )
}

export default ratingFilter