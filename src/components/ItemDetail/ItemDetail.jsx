import Items from './Items/Items';
import { getProductsById } from '../../data/customFetch';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ItemDetail = () => {

    const [items, setItems] = useState({})

    const {id} = useParams()

    useEffect(() => {
        getProductsById(id).then((response) => {
            setItems(response);
        })
    })

    return (
        <div className='grid font-light pt-16'>
            <Items {...items}/>
        </div>
    );
};

export default ItemDetail;