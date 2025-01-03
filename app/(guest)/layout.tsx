import Banner from '@/components/banner'
import React from 'react'

function GuestLayout({
    children}: {children: React.ReactNode}) {
  return (
    <div><Banner />  {children}</div>
  )
}

export default GuestLayout