"use client"

import { navLinks } from '@/constants'
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Button } from '../ui/button'

const Sidebar = () => {
    const pathname = usePathname();

  return (
      <aside className="sidebar">        {/*aside tag means something is used on the side*/}
        <div className="flex size-full flex-col gap-4">
            <Link href="/" className="sidebar-logo">    {/* next link allows you to change links via the routing system. */}
                {/* this brings up the imaginy logo. Take this out later */}
                <Image src="/assets/images/logo-text.svg" alt="logo" width={180} height={28} /> 
            </Link>
            <nav className="sidebar-nav">   {/*  */}
                <SignedIn>  {/* only allow access when user is signed in */}
                    <ul className="sidebar-nav_elements">
                        {/* Map through the links in the constants/index.ts file. Pass that to the function below */}
                        {navLinks.slice(0, 6).map((link) => {
                            const isActive = link.route === pathname   
                            return(
                                // highlight the active page in purple, otherwise white
                                <li key={link.route} className={`sidebar-nav_element group ${
                                    isActive ? 'bg-purple-gradient text-white' : 'text-gray-700' 
                                }`}>
                                    {/* create link to route in sidebar */}
                                    <Link className="sidebar-link" href={link.route}>
                                        {/* store image information here. Example,  homepage is a home diagram highlighted when purple */}
                                        <Image
                                            src={link.icon}
                                            alt="logo"
                                            width={24}
                                            height={24}
                                            className={`${isActive && 'brightness-200'}`}
                                        />
                                        {/* display the name of the link */}
                                        {link.label}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>

                    <ul className="sidebar-nav_elements">
                        {/* Map through the links in the constants/index.ts file. Pass that to the function below */}
                        {navLinks.slice(6).map((link) => {
                            const isActive = link.route === pathname   
                            return(
                                // highlight the active page in purple, otherwise white
                                <li key={link.route} className={`sidebar-nav_element group ${
                                    isActive ? 'bg-purple-gradient text-white' : 'text-gray-700' 
                                }`}>
                                    {/* create link to route in sidebar */}
                                    <Link className="sidebar-link" href={link.route}>
                                        {/* store image information here. Example,  homepage is a home diagram highlighted when purple */}
                                        <Image
                                            src={link.icon}
                                            alt="logo"
                                            width={24}
                                            height={24}
                                            className={`${isActive && 'brightness-200'}`}
                                        />
                                        {/* display the name of the link */}
                                        {link.label}
                                    </Link>
                                </li>
                            )
                        })}
                        <li className="flex-center cursor-pointer gap-2 p-4">
                            <UserButton afterSignOutUrl='/' showName/>
                        </li>
                    </ul>
                </SignedIn>

                <SignedOut>
                    {/* render button as a link via asChild */}
                    <Button asChild className="button bg-purple-gradient bg-cover">
                        <Link href="/sign-in">Login</Link>
                    </Button>
                </SignedOut>
                
            </nav>
        </div>
      </aside>     
  )
}

export default Sidebar
