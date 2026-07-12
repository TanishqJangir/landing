"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { NavActionButton } from "./navActionButton"

interface NavItems {
    title: string,
    href: string
}

const NavItems: NavItems[] = [
    { title: "Home", href: "/" },
    { title: "Features", href: "/feature" },
    { title: "Contact", href: "/contact" },
]


export const Navbar = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: -14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.65,
                    delay: 0.5,
                    ease: [0.16, 1, 0.3, 1], // expo-out, no bounce
                }}
                className="flex w-full justify-between px-8 py-6 text-white"
            >

                <div className="flex flex-col text-gray-200">
                    {NavItems.map((item) => (
                        <Link href={""} key={item.title} className="hover:font-semibold hover:text-white">
                            {item.title}
                        </Link>
                    )
                    )}
                </div>
                <div className="text-xl tracking-wide">
                    Tanishq
                    {/* <span className="font-bold">•</span> */}
                </div>
                
                <NavActionButton />
                
            </motion.div>
        </>
    )
}