'use client';
import '../styles/NavMobile.scss'
import '../styles/NavBar.scss'
import logo from "@/logo.png";
import { usePathname } from 'next/navigation';
import { useState } from 'react'; 
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import Link from 'next/link';
import Image from 'next/image';

const NavMobile = () => {
    const [toggleMenu, setToggleMenu] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const pathname = usePathname();
  return (
    <nav className={`nav-mobile__container ${isOpen ? 'open' : ''}`}>
        <Link href='/'><Image src={logo} alt="logo" /></Link>
        {toggleMenu && (
        <div className="navbar__links-container">
            <Link href="/" className={pathname === '/' ? 'active' : ''}>
            Home
            </Link>
            <Link href="/services" className={pathname === '/services' ? 'active' : ''}>
            Services
            </Link>
            <Link href="/careers" className={pathname === '/careers' ? 'active' : ''}>
            Careers
            </Link>
            <Link href="/about-us" className={pathname === '/about-us' ? 'active' : ''}>
            About Us
            </Link>
        </div>
        )}
        <div className="nav__menu">
            {
                toggleMenu ? <RiCloseLine color= "#282828" size={27} onClick={() => setToggleMenu(false)}/> 
                :<RiMenu3Line color= "#282828" size={27} onClick={() => {setToggleMenu(true); setIsOpen(true);}}/> 
            }
        </div>
    </nav>
  )
}

export default NavMobile
