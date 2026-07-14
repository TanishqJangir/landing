
import Image from "next/image"
import { MainIntro } from "./main-intro"


export const Background = () => {
    return (
        <>
            <div className="relative flex-1 flex flex-col text-white">
                <div className="fixed inset-0 -z-10 w-screen h-screen overflow-hidden">
                    <Image
                        src="/images/image.png"
                        alt=""
                        fill
                        className="object-fill"
                        priority
                    />
                </div>

                <MainIntro />
            </div>
        </>
    )
}