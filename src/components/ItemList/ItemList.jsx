import React, {useState, useEffect} from 'react';
import Items from './Items/Items';
import ItemData from '../../data/data';

const getItems = () => {

    return new Promise((resolve) => {
        setTimeout(() => resolve(ItemData), 2000);
    })
}

const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getItems().then((resp) => {
            setItems(resp);
        })
    }, [])

    return (
        <div className='sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
            {items.map((item) => {
                return (
                <Items 
                key={item.id}
                name={item.name} 
                img={item.img} 
                role={item.role}
                price={item.price}
                discount={item.discount}
                stock={item.stock}/>
                );
            })}
        </div>
    );
};

export default ItemList;