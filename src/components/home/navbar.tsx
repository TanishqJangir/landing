import { Button } from "../ui/button"


export const Navbar = () => {
    return (
        <>
            <div className="flex flex-row w-full justify-between px-20 py-4">
                <div>Hii </div>
                <div>
                    Hii
                </div>
                <Button
                    variant="default"
                    className="rounded-[6px] cursor-pointer bg-white font-bold text-black hover:bg-white/70 text-lg px-4 py-4"
                >
                    Click Me
                </Button>
            </div>
        </>
    )
}