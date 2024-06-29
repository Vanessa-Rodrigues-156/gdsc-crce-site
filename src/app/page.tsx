'use server'
import React from 'react'
import VerticalTubeGrid from '@/components/verticaltube'


export default async function Home() {
  const delay = async (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))
  await delay(1000) // Add a delay of 1 second (adjust as needed)
  return (
<main>
  <VerticalTubeGrid />
</main>
    
  )
}
