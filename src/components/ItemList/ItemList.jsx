import Items from './Items/Items'

const ItemList = ({items}) => {
    return (
        <div className='sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
            {items.map((item) => {
                return (
                <Items
                id={item.id}
                name={item.name} 
                img={item.img} 
                category={item.category}
                price={item.price}
                discount={item.discount}
                stock={item.stock}/>
                )
            })}
        </div>
    );
};

export default ItemList;