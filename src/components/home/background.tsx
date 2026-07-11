
import Image from "next/image"
import { MainIntro } from "./main-intro"
import { Navbar } from "./navbar"


export const Background = () => {
    return (
        <div className="relative h-screen w-screen no-scrollbar">

            <Image
                src="/images/image2.png"
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