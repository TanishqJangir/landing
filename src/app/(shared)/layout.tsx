import { Navbar } from '@/components/home/navbar'
// import Footer from '@/components/layouts/Footer'
// import ScrollToTopButton from '@/components/shared/ScrollToTop'
import React from 'react'

interface ChildrenProps {
  readonly children: React.ReactNode
}

export default function Layout({ children }: ChildrenProps) {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
      </div>
      {/* <ScrollToTopButton />
      <Footer /> */}
    </>
  )
}