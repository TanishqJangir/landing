import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuGroup,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { NavItems } from "./constant"

interface MenuDropdownProps {
    children: React.ReactElement;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}


export const MenuDropdown = ({ children, open, onOpenChange }: MenuDropdownProps) => {
    return (
        <DropdownMenu open={open} onOpenChange={onOpenChange}>
            <DropdownMenuTrigger render={children} />
            <DropdownMenuContent className="w-48 bg-black/90 border border-white/10 text-white backdrop-blur-md" align="end">
                <DropdownMenuGroup>
                    <DropdownMenuLabel className="text-gray-400">Navigation</DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-white/10" />
                    {NavItems.map((item) => (
                        <DropdownMenuItem key={item.title} render={<Link href={item.href} />} className="focus:bg-white/10 focus:text-white cursor-pointer">
                            {item.title}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}