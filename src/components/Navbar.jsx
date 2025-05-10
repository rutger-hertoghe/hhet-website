import {useState} from 'react';

function Navbar(){
  const [open, setOpen] = useState(false);

  const navItems = [
    {name: "Intro",   href: "#intro"},
    {name: "Courses", href: "#courses"},
    {name: "Concept", href: "#concept"},
    {name: "Experts", href: "#experts"},
    {name: "Network", href: "#network"},
    {name: "Contact", href: "#contact"},
    {name: "About",   href: "#about"}
  ];

  return (
    <nav className="fixed top-0 w-full inset-shadow-white-500 shadow-xl/10 bg-black z-50 mb-20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <img src="/het-logo-538.webp" alt="HHET.BE" className="h-20" />
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