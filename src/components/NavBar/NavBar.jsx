import CartWidget from '../CartWidget/CartWidget';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    let Links = [
        {id:'home', name:'INICIO', link:'/'},
        {id:'products', name:'PRODUCTOS', link:'/products'},
        {id:'tejidos', name:'TEJIDOS', link:'/category/tejidos'},
        {id:'vestidos', name:'VESTIDOS', link:'/category/vestidos'},
        {id:'hombre', name:'HOMBRE', link:'/hombre'},
        {id:'mujer', name:'MUJER', link:'/mujer'},
        {id:'contact', name:'CONTACTO', link:'/contact'},
    ];
    let [open,setOpen] = useState(false);
    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                <div className='cursor-pointer flex items-center'>
                    <Link to='/'>
                        <img className='h-10' src='/img/logoElsie.png' alt="Logo Elsie"/>
                    </Link>
                </div>

                <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close':'menu'}></ion-icon>
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
                    {
                        Links.map((link) =>(
                            <li key={link.id} className='md:ml-8 md:text-center md:mr-4 md:pr-4 md:text-sm text-xl md:my-0 my-7'>
                                <Link to={link.link} className='text-black hover:text-gray-500 duration-500'>{link.name}</Link>
                            </li>
                        ))
                    }
                    <CartWidget/>
                </ul>  
            </div>  
        </div>
    )
}