import {useState} from 'react';
import logo from '../assets/images/het-logo-538.webp';

function Navbar(){
  const [open, setOpen] = useState(false);

  const navItems = [
    {name: "Home",   href: "#home"},
    {name: "Courses", href: "#courses"},
    {name: "Concept", href: "#concept"},
    {name: "Experts", href: "#experts"},
    {name: "Network", href: "#network"},
    {name: "Contact", href: "#contact"},
    {name: "About",   href: "#about"}
  ];

  return (
    <nav className="fixed top-0 w-full inset-shadow-white-500 border-b-3 border-yellow-300 shadow-xl/10 bg-black z-50 mb-20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <img src={logo} alt="HHET.BE" className="h-18 my-1 border border-white" />
        </div>
        <ul className="md:flex space-x-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-white hover:text-yellow-500 transition duration-300">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;