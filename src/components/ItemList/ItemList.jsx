import Items from './Items/Items'
import {Link} from 'react-router-dom'

const ItemList = ({items}) => {
    return (
        <div className='sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
            {items.map((item) => {
                return (
                <Link to={`/products/${item.id}`}>
                <Items
                id={item.id}
                name={item.name} 
                img={item.img} 
                category={item.category}
                price={item.price}
                discount={item.discount}
                stock={item.stock}/>
                </Link>
                )
            })}
        </div>
    );
};

export default ItemList;