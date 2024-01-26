import Image from 'next/image'
import { Suspense } from 'react'
import Table from '@/components/table'
import TablePlaceholder from '@/components/table-placeholder'


export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <h1 className="pt-4 pb-8 bg-gradient-to-br from-black via-[#171717] to-[#575757] bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
        Postgres on Vercel
      </h1>
      <Suspense fallback={<TablePlaceholder />}>
        <Table />
      </Suspense>
      <Image
        src="/Science.svg"
        alt="Open Book Icon"
        className='h-10 aspect-square'
        width={100}
        height={24}
      />
      <Image
        src="/Mathematics.svg"
        alt="Open Book Icon"
        className='h-10 aspect-square'
        width={100}
        height={24}
      />
      <Image
        src="/Geography.svg"
        alt="Open Book Icon"
        className='h-10 aspect-square'
        width={100}
        height={24}
      />
      <Image
        src="/History.svg"
        alt="Open Book Icon"
        className='h-10 aspect-square'
        width={100}
        height={24}
      />
      <Image
        src="/English.svg"
        alt="Open Book Icon"
        className='h-10 aspect-square'
        width={100}
        height={24}
      />
    </main>
  )
}
