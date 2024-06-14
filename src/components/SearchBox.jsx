"use client";
import {useState} from 'react'
import { useRouter } from 'next/navigation';

export default function SearchBox() {
  const [search,setSearch]=useState();
  const router=useRouter();
  const handleSubmit=(e)=>{
    e.preventDefault();
    router.push(`/search/${search}`);
  }
  return (
    <form className=" flex justify-between px-5 max-w-6xl mx-auto" onSubmit={handleSubmit}>
        <input type='text' placeholder='Search keywords ..' 
        className=" w-full h-14 rounded-md outline-none  placeholder-gray-500 bg-transparent flex-1"
         onChange={(e)=>setSearch(e.target.value)} />
        <button className={` ${!search?' text-gray-500':'text-amber-500'}`} disabled={!search}>search</button>
    </form>
  )
}
