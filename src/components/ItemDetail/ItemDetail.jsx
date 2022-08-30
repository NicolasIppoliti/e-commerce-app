import Items from './Items/Items';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const ItemDetail = () => {

    const [items, setItems] = useState({})
    const {id} = useParams()

    useEffect(() => {
        const queryDB = getFirestore();
        const queryDoc = doc(queryDB, 'products', id);
        getDoc(queryDoc).then(res => setItems({id: res.id, ...res.data()}))
    }, [id]);

    return (
        <div className='grid font-light pt-16'>
            <Items {...items}/>
        </div>
    );
};

export default ItemDetail;