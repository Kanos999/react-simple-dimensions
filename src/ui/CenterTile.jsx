'use client'
import { useState } from 'react'
import { useSize } from '../SizeContext';
import Dimension from '../../react-simple-dimensions/src/dimensions';


export default function CenterTile({ children, width, height }) {
  return (
    <div
      className="bg-white/80 backdrop-blur-md rounded-3xl shadow-lg text-center justify-center items-center flex flex-col align-items-center w-auto h-auto"
      style={{
        width: width,
        height: height,
        transition: 'width 0.8s cubic-bezier(0.77,0,0.175,1), height 0.8s cubic-bezier(0.77,0,0.175,1)',
      }}
    >
      <div className="m-6 mt-2">
        <div className="text-2xl lg:text-5xl font-black tracking-tight text-balance text-gray-900">
          Simple dimensions
        </div>
        <p className="mt-8 text-sm font-medium text-pretty text-gray-600 sm:text-xl/8 font-mono max-w-xs lg:max-w-md">
          Add engineering-style dimensions to your designs with ease.
        </p>
        <div className="mt-4 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="group relative rounded-md bg-gray-200 px-4 py-3 my-2 hover:my-1 hover:px-5 hover:py-4 hover:rounded-lg text-sm font-bold !text-black shadow-md pointer hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 transition-all duration-200"
          >
            <div className="w-full h-full opacity-0 group-hover:opacity-100 transition-oall duration-200">
              <Dimension
                color="#130f40"
                distance={"auto"}
                offset={0}
                position="bottom"
                units="rem"
              />
              <Dimension
                color="#130f40"
                distance={"auto"}
                offset={0}
                position="left"
                units="rem"
              />
            </div>
            Download
          </a>
        </div>
      </div>


      {children}
    </div>
  )
}