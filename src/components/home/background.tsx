
import Image from "next/image"
import { MainIntro } from "./main-intro"
import { Navbar } from "./navbar"


export const Background = () => {
    return (
        <div className="relative h-screen w-screen overflow-hidden no-scrollbar text-white">

            <Image
                src="/images/image.png"
                alt=""
                fill
                className="object-fill"
                priority
            />

            <div className="absolute inset-0">
                <Navbar />
                <MainIntro />
            </div>
        </div>
    )
}