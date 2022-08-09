import React, {useState, useEffect} from 'react';
import Items from './Items/Items';
import ItemData from '../../data/data';

const getItems = () => {

    return new Promise((resolve) => {
        setTimeout(() => resolve(ItemData[0]), 2000);
    })
}

const ItemDetail = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getItems().then((resp) => {
            setItems(resp);
        })
    }, [])

    return (
        <div className='grid'>
            <Items name={items.name} role={items.role} img={items.img} stock={items.stock} price={items.price} discount={items.discount} description={items.description}/>
        </div>
    );
};

export default ItemDetail;