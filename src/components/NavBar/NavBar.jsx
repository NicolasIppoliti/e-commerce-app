import './NavBar.css';
import logoElsie from '../../img/logoElsie.png';
import CartWidget from '../CartWidget/CartWidget';

export default function NavBar() {
    return (
        <header className='rows-2'>
            <nav className='columns-auto bg-slate-100 pb-2'>
                <div>
                    <h1 className='text-sm'>¡ENVIO GRATIS EN COMPRAS SUPERIORES A $9900!</h1>
                </div>
            </nav>
            <nav className='flex flex-row pt-4 items-center'>
                <div className='shrink basis-1/4'>
                    <img className='aspect-auto pl-10' src={logoElsie} alt="Logo Elsie"/>
                </div>
                <div className='flex-auto grow shrink basis-1/2'>
                    <ul className='columns-5'>
                        <li>
                            <a href='../index.js'>INICIO</a>
                        </li>
                        <li>
                            <a href='../index.js'>PRODUCTOS</a>
                        </li>
                        <li>
                            <a href='../index.js'>HOMBRES</a>
                        </li>
                        <li>
                            <a href='../index.js'>MUJERES</a>
                        </li>
                        <li>
                            <a href='../index.js'>CONTACTO</a>
                        </li>
                    </ul>
                </div>
                <div className='container shrink basis-1/4'>
                    <CartWidget/>
                </div>
            </nav>
        </header>
    )
}