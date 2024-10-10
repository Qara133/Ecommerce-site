import { NavLink } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Context } from '../context';
import { ShoppingCartIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const activeStyle = "underline underline-offset-4";

export const NavBar = () => {
    const context = useContext(Context);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light fondo bg-white'>
            <div className='flex justify-between w-full'>

                {/* Hamburger Icon for Mobile (moved to the left) */}
                <div className='sm:hidden flex items-center'>
                    <button onClick={toggleMenu}>
                        {isMenuOpen ? (
                            <XMarkIcon className='h-6 w-6 text-black' />
                        ) : (
                            <Bars3Icon className='h-6 w-6 text-black' />
                        )}
                    </button>
                </div>

                {/* Brand/Logo */}
                <div className='flex items-center gap-3 justify-center w-full sm:justify-start'>
                    <li className='list-none font-semibold text-lg'>
                        <NavLink to='/' onClick={() => context.setSearchByCategory()}>Blackshop</NavLink>
                    </li>
                </div>

                {/* Full Menu for Desktop and Conditional Menu for Mobile */}
                <ul className={`sm:flex ${isMenuOpen ? 'block' : 'hidden'} sm:items-center sm:gap-3 flex-col sm:flex-row sm:justify-center sm:relative top-16 sm:top-0  w-full sm:w-auto sm:mx-5 bg-white absolute sm:bg-transparent py-4 sm:py-0`}>
                    <li>
                        <NavLink
                            to='/'
                            onClick={() => { context.setSearchByCategory(); setIsMenuOpen(false); }}
                            className={({ isActive }) => isActive ? activeStyle : undefined}
                        >
                            All
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/laptops'
                            onClick={() => { context.setSearchByCategory('laptops'); setIsMenuOpen(false); }}
                            className={({ isActive }) => isActive ? activeStyle : undefined}
                        >
                            Laptops
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/tablets'
                            onClick={() => { context.setSearchByCategory('tablets'); setIsMenuOpen(false); }}
                            className={({ isActive }) => isActive ? activeStyle : undefined}
                        >
                            Tablets
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/cameras'
                            onClick={() => { context.setSearchByCategory('cameras'); setIsMenuOpen(false); }}
                            className={({ isActive }) => isActive ? activeStyle : undefined}
                        >
                            Cameras
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/headphones'
                            onClick={() => { context.setSearchByCategory('headphones'); setIsMenuOpen(false); }}
                            className={({ isActive }) => isActive ? activeStyle : undefined}
                        >
                            Headphones
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/cellphones'
                            onClick={() => { context.setSearchByCategory('cellphones'); setIsMenuOpen(false); }}
                            className={({ isActive }) => isActive ? activeStyle : undefined}
                        >
                            Cellphones
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/accessories'
                            onClick={() => { context.setSearchByCategory('accessories'); setIsMenuOpen(false); }}
                            className={({ isActive }) => isActive ? activeStyle : undefined}
                        >
                            Accessories 
                        </NavLink>
                    </li>
                </ul>

                {/* Cart Icon */}
                <ul className='flex items-center gap-3'>
                    <li>
                        <NavLink to='/my-orders' className={({ isActive }) => isActive ? activeStyle : undefined}>Orders</NavLink>
                    </li>
                    <li className='flex'>
                        <NavLink to='/cart-shopping' className={({ isActive }) => isActive ? activeStyle : undefined}>
                            <ShoppingCartIcon className='h-5 w-5 text-black'></ShoppingCartIcon>
                        </NavLink>
                        {
                            context.productsCount === 0 ?
                                <div className='flex justify-center items-center text-xs font-semibold'>{context.productsCount}</div>
                                :
                                <div className='flex justify-center items-center bg-green-100 w-5 h-5 rounded-full text-xs font-semibold'>{context.productsCount}</div>
                        }
                    </li>
                </ul>
            </div>
        </nav>
    );
};
