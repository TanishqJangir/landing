"use client"

import { Button } from "../ui/button"
import { ArrowRightIcon, Menu, X } from "lucide-react"
import { useState } from "react"
import { motion } from "motion/react"
import { MenuDropdown } from "./menuDropdown"


export const NavActionButton = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className="hidden md:block">
                <Button
                    variant="default"
                    className="rounded-sm cursor-pointer bg-white text-black hover:bg-white/70 text-sm gap-2 py-4 pl-3 pr-0.5 flex flex-row"
                >
                    Get in touch
                    <span className="bg-black text-white p-1.5 rounded-sm">
                        <ArrowRightIcon />
                    </span>
                </Button>
            </div>

            <MenuDropdown open={isOpen} onOpenChange={setIsOpen}>
                <Button 
                    variant="ghost" 
                    className="relative flex md:hidden items-center justify-center cursor-pointer text-white hover:text-white/80 w-9 h-9 p-0 hover:bg-transparent hover:text-white aria-expanded:bg-transparent aria-expanded:text-white focus:bg-transparent active:bg-transparent focus-visible:ring-0 focus-visible:border-transparent"
                >
                    <motion.div
                        animate={!isOpen ? { rotate: 0, opacity: 1, scale: 1 } : { rotate: 90, opacity: 0, scale: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute"
                    >
                        <Menu className="size-5" />
                    </motion.div>
                    <motion.div
                        initial={{ rotate: -90, opacity: 0, scale: 0 }}
                        animate={isOpen ? { rotate: 0, opacity: 1, scale: 1 } : { rotate: -90, opacity: 0, scale: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute"
                    >
                        <X className="size-5" />
                    </motion.div>
                </Button>
            </MenuDropdown>
        </>
    )
}