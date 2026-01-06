"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { headerData } from "@/app/components/Layout/Header/Navigation/menuData";
import HeaderLink from "@/app/components/Layout/Header/Navigation/HeaderLink";
import MobileHeaderLink from "@/app/components/Layout/Header/Navigation/MobileHeaderLink";
// import Signin from "@/components/Auth/SignIn";
// import SignUp from "@/components/Auth/SignUp";
import { Icon } from "@iconify/react";
import Image from "next/image";

export default function Header() {
    const pathUrl = usePathname();

    const [navbarOpen, setNavbarOpen] = useState(false);
    const [sticky, setSticky] = useState(false);
    const [isSignInOpen, setIsSignInOpen] = useState(false);
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);

    const signInRef = useRef(null);
    const signUpRef = useRef(null);
    const mobileMenuRef = useRef(null);

    /* Sticky Header */
    useEffect(() => {
        const handleScroll = () => setSticky(window.scrollY >= 80);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    /* Close on outside click */
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (signInRef.current && !signInRef.current.contains(event.target)) {
                setIsSignInOpen(false);
            }
            if (signUpRef.current && !signUpRef.current.contains(event.target)) {
                setIsSignUpOpen(false);
            }
            if (
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(event.target)
            ) {
                setNavbarOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    /* Lock scroll */
    useEffect(() => {
        document.body.style.overflow =
            isSignInOpen || isSignUpOpen || navbarOpen ? "hidden" : "";
    }, [isSignInOpen, isSignUpOpen, navbarOpen]);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all ${sticky
                ? "bg-white shadow-md border-b border-border"
                : "bg-white backdrop-blur-md"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
                {/* Logo */}
                <Link href="/">
                    <Image
                        src="/images/logo/logo.svg"
                        alt="logo"
                        width={160}
                        height={50}
                        quality={100}
                        className="dark:hidden"
                    />

                    <Image
                        src="/images/logo/logo1.svg"
                        alt="logo"
                        width={140}
                        height={30}
                        quality={100}
                        className="hidden dark:block"
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-10 text-sm font-medium">
                    {headerData.map((item, index) => (
                        <HeaderLink key={index} item={item} />
                    ))}
                </nav>

                {/* Actions */}
                <div className="hidden lg:flex items-center gap-4">
                    <button
                        onClick={() => setIsSignInOpen(true)}
                        className="hover:text-primary transition"
                    >
                        Sign In
                    </button>

                    <button
                        onClick={() => setIsSignUpOpen(true)}
                        className="bg-primary px-5 py-2 rounded-xl text-sm font-semibold shadow hover:opacity-90 transition flex items-center gap-2"
                    >
                        Sign Up
                        <Icon icon="solar:arrow-right-linear" width="18" />
                    </button>
                </div>

                {/* Mobile Button */}
                <button
                    onClick={() => setNavbarOpen(true)}
                    className="lg:hidden space-y-1"
                >
                    <span className="block w-6 h-0.5 bg-midnight_text"></span>
                    <span className="block w-6 h-0.5 bg-midnight_text"></span>
                    <span className="block w-6 h-0.5 bg-midnight_text"></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                ref={mobileMenuRef}
                className={`fixed top-0 right-0 h-full w-full max-w-xs bg-heroBg shadow-lg transform transition-transform ${navbarOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="p-6 flex justify-between items-center border-b border-border">
                    <span className="font-semibold text-midnight_text">Menu</span>
                    <button onClick={() => setNavbarOpen(false)}>✕</button>
                </div>

                <nav className="p-6 space-y-4">
                    {headerData.map((item, index) => (
                        <MobileHeaderLink key={index} item={item} />
                    ))}

                    <div className="pt-6 space-y-3">
                        <button
                            onClick={() => {
                                setIsSignInOpen(true);
                                setNavbarOpen(false);
                            }}
                            className="w-full border border-primary text-primary py-2 rounded-lg"
                        >
                            Sign In
                        </button>

                        <button
                            onClick={() => {
                                setIsSignUpOpen(true);
                                setNavbarOpen(false);
                            }}
                            className="w-full bg-primary  py-2 rounded-lg"
                        >
                            Sign Up
                        </button>
                    </div>
                </nav>
            </div>

            {/* Sign In Modal */}
            {isSignInOpen && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div
                        ref={signInRef}
                        className="bg-white rounded-xl p-8 w-full max-w-md relative"
                    >
                        <button
                            onClick={() => setIsSignInOpen(false)}
                            className="absolute top-4 right-4"
                        >
                            ✕
                        </button>
                        {/* <Signin /> */}
                    </div>
                </div>
            )}

            {/* Sign Up Modal */}
            {isSignUpOpen && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div
                        ref={signUpRef}
                        className="bg-white rounded-xl p-8 w-full max-w-md relative"
                    >
                        <button
                            onClick={() => setIsSignUpOpen(false)}
                            className="absolute top-4 right-4"
                        >
                            ✕
                        </button>
                        {/* <SignUp /> */}
                    </div>
                </div>
            )}
        </header>
    );
}
