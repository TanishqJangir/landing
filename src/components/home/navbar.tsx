import { ArrowRightIcon } from "lucide-react"
import { Button } from "../ui/button"


export const Navbar = () => {
    return (
        <>
            <div className="flex flex-row w-full justify-between px-20 py-4 text-white">
                <div>Hii </div>
                <div>
                    Hii
                </div>
                <Button
                    variant="default"
                    className="rounded-full cursor-pointer bg-white font-bold text-black hover:bg-white/70 text-lg pr-1 py-4"
                >
                    Click Me
                    <div className="bg-black text-white p-1 rounded-full">
                        <ArrowRightIcon />
                    </div>
                </Button>
            </div>
        </>
    )
}