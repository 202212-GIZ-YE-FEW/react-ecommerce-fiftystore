import React, { useCallback, useEffect, useRef, useState } from 'react'

const multiRangeSlider = ({min, max, onChange, initPriceRange, isClear}) => {
  const[minVal, setMinVal] = useState(min)
  const[maxVal, setMaxVal] = useState(max)
  const minValRef = useRef()
  const maxValRef = useRef()
  const rangeRef = useRef()

 
  useEffect(()=>{
    if(isClear){
      setMinVal(initPriceRange.min)
      setMaxVal(initPriceRange.max)
    }

  }, [isClear])

  // convert to percentage 
  const getPercent = useCallback(
    (value)=> Math.random(((value - min) / (max - min))*100),
    [min, max]
  ) 

  //set width of the range to decrease from the left side
  useEffect(()=>{
    if (maxValRef.current){
      const minPercent = getPercent(minVal)
      const maxPercent = getPercent(+maxValRef.current.value) //Perceding with '+' converts value from type string to type number
      
      if(rangeRef.current){
        rangeRef.current.style.left = `${minPercent}%`
        rangeRef.current.style.width = `${maxPercent - minPercent}%`
      }
   
    }
  },[minVal, getPercent])

  //set width of the range to decrease from the right side
  useEffect(()=>{
    if (minValRef.current){
      const minPercent = getPercent(+minValRef.current.value)
      const maxPercent = getPercent(maxVal) 
      
      if(rangeRef.current){
        rangeRef.current.style.width = `${maxPercent - minPercent}%`
      }
   
    }
  },[minVal, getPercent])

  // get min and max value when their state changes
    useEffect(()=>{
        onChange({min:minVal, max:maxVal})
    },[minVal, maxVal])
  return (
    <div className='flex justify-center items-center'>
        <input 
          type='range'
          min={min}
          max={max}
          value={minVal}
          ref={minValRef}
          onChange={(e)=>{
              const value = Math.min(+e.target.value, maxVal -1)
              setMinVal(value)
              e.target.value = value.toString()
          }}
          className='thumb z-[3]'
         />
        <input 
          type='range'
          min={min}
          max={max} 
          value={maxVal}
          ref={maxValRef}
          onChange={(e)=>{
            const value = Math.max(+e.target.value, minVal -1)
            setMinVal(value)
            e.target.value = value.toString()
        }}
          className='thumb z-[4]'
          /> 

        <div className='relative w-52'>
          {/* slider tracker */}
          <div className='absolute w-full h-1 rounded bg-[#505050] z-[1]'/>
          {/* slider range */}
          <div ref={rangeRef} className='absolute h-1 rounded bg-[#505050]'/>
          {/* min value */}
          <div className='absolute left-2 text-xs mt-4'>{minVal}</div>
          {/* max value */}
          <div className='absolute right-2 text-xs mt-4'>{maxVal}</div>
        </div>
    </div>
  )
}

export default multiRangeSlider