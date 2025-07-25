import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './ui/header'
import BoardIllustration from './ui/BoardIllustration'
import Dimensioner from './ui/Dimensioner'

function App() {

  return (
    <>
      <div className="w-full h-full top-0 left-0 fixed bg-grid">

        <div className="w-full h-auto mx-auto max-w-6xl p-8">
          <Header />
        </div>
        
        <div className="mx-auto max-w-6xl py-20 sm:py-42 lg:py-42">

          {/* <BoardIllustration className="mx-auto h-96 w-full max-w-2xl" /> */}
          
          <div className="text-center">
            <h1 className="text-5xl font-black tracking-tight text-balance text-white sm:text-7xl font-">
              Download my software
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8 font-mono">
              Keep as little on the page as possible, but make it look good.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-gray-300 px-4 py-3 my-2 hover:my-1 hover:px-5 hover:py-4 hover:rounded-lg text-sm font-bold !text-black shadow-xs pointer hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 transition-all duration-200"
              >
                Download
              </a>
            </div>
          </div>
        </div>

        <div className="w-100 h-100 p-4 bg-white backdrop-blur-md rounded-3xl shadow-lg mx-auto mb-8">
          
          <Dimensioner
            direction="horizontal"
            distance={120}
            angle={0}
          />
        </div>

        {/* Bottom corner glow */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#FFCC33] to-[#EEAA22] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>


      </div>

    </>
  )
}

export default App
