'use client';
import Link from 'next/link';
import Image from 'next/image';
import logo from "../logo.png";
import '../styles/NavBar.scss';
import { usePathname } from 'next/navigation';

const NavBar = () => {
    const pathname = usePathname();
  return (
    <nav className="navbar-container">
        <Link href="/">
            <Image 
                src={logo}
                alt='logo'
            />
        </Link>
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
    </nav>
  )
}

export default NavBar
