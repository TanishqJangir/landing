"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { NavActionButton } from "./navActionButton"
import { NavItems } from "./constant"


export const Navbar = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: -14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 1,
                    delay: 0.7,
                    ease: [0.16, 1, 0.3, 1], // expo-out, no bounce
                }}
                className="flex w-full justify-between px-4 md:px-8 py-6 text-white border-b md:border-none border-gray-500"
            >

                <div className="text-xl tracking-wide md:hidden font-bold">
                    Escanor
                </div>

                <div className="hidden md:block">
                    <div className="flex flex-col text-gray-200">
                        {NavItems.map((item) => (
                            <Link href={""} key={item.title} className="hover:font-semibold hover:text-white">
                                {item.title}
                            </Link>
                        )
                        )}
                    </div>
                </div>

                <div className="text-xl font-bold tracking-wide hidden md:block">
                    Escanor
                    {/* <span className="font-bold">•</span> */}
                </div>

                <NavActionButton />

            </motion.div>
        </>
    )
}