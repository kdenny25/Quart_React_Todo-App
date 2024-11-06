import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { NavLink } from 'react-router-dom'

function Navigation() {
    const active_on = "bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700"
    const active_off = "border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
  return (
    <Navbar fluid>
      <NavbarBrand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse id="navbar">
          <li>
            <NavLink to="/"   className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? active_on : active_off
                  }>
                Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about"   className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? active_on : active_off
                              }>
                About
            </NavLink>
          </li>

        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

export default Navigation;