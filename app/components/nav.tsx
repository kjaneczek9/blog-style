"use client"
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const navlinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Works", dropdown: ["Film", "Music", "Production"] },
  { title: "Contact", href: "/contact" },
];

export function Navbar() {

    return (
        <div className="position-sticky top-0 flex fixed z-50 w-full h-[70px] no-underline nav-bar-color">
            <div className="flex">
                <ul className="flex">
                    {navlinks.map((link) => (
                        <motion.li key={link.title} 
                            className="flex items-center justify-center px-2"
                            whileHover={{ color: '#708599', transition: { duration: .3 }}}>
                            {link.dropdown ? (
                                <span>{link.title}</span>

                            ) : (
                                <Link className="transition-all items-center justify-center hover:text-neutral-800 dark:hover:text-neutral-200 m-auto text-lg font-italic" href={link.href}>{link.title}</Link>
                            )}
                            {link.dropdown && (
                                <div className="dropdown-content bg-white shadow-lg left-0 right-0">
                                    {link.dropdown.map((item) => (
                                        <motion.div whileHover={{ transition: { duration: .3 } }} className="block text-sm" key={item}>
                                            <Link href={`/work/${item.toLowerCase()}`}>{item}</Link>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </motion.li>
                    ))}
                </ul>
            </div>
        </div>
    );
};