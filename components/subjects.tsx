import prisma from '@/lib/prisma'
import Link from "next/link"

export default async function Subjects() {
    const subjects = await prisma.subject.findMany()
    console.log(subjects)
    
    return (
    <nav className="grid items-start px-4 text-sm font-medium">
        <Link className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900" href="#" >
            Norsk
        </Link>
        <Link className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900" href="#" >
            Naturfag
        </Link>
        <Link className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900" href="#" >
            Matte
        </Link>
    </nav>
    )
}