import React from 'react'
import images1 from "../assets/images1.jpg"
import { LuVegan } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/CartSlice';


function Card({name,image,id ,price, type}) {
  let dispatch=useDispatch()


  
  return (
    <div className='w-[250px] h-[390px] bg-white p-2 rounded-[10px] flex flex-col gap-2 shadow-lg hover:border-2 border-gray-600 duration-100 transition-all'>
      <div className='w-[100%] h-[70%] overflow-hidden rounded-[10px]'>
        <img src={image} alt="" className='object-cover rounded-[10px]' />
      </div>
      <div className='text-2xl font-semi-bold '>
        {name}
      </div>
      <div className='w-full flex  justify-between items-center'>
        <div className='text-green-700 text-lg font-bold'>Rs {price}</div>
        <div className='flex justify-center items-center gap-2 text-green-700 text-lg font-semibold'>{ type==="veg"?<LuVegan />:<GiChickenOven />}<span>{type}</span></div>
      </div>
      <button className='w-full p-2 text-black text-lg font-bold bg-green-200 hover:bg-gray-400  tarnsition-all duration-500 rounded-[5px]  cursor-pointer 'onClick={()=>dispatch(AddItem({id:id,name :name,image:image,qty:1 }))}>ADD DISH</button>
    </div>
  )
}

export default Card;
