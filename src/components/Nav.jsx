import React, { useContext, useEffect } from 'react'
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { dataContext } from '../Context/UserContext';
import { food_items } from '../Food';
import { useSelector } from 'react-redux';

function Nav() {
    let { input, setInput, cate, setCate, showCart, setShowCart } = useContext(dataContext);
    useEffect(() => {
        let newlist = food_items.filter((items) =>
            items.food_name.toLowerCase().includes(input.toLowerCase())
        );

        setCate(newlist);
    }, [input]);

    
    let items= useSelector(state => state.cart)
    
    

    return (
        <div className='w-full h-[80px] flex justify-between items-center px-5 md:px8'>

            <div className='w-[40px] h-[40px] bg-white flex justify-center items-center rounded-md shadow-xl'>

                <MdFastfood className='w-[30px] h-[30px] text-green-700' />

            </div>
            <form className='w-[40%] h-[40px] bg-white flex items-center px-5 gap-4 rounded-[10px] shadow-md md:w-[70%]' onSubmit={(e) => e.preventDefault()} >

                <FaSearch className='w-[20px] h-[20px] text-green-700 ' />

                <input type="text" placeholder='Search your.....' className='w-full outline-none text-[15px] md:text-[18px]' onChange={(e) => setInput(e.target.value)} value={input} />

            </form>

            <div className='w-[40px] h-[40px] bg-white flex justify-center items-center rounded-md shadow-xl relative' onClick={() => { setShowCart(true)

             }}>
                <span className=' absolute top-0 right-0  text-green-700 text-[15px]' >{items.length}</span>
                <CiShoppingCart className='w-[30px]  h-[30px] text-green-700 cursor-pointer ' onClick={()=>{
                    setShowCart(true)
                }}/>
            </div>
           
        </div>
    )
}

export default Nav;
