import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ path, children }) {

    const pathname = usePathname()
    return <Link className={`link ${pathname === path ? 'active' : ''}`} href={path}>
        {children}
    </Link>
}