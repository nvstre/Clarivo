"use client";

import { Button } from "./button2";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "./navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

function Header1() {
    const navigationItems = [
        {
            title: "Home",
            href: "#home",
            description: "",
        },
        {
            title: "Product",
            description: "Becoming your best self shouldn't feel confusing.",
            items: [
                { title: "Features", href: "#features" },
                { title: "Price", href: "#price" },
                { title: "Reviews", href: "#reviews" },
                { title: "FAQ", href: "#faq" },
            ],
        },
        {
            title: "Company",
            description: "We're creating the future of personal growth through intelligent guidance.",
            items: [
                { title: "About us", href: "#about" },
                { title: "Fundraising", href: "#fundraising" },
                { title: "Investors", href: "#investors" },
                { title: "Contact us", href: "#contact" },
            ],
        },
    ];

    const [isOpen, setOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        let lastScrollY = window.scrollY;
        const handleScroll = () => {
            setIsVisible(window.scrollY < lastScrollY);
            lastScrollY = window.scrollY;
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`w-full z-40 fixed top-0 left-0 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
                {/* Desktop Navbar */}
                <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
                    <NavigationMenu className="flex justify-start items-start">
                        <NavigationMenuList className="flex justify-start gap-4 flex-row">
                            {navigationItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    {item.href ? (
                                        <NavigationMenuLink href={item.href}>
                                            <Button
                                                variant="ghost"
                                                className="border border-zinc-200 dark:border-zinc-700 rounded-lg px-4 py-2 hover:bg-muted transition"
                                            >
                                                {item.title}
                                            </Button>
                                        </NavigationMenuLink>
                                    ) : (
                                        <>
                                            <NavigationMenuTrigger className="border border-zinc-200 dark:border-zinc-700 rounded-lg px-4 py-2 font-medium text-sm hover:bg-muted transition">
                                                {item.title}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent className="!w-[450px] p-4">
                                                <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                                                    <div className="flex flex-col h-full justify-between">
                                                        <div className="flex flex-col">
                                                            <p className="text-base">{item.title}</p>
                                                            <p className="text-muted-foreground text-sm">
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                        <Button size="sm" className="mt-10">
                                                            Try it for free
                                                        </Button>
                                                    </div>
                                                    <div className="flex flex-col text-sm h-full justify-end">
                                                        {item.items?.map((subItem) => (
                                                            <NavigationMenuLink
                                                                href={subItem.href}
                                                                key={subItem.title}
                                                                className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded"
                                                            >
                                                                <span>{subItem.title}</span>
                                                                <MoveRight className="w-4 h-4 text-muted-foreground" />
                                                            </NavigationMenuLink>
                                                        ))}
                                                    </div>
                                                </div>
                                            </NavigationMenuContent>
                                        </>
                                    )}
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Logo */}
                <div className="flex lg:justify-center">
                    <p className="font-bold text-3xl">Clarivo</p>
                </div>

                {/* Buttons */}
                <div className="flex justify-end w-full gap-4">
                    <Button variant="ghost" className="hidden md:inline hover:bg-[#F0F7FA]">Contact Us</Button>
                    <div className="border-r hidden md:inline"></div>
                    <Button variant="outline">Sign in</Button>
                    <Button className="bg-blue-600 text-white shadow-[0_0_15px_#3b82f6] hover:bg-[#15397D]">Get Started</Button>
                </div>

                {/* Mobile Menu */}
                <div className="flex w-12 shrink lg:hidden items-end justify-end">
                    <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </Button>
                    {isOpen && (
                        <div className="absolute top-20 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-8">
                            {navigationItems.map((item) => (
                                <div key={item.title}>
                                    <div className="flex flex-col gap-2">
                                        {item.href ? (
                                            <Link href={item.href} className="flex justify-between items-center">
                                                <span className="text-lg">{item.title}</span>
                                                <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                                            </Link>
                                        ) : (
                                            <p className="text-lg">{item.title}</p>
                                        )}
                                        {item.items &&
                                            item.items.map((subItem) => (
                                                <Link key={subItem.title} href={subItem.href} className="flex justify-between items-center">
                                                    <span className="text-muted-foreground">{subItem.title}</span>
                                                    <MoveRight className="w-4 h-4 stroke-1" />
                                                </Link>
                                            ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export { Header1 };
