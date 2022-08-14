import ItemList from '../ItemList/ItemList';
import { customFetch } from '../../data/customFetch';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    const category = useParams().category

    useEffect(() => {
        customFetch().then((response) => {
            if (category === undefined) {
                setItems(response)
            } else {
                let categoryFilter = response.filter(prod => prod.category === category)
                setItems(categoryFilter)
                console.log(categoryFilter)
            }
        })
    })

return (
    <div className='font-light pt-28'>
        <ItemList items={items}/>
    </div>
)}

export default ItemListContainer;