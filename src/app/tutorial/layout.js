'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import './common.css'
import NavLink from "@/components/nav_link";

export default function TutorialLayout({
    children, // will be a page or nested layout
}) {
    const pathname = usePathname()
    return (
        <main>
            {/* Include shared UI here e.g. a header or sidebar */}
            <nav>
                <NavLink path='/tutorial'>Home</NavLink>
                <NavLink path='/tutorial/counter'>Counter</NavLink>
            </nav>

            <section style={{ padding: '5px' }}>
                {children}
            </section>
        </main>
    )
}