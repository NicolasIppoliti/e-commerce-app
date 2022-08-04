import { fromJSON } from 'postcss';
import React, {useState} from 'react';
import Products from './Products/Products';
import Imagen1 from '../../img/1.png';
import Imagen2 from '../../img/2.png';
import Imagen3 from '../../img/3.png';
import Imagen4 from '../../img/4.png';
import Imagen5 from '../../img/5.png';

const ProductsList = () => {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'Americano Combinado',
            role: 'Tejidos',
            img: Imagen1,
            price: '$5.000',
            discount: '$4.000',
        },
        {
            id: 2,
            name: 'Capa Telar',
            role: 'Tejidos',
            img: Imagen2,
            price: '$6.000',
            discount: '$4.800',
        },
        {
            id: 3,
            name: 'Remera Classic Rock',
            role: 'Remeras',
            img: Imagen3,
            price: '$7.000',
            discount: '$5.600',
        },
        {
            id: 4,
            name: 'Ruana Corta Telar',
            role: 'Tejidos',
            img: Imagen4,
            price: '$8.000',
            discount: '$6.400',
        },
        {
            id: 5,
            name: 'Sueter Viscosa Rayado',
            role: 'Tejidos',
            img: Imagen5,
            price: '$9.000',
            discount: '$7.200',
        },
    ]);

    return (
        <div className=''>
            {products.map((product) => {
                return (
                <Products 
                key={product.id}
                name={product.name} 
                img={product.img} 
                role={product.role}
                price={product.price}
                discount={product.discount}/>
                );
            })}
        </div>
    );
};

export default ProductsList;