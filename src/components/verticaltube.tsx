// VerticalTubeGrid.tsx
"use client"

import React, { useEffect } from 'react'

const VerticalTubeGrid: React.FC = () => {
  useEffect(() => {
    const fillTubeOnScroll = () => {
      const tube = document.querySelector('.tube') as HTMLElement
      const windowHeight = window.innerHeight
      const scrollHeight = document.documentElement.scrollHeight
      const scrolled = window.scrollY

      const fillPercentage = (scrolled / (scrollHeight - windowHeight)) * 100
      tube.style.height = `${fillPercentage}%`
    }

    window.addEventListener('scroll', fillTubeOnScroll)

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', fillTubeOnScroll)
    }
  }, [])

  return (
    <div className="grid grid-cols-3 gap-4">
      {/* Grid Item 1 */}
      <div className="relative">
        {/* Your grid item content */}
        <img src="gdsc-f.png" alt="" />
        <div className="tube-container">
          <div className="tube transition-height h-0 bg-blue-500 duration-500 ease-out"></div>
        </div>
      </div>

      {/* Grid Item 2 */}
      <div className="relative">
        {/* Your grid item content */} <img src="gdsc-f.png" alt="" />
        <div className="tube-container">
          <div className="tube transition-height h-0 bg-green-500 duration-500 ease-out"></div>
        </div>
      </div>

      {/* Grid Item 3 */}
      <div className="relative">
        {/* Your grid item content */} <img src="gdsc-f.png" alt="" />
        <div className="tube-container">
          <div className="tube transition-height h-0 bg-yellow-500 duration-500 ease-out"></div>
        </div>
      </div>

      {/* Add more grid items as needed */}
    </div>
  )
}

export default VerticalTubeGrid
