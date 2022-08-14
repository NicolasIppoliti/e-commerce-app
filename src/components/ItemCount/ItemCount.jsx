import React, { useState } from 'react'

const ItemCount = (props) => {

    const [count, setCount] = useState(props.initial);

    const handleDecrement=()=>{
        count > props.initial ? setCount(count-1) : setCount(count)
    }

    const handleIncrement=()=>{
        count < props.stock ? setCount(count+1) : setCount(count)
    }

    return (
        <div className='flex bg-slate-50'>
            <button className='bg-blue-500 px-4 py-1 rounded-md text-white font-medium tracking-wider transition' onClick={handleDecrement}>-</button>
            <h3 className='px-8 py-2 rounded-md'>{count}</h3>
            <button className='bg-blue-500 px-4 py-1 rounded-md text-white font-medium tracking-wider transition' onClick={handleIncrement}>+</button>
        </div>
    )
}

export default ItemCount