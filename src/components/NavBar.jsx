import './NavBar.css';
import logoElsie from '../img/logo-elsie.png'

export default function NavBar() {
    return (
        <header className='rows-2'>
            <nav className='columns-auto bg-slate-100 pb-2'>
                <div>
                    <h1 className='text-sm'>¡ENVIO GRATIS EN COMPRAS SUPERIORES A $9900!</h1>
                </div>
            </nav>
            <nav className='flex flex-row pt-4 items-center'>
                <div className='logo-navbar basis-1/4'>
                    <img className='aspect-auto pl-10' src={logoElsie} alt="Logo Elsie"/>
                </div>
                <div className='menu-navbar basis-1/2'>
                    <ul className='columns-3'>
                        <li>
                            <a href='../index.js'>INICIO</a>
                        </li>
                        <li>
                            <a href='../index.js'>PRODUCTOS</a>
                        </li>
                        <li>
                            <a href='../index.js'>CONTACTO</a>
                        </li>
                    </ul>
                </div>
                <div className='container mx-auto basis-1/4'>
                    <div>
                        
                    </div>
                </div>
            </nav>
        </header>
    )
}