import React, { useContext, useState } from 'react'
import Nav from '../components/Nav'
import categories from '../Category'
import Card from '../components/Card'
import { food_items } from '../Food'
import { dataContext } from '../Context/UserContext'
import { RxCross2 } from 'react-icons/rx';
import Card2 from '../components/Card2'
import { useSelector } from 'react-redux'


function Home() {

    let { cate, setCate, input, showCart, setShowCart } = useContext(dataContext);

    function filter(Category) {
        if (Category === "All") {
            setCate(food_items)
        } else {
            let newList = food_items.filter((items) => (items.food_category === Category));
            setCate(newList);
        }
    }


    let cartItems = useSelector(state => state.cart)

    return (
        <div className='bg-gray-300 w-full min-h-screen'>
            <Nav />
            {!input ?
                <div className=' w-[100%] flex flex-wrap justify-center items-center gap-6'>
                    {categories.map((items, index) => {

                        return <div key={index} className='w-[120px] h-[100px] bg-white flex flex-col items-start justify-center gap-4 p-4 text-[15px] font-semibold text-gray-600 rounded-[5px] shadow-xl hover:bg-gray-400 cursor-pointer transition-all duration-800 '

                            onClick={() => filter(items.name)}>
                            {items.Icons}
                            {items.name}
                        </div>
                    })}


                </div> : null}


            <div className='w-full flex flex-wrap gap-4 p-5 justify-center items-center m-5'>

                {cate.map((items) => (
                    <Card key={items.id} name={items.food_name} image={items.food_image} id={items.id} price={items.price} type={items.food_type} />
                ))}
            </div>

            <div className={`w-full md:w-[30vw]  h-[100%] fixed top-0 right-0 bg-gray-300 shadow-xl p-5 transition-all duration-600 ${showCart ? "translate-x-0" : "translate-x-full"}`}>

                <header className='w-[100%] flex justify-between items-center p-5'>

                    <span className='w-[200px] h-[30px] text-green-800 font-semibold text-xl'>Order items </span>

                    <RxCross2 className='w-[20px] h-[20px] font-bold text-xl cursor-pointer hover:text-green-500' onClick={() => setShowCart(false)} />
                </header>
                <div>
                    { cartItems.map((item) => (
                        <Card2 name={item.name} price={item.price} image={items.image}
                            id={item.id} qty={item.qty} />

                    ))}
                </div>

            </div>
        </div >
    )
}

export default Home;
