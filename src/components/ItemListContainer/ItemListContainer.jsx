import './ItemListContainer.css';


const ItemListContainer = (props) => {
return (
    <div>
        <h1 className='pt-10 text-2xl font-light text-center align-middle'>{props.greeting}</h1>
    </div>
)}

export default ItemListContainer