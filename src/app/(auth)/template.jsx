"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
]

const AuthLayout = ({ children }) => {
  const pathname = usePathname();
  const [input, setInput] = useState("")
  return (
    <div>
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
      <header>
        {
          navLinks.map((link, idx) => {
            const isActive = pathname.startsWith(link.href)
            return (
              <Link key={idx} href={link.href} className={`${isActive ? "text-blue-600 font-semibold" : ""} mr-5`}>{link.name}</Link>
            )
          })
        }
      </header>
      {children}
    </div>
  );
};

export default AuthLayout;