
import { Button } from "../ui/button"
import { ArrowRightIcon } from "lucide-react"

export const NavActionButton = () => {
    return (
        <Button
            variant="default"
            className="rounded-full cursor-pointer bg-white font-bold text-black hover:bg-white/70 text-lg pr-1 py-4"
        >
            Click Me
            <div className="bg-black text-white p-1 rounded-full">
                <ArrowRightIcon />
            </div>
        </Button>
    )
}