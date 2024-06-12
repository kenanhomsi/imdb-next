import React from 'react'

export default function Results({results}) {
  return (
    <div className='flex flex-col gap-5'>
        { results.map((result,index)=>{
            return(
                <div key={result.id} >
                    <h1>{result.original_title}</h1>
                    <p>{result.overview}</p>
                    <p>{result.release_date}</p>
                    <p>{result.release_date}</p>
                </div>
            )
        })
        }
    </div>
  )
}
