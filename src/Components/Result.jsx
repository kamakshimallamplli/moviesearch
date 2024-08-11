import React from 'react'

export const Result = (props) => {
    const boxes = props.movies.map((item,index)=>{
        return <Box key={index } image={item.poster_path} title={item.original_title } rating={item.vote_average} Description={item.overview}  releasedon ={item.release_date} />
    })
  return (
    <div className='w-full grid md:grid-cols-4  gap-5'>
    {boxes}
         </div>
   
  )
}

const Box =(props)=>{
    const IMGPATH= "https://image.tmdb.org/t/p/w1280"
   return(
<div className='shadow min-h-[200px] pb-1 mt-3 '>

<img src={IMGPATH + props.image} alt=' ' className='w-full' />
<div className=' justify-between px-2 items-center '> 
    <span className='text-2xl font-bold text-red-500'>
   {props.title} </span>
    
    <span className='flex text-sm text-black-500 font-bold '> 
        <span className='font-bold text-yellow-600 gap-2'> PLOT: </span> <span  className=' text-white-400 gap-2'>{props.Description} </span></span>
    <span className='text-xl text-yellow-500 font-bold '> Rating: <span  className=' text-green-400 gap-2'>{props.rating}</span>  </span>

    <div className='text-xl text-yellow-500 font-bold '> Released On : <span  className=' text-green-400 gap-2'>{props.releasedon}</span>  </div>
    </div>
</div>
   ) 
}