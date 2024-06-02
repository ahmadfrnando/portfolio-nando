import { React } from 'react';
import Link from 'next/link';
import { HiBars2, HiOutlineXMark } from 'react-icons/hi2';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function NavbarWrapper() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  };
  return (
    <nav className="w-full sticky top-0 backdrop-filter border border-orange md:border-none backdrop-blur-lg z-50">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto md:py-4 px-4 py-2 md:px-20">
        <div>
          <Link href={'/'} className="flex items-center justify-center text-white text-3xl font-black rtl:space-x-reverse">
            Nando<span className="text-5xl font-black text-orange">.</span>
          </Link>
        </div>
        <div className="hidden md:flex w-full md:w-auto">
          <ul className="flex flex-col p-4 mt-4 font-medium border rounded-lg border-orange md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="block px-3 py-2 text-white rounded md:hover:bg-transparent md:border-0 md:hover:text-orange md:p-0">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <motion.button initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }} onClick={handleToggle} type="button" className="inline-flex items-center justify-center w-10 h-10 p-2 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-orange">
          {!open ? <HiBars2 className="w-5 h-5 text-sm text-white" /> : <HiOutlineXMark className="w-5 h-5 text-sm text-white" />}
        </motion.button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }} className="flex flex-col absolute -z-50 top-0 left-0 border border-orange bg-hitam w-full md:w-auto transition-all ease-in duration-1000">
            <ul className="flex flex-col px-2 py-6 mt-16 space-y-6">
              {navigation.map((item) => (
                <motion.li initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1 + item.name / 10,
                }} key={item.name}>
                  <Link href={item.href} className="block px-3 py-2 text-white rounded md:hover:bg-transparent md:border-0 md:hover:text-orange md:p-0">
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
