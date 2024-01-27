import './globals.css'
import { Inter } from 'next/font/google'
import SubjectsPlaceholder from "@/components/subjects-placeholder"
import Subjects from "@/components/subjects"
import { Suspense } from 'react'
import Link from 'next/link'

export const metadata = {
  title: 'School Dashboard',
  description:
    'A simple Next.js app with Vercel Postgres as the database and Prisma as the ORM',
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className=''>
      <body className={'min-h-screen w-full' + inter.variable}>
        <header className='w-screen bg-gray-100/40 h-16 flex border-b'>
          <div className="w-72 flex items-center justify-center h-full border-r">
            <Link className="" href="#">
              <span className="text-2xl font-semibold">Teacher Dashboard</span>
            </Link>
          </div>
        </header>
        <div className="flex">
          <div className="h-[calc(100vh-4rem)] w-72 bg-gray-100/40 border-r">
            <Suspense fallback={<SubjectsPlaceholder />}>
              <Subjects />
            </Suspense>
          </div>
          <div className="w-min h-[calc(100vh-4rem)]">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
