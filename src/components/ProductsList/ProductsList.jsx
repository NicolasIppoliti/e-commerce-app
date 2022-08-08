import React, {useState, useEffect} from 'react';
import Products from './Products/Products';
import ProductData from '../../data/data';

const getProducts = () => {

    return new Promise((resolve) => {
        setTimeout(() => resolve(ProductData), 2000);
    })
}

const ProductsList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then((resp) => {
            setProducts(resp);
        })
    }, [])

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