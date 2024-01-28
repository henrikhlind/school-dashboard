import Image from 'next/image'
import { Suspense } from 'react'

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 w-[calc(100vw-18rem)] h-full">
      <h1 className='font-semibold text-2xl'>Hjem</h1>
      {/* <Image
        src="/English.svg"
        alt="Open Book Icon"
        className='h-10 aspect-square'
        width={100}
        height={24}
      /> */}
    </main>
  )
}
