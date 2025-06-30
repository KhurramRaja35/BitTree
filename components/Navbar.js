"use client"
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from "next/navigation";


const Navbar = () => {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname()
  const showNavbar = ["/", "/generate", "/pricing"].includes(pathname)

  const [show, setShow] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === 'undefined') return;
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        // Scrolling down
        setShow(false);
      } else {
        // Scrolling up
        setShow(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {showNavbar && <nav
        className={`bg-white w-[90vw] flex items-center justify-between fixed top-5 right-[5vw]   md:right-[5vw]  rounded-full py-3 px-7 z-50 transition-transform duration-500 ${show ? 'translate-y-0' : '-translate-y-[200%]'
          }`}
      >
       

        < div className="logo flex items-center gap-15">
        
          <Link href="/">
            <img src="/logo.svg" alt="logo" width={120} />
          </Link>
         
          

          <ul className=' hidden  md:flex pt-1 gap-6 '>
            <Link href={"/"}><li className='text-[#1e2330]'>Home</li></Link>
            <Link href={"/pricing"}><li className='text-[#1e2330]'>Pricing</li></Link>
            <Link href={"/generate"}><li className='text-[#1e2330]'>Generate</li></Link>
          </ul>

        </div>
        <div className="buttons hidden md:flex items-center gap-4">
          <Link target='_blank' href={"https://auth.linktr.ee/login"}><button className='login bg-[#eff0ec] py-2 px-3 rounded-lg font-bold cursor-pointer'>Log in</button></Link>
          <Link target='_blank' href={"https://auth.linktr.ee/login"}><button className='signup bg-[#1e2330] py-2 px-3 rounded-full text-white cursor-pointer'>Sign up</button></Link>
        </div>

         <button className='md:hidden' aria-label="Open menu"  onClick={() => setMobileMenuOpen((open) => !open)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#ffffff" fill="none">
              <defs />
              <path fill="#141B34" d="M3.25,5 C3.25,4.586 3.586,4.25 4,4.25 L20,4.25 C20.414,4.25 20.75,4.586 20.75,5 C20.75,5.414 20.414,5.75 20,5.75 L4,5.75 C3.586,5.75 3.25,5.414 3.25,5 Z M3.25,12 C3.25,11.586 3.586,11.25 4,11.25 L20,11.25 C20.414,11.25 20.75,11.586 20.75,12 C20.75,12.414 20.414,12.75 20,12.75 L4,12.75 C3.586,12.75 3.25,12.414 3.25,12 Z M4,18.25 L20,18.25 C20.414,18.25 20.75,18.586 20.75,19 C20.75,19.414 20.414,19.75 20,19.75 L4,19.75 C3.586,19.75 3.25,19.414 3.25,19 C3.25,18.586 3.586,18.25 4,18.25 Z" />
            </svg>
          </button>

        {/*Mobile menu*/}
        {mobileMenuOpen && (
        <ul className="absolute top-20 right-0 w-[50%] bg-white shadow-lg flex flex-col items-center gap-4 py-6 sm:hidden z-50 rounded-2xl">
          <Link href={"/"} onClick={() => setMobileMenuOpen(false)}>
            <li className='text-[#1e2330] block py-2'>Home</li>
          </Link>
          <Link href={"/pricing"} onClick={() => setMobileMenuOpen(false)}>
            <li className='text-[#1e2330] block py-2'>Pricing</li>
          </Link>
          <Link href={"/generate"} onClick={() => setMobileMenuOpen(false)}>
            <li className='text-[#1e2330] block py-2'>Generate</li>
          </Link>
          <Link target='_blank' href={"https://auth.linktr.ee/login"}>
            <button className='login bg-[#eff0ec] py-2 px-3 rounded-lg font-bold cursor-pointer w-full mt-2'>Log in</button>
          </Link>
          <Link target='_blank' href={"https://auth.linktr.ee/login"}>
            <button className='signup bg-[#1e2330] py-2 px-3 rounded-full text-white cursor-pointer w-full'>Sign up</button>
          </Link>
        </ul>
      )}
      </nav >}
    </>
  );
};

export default Navbar;

