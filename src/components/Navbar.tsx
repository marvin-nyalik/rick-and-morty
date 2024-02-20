'use client';
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-emerald-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link className={clsx("px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75",
              {"text-orange-500 bg-pink-200 rounded-full": pathname === '/'})}
              href="/"
            >
              Rick & Morty
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  className={clsx("px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75",
                  {'text-orange-500 bg-pink-200 rounded-full': pathname === '/locations'})}
                  href="/locations"
                >
                  <i className="fa fa-globe text-lg leading-lg text-white hover:text-gray-700 opacity-75"></i><span className="ml-2">Locations</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}