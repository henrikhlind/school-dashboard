'use client'
 
import { usePathname } from 'next/navigation'
import Link from "next/link"
import { LuBookOpen, LuUser } from "react-icons/lu";
import { Key } from 'react';

export default function Subjects(props: any) {
    const pathname = usePathname()
    
    return (
    <nav className="grid items-start px-4 gap-y-1 text-sm font-medium">
        <div className="relative flex py-1 items-center">
            <span className="flex-shrink mx-4 text-gray-500">Skole</span>
            <div className="flex-grow border-t"></div>
        </div>
        <Link
            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-gray-900 ${
                pathname === '/students' ? 'bg-gray-100 text-gray-900' : 'text-gray-500'
            }`}
            href={"/students"}
        >
            <LuUser />Elever
        </Link>
        <div className="relative flex py-1 items-center">
            <span className="flex-shrink mx-4 text-gray-500">Fag</span>
            <div className="flex-grow border-t"></div>
        </div>
        {props.subjects.map((subject: { id: Key; name: string; }) => (
            <Link
                key={subject.id}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-gray-900 ${
                    pathname === '/subjects/' + subject.name.toLowerCase() ? 'bg-gray-100 text-gray-900' : 'text-gray-500'
                }`}
                href={"/subjects/" + subject.name.toLowerCase()}
            >
                <LuBookOpen />{subject.name}
            </Link>
        ))}
    </nav>
    )
}