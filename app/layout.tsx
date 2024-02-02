import './globals.css'
import { Inter } from 'next/font/google'
import SubjectsPlaceholder from "@/components/subjects-placeholder"
import Subjects from "@/components/subjects"
import { Suspense } from 'react'
import Link from 'next/link'
import prisma from '@/lib/prisma'

export const metadata = {
  title: 'Skoleoversikt',
  description: 'Et dashbord for skoler for å administrere sine elever og karakterer.',
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className=''>
      <body className={'min-h-screen w-full' + inter.variable}>
        <header className='w-screen bg-gray-100/40 h-16 flex border-b'>
          <div className="w-72 flex items-center justify-center h-full border-r">
            <Link className="" href="/">
              <span className="text-2xl font-semibold">Skoleoversikt</span>
            </Link>
          </div>
        </header>
        <div className="flex">
          <div className="h-[calc(100vh-4rem)] w-72 bg-gray-100/40 border-r py-4 gap-2">
            <Suspense fallback={<SubjectsPlaceholder />}>
              <Subjects subjects={await prisma.subjects.findMany()} />
            </Suspense>
          </div>
          <div className="w-min h-[calc(100vh-4rem)] text-gray-900">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
