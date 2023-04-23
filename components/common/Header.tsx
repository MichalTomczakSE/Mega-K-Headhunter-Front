import Image from "next/image";
import {Menu} from "@headlessui/react";
import Link from "next/link"

const links = [
    {href: '#', label: 'Konto'},
    {href: '#', label: 'Wyloguj'},

]


export default function Header() {
    return (
        <header className="bg-navbar-background">
            <nav className="flex items-center justify-between flex-wrap container mx-auto pt-[13px] pb-[12px]">
                <div>
                    <Image src="/images/logo.png" height="55" width="89" alt="Megalogo"/>
                </div>
                <div className="text-light-primary-text relative px-[15px] text-[18px]">
                    <Menu>
                        <Menu.Button as="button" className="flex items-center justify-between">
                            <Image src="/images/user_image.png" alt="userImage" width="45" height="45" className="mr-3" />
                            Jan Testowy
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#9E9E9E"
                                 className="bi bi-caret-down-fill ml-[30px]" viewBox="0 0 16 16">
                                <path
                                    d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        </Menu.Button>
                        <Menu.Items as="div" className="absolute left-0 z-10 mt-2 flex flex-col w-full px-[15px] bg-navbar-background leading-[30px]">
                            {links.map((link) => (
                                <Link href={link.href} key={link.href} className="py-2.5">{link.label}</Link>
                            ))}
                        </Menu.Items>
                    </Menu>
                </div>
            </nav>
        </header>
    )
}