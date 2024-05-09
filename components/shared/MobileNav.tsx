"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { navLinks } from "@/constants"
  
import React from 'react'
import { usePathname } from "next/navigation"
import { Button } from "../ui/button"

const MobileNav = () => {
    const pathname = usePathname()

  return (
    <header className="header">
        <Link href='/' className="flex items-center gap-2 md:py-2">
            <Image
                src="/assets/images/logo-text.svg"
                alt="logo"
                width={180}
                height={28}
            />
        </Link>

        <nav className="flex gap-2">
            <SignedIn>
                <UserButton afterSignOutUrl="/" />

                <Sheet>
                    {/* trigger allows sheet to show */}
                    <SheetTrigger>
                        <Image
                            src="/assets/icons/menu.svg"
                            alt="menu"
                            width={32}
                            height={32}
                            className="cursor-pointer"
                        />
                    </SheetTrigger>
                    {/* content of the sheet */}
                    <SheetContent className="sheet-content sm:w-64">
                        <>
                            <Image
                                src="/assets/images/logo-text.svg"
                                alt="logo"
                                width={152}
                                height={23}
                            />
                            <ul className="header-nav_elements">
                                {/* Map through the links in the constants/index.ts file. Pass that to the function below */}
                                {navLinks.map((link) => {
                                    const isActive = link.route === pathname   
                                    return(
                                        // highlight the active page in purple, otherwise white
                                        <li 
                                            className={`${isActive && 'gradient-text'} p-18 flex whitespace-nowrap text-dark-700`}
                                            key={link.route} 
                                        >
                                            {/* create link to route in sidebar */}
                                            <Link className="sidebar-link cursor-pointer" href={link.route}>
                                                {/* store image information here. Example,  homepage is a home diagram highlighted when purple */}
                                                <Image
                                                    src={link.icon}
                                                    alt="logo"
                                                    width={24}
                                                    height={24}
                                                />
                                                {/* display the name of the link */}
                                                {link.label}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>

                            <ul className="header-nav_elements">
                                {/* show user button when in sheet */}
                                <li className="flex-center cursor-pointer gap-2 p-4">
                                    <UserButton afterSignOutUrl='/' showName/>
                                </li>
                            </ul>
                        </>
                    </SheetContent>
                </Sheet>
                
            </SignedIn>

            <SignedOut>
                    {/* render button as a link via asChild */}
                    <Button asChild className="button bg-purple-gradient bg-cover">
                        <Link href="/sign-in">Login</Link>
                    </Button>
            </SignedOut>
        </nav>
    </header>
  )
}

export default MobileNav
