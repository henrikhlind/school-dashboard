'use client'
 
import { usePathname } from 'next/navigation'
import Link from "next/link"
import { LuBookOpen } from "react-icons/lu";
import { Key } from 'react';

export default async function Subjects(props: any) {
    const pathname = usePathname()
    
    return (
    <nav className="grid items-start px-4 text-sm font-medium">
        {props.subjects.map((subject: { id: Key; name: string; }) => (
            <Link
                key={subject.id}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-gray-900 ${
                    pathname === '/' + subject.name.toLowerCase() ? 'bg-gray-100 text-gray-900' : 'text-gray-500'
                }`}
                href={"/" + subject.name.toLowerCase()}
            >
                <LuBookOpen />{subject.name}
            </Link>
        ))}
    </nav>
    )
}