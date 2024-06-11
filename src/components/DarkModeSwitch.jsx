"use client";
import {MdDarkMode ,MdLightMode} from 'react-icons/md';
import { useTheme } from 'next-themes';
export default function DarkModeSwitch() {

    const {theme,setTheme,systemTheme}=useTheme();
    const CurrentTheme=theme === systemTheme ? systemTheme : theme;
  return (
    <div onClick={()=>setTheme(CurrentTheme ==='dark'?'light':'dark')}>
            {CurrentTheme ==='dark'?
            <MdLightMode className=' text-xl cursor-pointer hover:text-amber-500' />
            :<MdDarkMode className=' text-xl cursor-pointer hover:text-amber-500'  />}
    </div>
  )
}
