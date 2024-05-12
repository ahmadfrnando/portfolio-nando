'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import NavbarWrapper from './navbar';

export default function Layout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <>
      <NavbarWrapper />
      <main className="flex flex-col items-center justify-between text-white select-none">{children}</main>
    </>
  );
}
