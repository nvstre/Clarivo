"use client";

import React, { useState, useEffect } from "react";
import { Button } from "./button";
import {
} from "./dialog";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "./navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import Link from "next/link";
import { SignInDialog } from "./sign-in-dialog";
import { HeaderSignUpDialog } from "./header-signup-dialog";

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
                                                    </div>
                                                    <div className="flex flex-col gap-2">
                                                        {item.items?.map((subItem) => (
                                                            <Link
                                                                key={subItem.title}
                                                                href={subItem.href}
                                                                className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition"
                                                            >
                                                                <span>{subItem.title}</span>
                                                                <MoveRight className="w-4 h-4" />
                                                            </Link>
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

                {/* Mobile Navbar */}
                <div className="lg:hidden flex items-center">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setOpen(!isOpen)}
                        className="border border-zinc-200 dark:border-zinc-700 rounded-lg"
                    >
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </Button>
                </div>

                {/* Logo */}
                <div className="flex items-center justify-center">
                    <Link href="/" className="text-xl font-bold">
                        Clarivo
                    </Link>
                </div>

                {/* Auth Buttons */}
                <div className="flex items-center justify-end gap-2">
                    <Button variant="ghost" className="hidden md:flex border border-border rounded-lg px-4 py-2 hover:bg-muted transition">
                        Contact us
                    </Button>
                    <div className="hidden md:block h-6 w-px bg-border" />
                    <SignInDialog />
                    <HeaderSignUpDialog />
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden fixed inset-0 bg-background z-50">
                    <div className="container mx-auto p-4">
                        <div className="flex justify-end mb-4">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setOpen(false)}
                                className="border border-zinc-200 dark:border-zinc-700 rounded-lg"
                            >
                                <X className="w-5 h-5" />
                            </Button>
                        </div>
                        <div className="flex flex-col gap-4">
                            {navigationItems.map((item) => (
                                <div key={item.title} className="flex flex-col gap-2">
                                    {item.href ? (
                                        <Link
                                            href={item.href}
                                            className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition"
                                            onClick={() => setOpen(false)}
                                        >
                                            <span>{item.title}</span>
                                        </Link>
                                    ) : (
                                        <>
                                            <div className="flex items-center gap-2 p-2 rounded-lg">
                                                <span className="font-medium">{item.title}</span>
                                            </div>
                                            <div className="flex flex-col gap-2 pl-4">
                                                {item.items?.map((subItem) => (
                                                    <Link
                                                        key={subItem.title}
                                                        href={subItem.href}
                                                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition"
                                                        onClick={() => setOpen(false)}
                                                    >
                                                        <span>{subItem.title}</span>
                                                        <MoveRight className="w-4 h-4" />
                                                    </Link>
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export { Header1 };
