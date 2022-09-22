import React from 'react';
import logo from '../assets/hashnode.jpg';
import { BiDownArrow } from "react-icons/bi";
import { FiBell } from "react-icons/fi";

export default function Navbar() {
  return (
    <div className='w-[100vw] border-b-2 h-[8vh] fixed'>
        <div className=' flex flex-row'>
           <div className='mt-6 ml-40'>
               <img src={logo} alt="hashnode logo" className='w-[10vw]'/>
           </div>
           <div className=' hidden lg:flex ml-[2vw] w-[50vw] mt-4'>
              <svg xmlns="http://www.w3.org/2000/svg" className=" absolute mt-3 ml-4 text-gray-500 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <input type="search" name="search" placeholder='Search for tags, people, articles, and many more' className='border w-full h-[5vh] text-center rounded-3xl bg-zinc-50 border-gray-400'  />
           </div>
           <div>
             <button className='w-[7vw] ml-[3vw] h-[5vh] mt-4 border bg-blue-500 rounded-l-3xl text-white border-indigo-600'>Write</button>
             <button className='w-[2vw] absolute h-[5vh] mt-4 p-2 border bg-blue-500 rounded-r-3xl text-white border-l-white border-indigo-600'><BiDownArrow /></button>
           </div>
           <div>
           <svg className='css-17mdxl4 w-[1.3vw] ml-[8vh] mt-5 ' viewBox="0 0 384 512"><path d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 39.2 28.2 71.8 65.5 78.7-.8 17.2-5 30.4-12.7 40-17.5 21.8-53.1 25.2-90.7 28.7-28.2 2.6-57.4 5.4-80.4 16.9-3.4 1.7-6.7 3.6-9.7 5.7V158.4c36.5-7.4 64-39.7 64-78.4 0-44.2-35.8-80-80-80S0 35.8 0 80c0 38.7 27.5 71 64 78.4v195.2C27.5 361 0 393.3 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-36.9-24.9-67.9-58.9-77.2 5-9.6 12.3-14.6 19-18 17.5-8.8 42.5-11.2 68.9-13.7 42.6-4 86.7-8.1 112.7-40.5 12.4-15.5 19-35.5 19.8-60.7C357.3 214 384 182.1 384 144zM32 80c0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48-48-21.5-48-48zm96 352c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-26.4 21.4-47.9 47.8-48h.6c26.3.2 47.6 21.7 47.6 48zm187.8-241.5L304 192c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48c0 22.4-15.4 41.2-36.2 46.5z"></path></svg>
           <div>
           <svg className="css-17mdxl4 w-7 mt-[-3.3vh] ml-52" viewBox="0 0 448 512"><path d="M224 480c-17.66 0-32-14.38-32-32.03h-32c0 35.31 28.72 64.03 64 64.03s64-28.72 64-64.03h-32c0 17.65-14.34 32.03-32 32.03zm209.38-145.19c-27.96-26.62-49.34-54.48-49.34-148.91 0-79.59-63.39-144.5-144.04-152.35V16c0-8.84-7.16-16-16-16s-16 7.16-16 16v17.56C127.35 41.41 63.96 106.31 63.96 185.9c0 94.42-21.39 122.29-49.35 148.91-13.97 13.3-18.38 33.41-11.25 51.23C10.64 404.24 28.16 416 48 416h352c19.84 0 37.36-11.77 44.64-29.97 7.13-17.82 2.71-37.92-11.26-51.22zM400 384H48c-14.23 0-21.34-16.47-11.32-26.01 34.86-33.19 59.28-70.34 59.28-172.08C95.96 118.53 153.23 64 224 64c70.76 0 128.04 54.52 128.04 121.9 0 101.35 24.21 138.7 59.28 172.08C421.38 367.57 414.17 384 400 384z"></path></svg>
           </div>
           
           </div>
        </div>
    </div>
    
  )
}
