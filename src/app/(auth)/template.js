"use client";
import Link from "next/link"
import { usePathname } from "next/navigation"
import "./styles.css"
import { useState } from "react";

const navLinks = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forgot Pwd", href: "/forgot-password" },
]

export default function AuthLayout({ children }) {
    const pathname = usePathname();
    const [input, setInput] = useState("")
    return (<>
        {/* <h2>Inner Layout</h2> */}
        <div>
            <div>
                <input value={input} onChange={(e) => setInput(e.target.value)}></input>
            </div>
            {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href)
                return (
                    <Link href={link.href} key={link.name} className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}>
                        {link.name}
                    </Link>
                )
            })}
            {children}
        </div>
    </>)
}