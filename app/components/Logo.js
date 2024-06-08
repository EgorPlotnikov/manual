'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

function Logo() {
    const router = useRouter();
  return (
    <img src="/logo.svg" alt="Manual Logo" width={150} height={38} style={{'cursor': 'pointer'}} onClick={() => {router.push('/tutorial')}} />
  )
}

export default Logo