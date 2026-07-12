"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import Link from "next/link"
import { Button } from "../ui/button"

export const MainIntro = () => {
    const [isAccepted, setIsAccepted] = useState(false)

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: -14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 1,
                    delay: 1,
                    ease: [0.16, 1, 0.3, 1],
                }}
                className="flex-1 flex flex-col justify-center items-center px-6 text-center mb-50"
            >

                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white max-w-3xl leading-tight">
                    Design & Develop
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-300 font-light max-w-xl">
                    Building refined digital products and interactive web experiences.
                </p>
            </motion.div>

            <AnimatePresence>
                {!isAccepted && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] } }}
                        exit={{ opacity: 0, y: 30, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
                        className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-lg bg-black/85 border border-white/10 px-3 py-1 flex flex-col sm:flex-row items-center gap-3 text-xs md:text-sm text-gray-300 backdrop-blur-md w-[90%] sm:w-auto max-w-lg sm:max-w-none shadow-2xl"
                    >
                        <span>
                            By using tanishqjangir.in, you accept our{" "}
                            <Link href="" className="underline underline-offset-4 text-white hover:text-white/80 transition-colors">
                                cookie policy
                            </Link>
                        </span>
                        <Button
                            size="sm"
                            className="bg-white text-black rounded-full hover:bg-white/90 cursor-pointer px-3 py-1 h-auto text-xs"
                            onClick={() => setIsAccepted(true)}
                        >
                            Accept
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}