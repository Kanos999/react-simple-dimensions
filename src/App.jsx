import { useState, useEffect, useRef, createContext } from 'react'
import './App.css'
import Header from './ui/header'
// import Dimension from '../react-simple-dimensions/src/dimensions' // Uncomment if in development mode
import Dimension from 'react-simple-dimensions' // Use this for production
import CenterTile from './ui/CenterTile'

function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
}


function App() {
  const heightSet = [400, 320, 500, 380, 680, 450]
  const widthSet = [580, 650, 910, 520, 600, 700]

  const [height, setHeight] = useState(heightSet[0])
  const [width, setWidth] = useState(widthSet[0])
  const heightIndex = useRef(0)
  const widthIndex = useRef(0)

  useEffect(() => {
    let animationFrame
    let startTime
    let fromHeight = heightSet[heightIndex.current]
    let toHeight = heightSet[Math.floor(Math.random() * heightSet.length)]
    let fromWidth = widthSet[widthIndex.current]
    let toWidth = widthSet[Math.floor(Math.random() * widthSet.length)]

    function animate(time) {
      if (!startTime) startTime = time
      const duration = 800 // ms
      const elapsed = time - startTime
      const t = Math.min(elapsed / duration, 1)
      const eased = easeInOutQuad(t)

      setHeight(Math.round(fromHeight + (toHeight - fromHeight) * eased))
      setWidth(Math.round(fromWidth + (toWidth - fromWidth) * eased))

      if (t < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    const interval = setInterval(() => {
      fromHeight = heightSet[heightIndex.current]
      fromWidth = widthSet[widthIndex.current]
      heightIndex.current = (heightIndex.current + 1) % heightSet.length
      widthIndex.current = (widthIndex.current + 1) % widthSet.length
      toHeight = heightSet[heightIndex.current]
      toWidth = widthSet[widthIndex.current]
      startTime = null
      cancelAnimationFrame(animationFrame)
      animationFrame = requestAnimationFrame(animate)
    }, 1500)

    // Start initial animation
    animationFrame = requestAnimationFrame(animate)

    return () => {
      clearInterval(interval)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <>
      <div className="w-full h-full top-0 left-0 fixed bg-grid justify-center items-center flex flex-col align-items-center">
        <div className="w-full h-auto mx-auto max-w-6xl p-8 fixed top-0 z-50">
          <Header />
        </div>

        {/* Main hero */}
        <div className="mx-auto max-w-6xl py-20 sm:py-42 justify-center items-center flex flex-col md:scale-100">
          
          {/* Center tile */}
          <CenterTile width={width} height={height}>

            {/* Horizontal dimension */}
            <Dimension
              color="#FFCC33"
              distance={"auto"}
              position="top"
              offset={20}
              units="px"
            />
            
            {/* Vertical dimension */}
            <Dimension
              color="#FFCC33"
              distance={"auto"}
              offset={100}
              position="right"
              units="px"
            />
          </CenterTile>
        </div>


        {/* Footer */}
        <div className="h-auto mx-auto p-8 fixed bottom-0 z-50 font-mono opacity-50">Made with {"<3"} by @Kanos999 </div>

        {/* Background glows */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#4834d4] to-[#130f40] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute rotate-180 inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(80%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#130f40] to-[#4834d4] opacity-30 sm:w-288.75"
          />
        </div>
      </div>
    </>
  )
}

export default App
