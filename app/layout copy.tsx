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
      <body className={'flex min-h-screen w-full flex-col' + inter.variable}>
        <div className="w-72 hidden border-r bg-gray-100/40 lg:block">
          <div className="flex h-14 items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <span className="">Teacher Dashboard</span>
            </Link>
          </div>
          <Suspense fallback={<SubjectsPlaceholder />}>
            <Subjects />
          </Suspense>
        </div>
        <div className="">
          <header className='flex h-14 max-w-screen items-center gap-4 border-b bg-gray-100/40 px-6'></header>
          {children}
        </div>
      </body>
    </html>
  )
}
