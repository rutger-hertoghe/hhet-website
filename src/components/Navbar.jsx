import { useState } from 'react';
import { Burger, Drawer, Stack } from '@mantine/core';
import logo from '../assets/images/het-logo-538.webp';
import { ScrollToElement } from '../utilities';

function NavLink({ item, onSelect, className }) {
  return (
    <a
      href={`#${item.id}`}
      onClick={(event) => { 
        event.preventDefault(); 
        onSelect(item.id); 
      }}
      className={`transition duration-300 cursor-pointer ${className}`}
    >
      {item.name}
    </a>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home",    id: "home" },
    { name: "Courses", id: "courses" },
    { name: "Concept", id: "concept" },
    { name: "Experts", id: "experts" },
    { name: "Network", id: "network" },
    { name: "Contact", id: "contact" },
    { name: "About",   id: "about" },
    { name: "Reviews", id: "reviews" }
  ];

  const handleNavClick = (sectionId) => {
    setOpen(false);
    ScrollToElement(sectionId);
  };

  return (
    <nav className="fixed top-0 w-full border-b-3 border-yellow-300 shadow-xl/10 bg-black z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <div>
          <img src={logo} alt="HHET.BE" className="h-18 my-1 border border-white" />
        </div>

        {/* Desktop link bar (md and up) */}
        <ul className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <NavLink item={item} onSelect={handleNavClick} className="text-white hover:text-yellow-500" />
            </li>
          ))}
        </ul>

        {/* Mobile burger (below md) */}
        <Burger
          opened={open}
          onClick={() => setOpen((isOpen) => !isOpen)}
          color="white"
          className="md:hidden"
          aria-label="Toggle navigation"
        />
      </div>

      <Drawer
        opened={open}
        onClose={() => setOpen(false)}
        position="right"
        size="70%"
        title={null}
        zIndex={1000}
      >
        <Stack>
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              item={item}
              onSelect={handleNavClick}
              className="text-black hover:text-yellow-600 text-lg"
            />
          ))}
        </Stack>
      </Drawer>
    </nav>
  );
}

export default Navbar;
