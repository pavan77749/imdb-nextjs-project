"use client"
import {useEffect} from 'react'
export default function error({error,reset}) {
    useEffect(()=>{
        console.log(error)
    },[error])
  return (
    <div className="text-center mt-10">
        <h1>Something went wrong. Please try again later</h1>
        <button className="hover:text-amber-600 p-2 mt-2 bg-white text-black rounded-lg" onClick={()=>reset()} >Try Again</button>
    </div>
  )
}
