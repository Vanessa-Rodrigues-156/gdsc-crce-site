'use server'
import Image from 'next/image'
import { Theme } from '@radix-ui/themes'
import MainComponent from '@/components/MainComponent'
import React from 'react'

import MyComponent from '@/components/Component'
import Footer from '@/components/Footer'
export default async function Home() {
  const delay = async (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))
  await delay(1000) // Add a delay of 1 second (adjust as needed)
  return (

    
  )
}
