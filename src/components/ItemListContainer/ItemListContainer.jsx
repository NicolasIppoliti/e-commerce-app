import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    const category = useParams().category

    useEffect(() => {
        const queryDB = getFirestore();
        const queryCollection = collection(queryDB, 'products');
        if(category) {
            const queryFilter = query(queryCollection, where('category', '==', category));
            getDocs(queryFilter).then(res => setItems(res.docs.map(product => ({id: product.id, ...product.data()}))))
        } else {
            getDocs(queryCollection).then(res => setItems(res.docs.map(product => ({id: product.id, ...product.data()}))))
        }
    }, [category]);

return (
    <div className='font-light pt-28'>
        <ItemList items={items}/>
    </div>
)}

export default ItemListContainer;