import Image from "next/image";
import {Menu} from "@headlessui/react";

const links = [
    {href: '#', label: 'Konto'},
    {href: '#', label: 'Wyloguj'},

]


export default function Header() {
    return (
        <header className="bg-primary-background">
            <nav className="flex items-center justify-between flex-wrap container mx-auto pt-[13px] pb-[12px] ">
                <div>
                    <Image src="/images/logo.png" height="55" width="89" alt="Megalogo"/>
                </div>
                <div>
                    <Menu>
                        <Menu.Button>Options</Menu.Button>
                        <Menu.Items>
                            {links.map((link) => (
                                <Menu.Item
                                    as="a"
                                    key={link.href}
                                    href={link.href}
                                    className="ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black"
                                >
                                    {link.label}
                                </Menu.Item>
                            ))}
                        </Menu.Items>
                    </Menu>
                </div>

                {/*<div className="dropdown">*/}
                {/*    <button onClick={dropdownToggle} className="dropbtn">Jan Testowy</button>*/}
                {/*    <div id="user_dropdown" className="dropdown-content">*/}
                {/*        <a href="#">Konto</a>*/}
                {/*        <a href="#">Wyloguj</a>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </nav>
        </header>
    )
}