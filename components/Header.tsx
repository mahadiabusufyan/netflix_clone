import Link from 'next/link';
import { useState, useEffect } from 'react';
import { BiBell, BiSearch } from 'react-icons/bi';
import useAuth from '../hooks/useAuth';

function Header() {
  const { logout } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header
      className={`${
        isScrolled
          ? 'bg-[#141414]'
          : 'bg-gradient-to-b from-gray-900 to-transparent'
      }`}
    >
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        <ul className="hidden space-x-4 md:flex">
          <li className="menuLink">Home</li>
          <li className="menuLink">TV Shows</li>
          <li className="menuLink">Movies</li>
          <li className="menuLink">Latest</li>
          <li className="menuLink">My List</li>
          <li className="menuLink">Browse by Languages</li>
        </ul>
      </div>
      <div className="flex items-center space-x-6 text-2xl font-medium">
        <BiSearch className="hidden sm:inline" />
        {/* <p className="hidden lg:inline">Kids</p> */}
        <BiBell />
        {/* <Link href="/account"> */}
        <img
          src="https://rb.gy/g1pwyx"
          alt=""
          className="cursor-pointer rounded"
          onClick={logout}
        />
        {/* </Link> */}
      </div>
    </header>
  );
}

export default Header;
