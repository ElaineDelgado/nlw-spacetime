import './globals.css'
import React from 'react'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from 'next/font/google'
import { Profile } from '@/components/Profile'
import { Signin } from '@/components/Signin'
import { Hero } from '@/components/Hero'
import { Copyright } from '@/components/Copyright'
import { cookies } from 'next/headers'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

export const metadata = {
  title: 'NLW Spacetime',
  description: 'Cápsula do tempo construída com React, Next.JS, Typescript, Tailwind e SQLite',
}

export default function RootLayout({children,} : {children: React.ReactNode}) {

  const isAuthenticated = cookies().has('token')

  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamjuree.variable} font-sans text-gray-100 bg-gray-900`}>
        
        <main className="grid grid-cols-2 min-h-screen">
      {/* Left */}
      <div 
        className="flex flex-col items-start justify-between px-28 py-16 relative overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover"
      >
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 bg-purple-700 opacity-50 blur-full"></div>
        <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes"></div>

        {isAuthenticated 
          ? <Profile />
          : <Signin />
        }
        <Hero />
        <Copyright />
      </div>

      {/* Right */}
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        {children}
      </div>
    </main>
      </body>
    </html>
  )
}