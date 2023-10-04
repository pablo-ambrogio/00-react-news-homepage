import menuHamburgesa from '../assets/images/icon-menu.svg'
import closeMenuHamburguesa from '../assets/images/icon-menu-close.svg'
import { useContext } from 'react'
import { counterContext } from './context/CounterContext'

export const NavBar = () => {

    const {handleClick, menuVisible} = useContext(counterContext)

    return (
        <>
            <nav className={`${menuVisible ? `bg-white z-10 w-[60%] min-h-screen absolute top-0 right-0 flex px-6` : ""}`}>
                <ul className={`gap-2 ${menuVisible ? 'mt-32 flex flex-col gap-6 font-semibold' : 'hidden'} sm:flex`}>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">New</a>
                    </li>
                    <li>
                        <a href="#">Popular</a>
                    </li>
                    <li>
                        <a href="#">Trending</a>
                    </li>
                    <li>
                        <a href="#">Categories</a>
                    </li>
                </ul>
                <img src={!menuVisible ? menuHamburgesa : closeMenuHamburguesa} alt=""
                    className={`cursor-pointer w-12 h-6 sm:hidden ${!menuVisible ? "" : "w-8 h-8  absolute top-0 right-0 mt-4 mr-4"}`}
                    onClick={handleClick}
                />
            </nav>
        </>
    )
}