import logo from '../assets/images/logo.svg'
import { NavBar } from './NavBar'

export const Header = () => {

    return (
        <header className={`flex place-content-between place-items-center`}>
            <img src={logo} alt="" />
            <NavBar />
        </header>
    )
}