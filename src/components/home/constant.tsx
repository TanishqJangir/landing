import React from "react";

export interface NavItems {
    title: string,
    href: string
}

export const NavItems: NavItems[] = [
    { title: "Home", href: "" },
    { title: "Features", href: "" },
    { title: "Contact", href: "" },
]

export interface MenuDropdownProps {
    children: React.ReactElement;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}