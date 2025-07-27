'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-gray-300/5 backdrop-blur-sm rounded-3xl border border-gray-200/10 shadow-lg">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        <div className="flex text-sm/6 !font-bold lg:flex-1 text-gray-300">
          React Simple Dimensions
        </div>
        
        {/* <PopoverGroup className="flex gap-x-12">

          <a href="#" className="text-sm/6 !font-bold !text-gray-400">
            Features
          </a>
          <a href="#" className="text-sm/6 !font-bold !text-gray-400">
            Marketplace
          </a>
          <a href="#" className="text-sm/6 !font-bold !text-gray-400">
            Company
          </a>
        </PopoverGroup> */}
        
        <div className="flex flex-1 justify-end">
          <a href="#" className="text-sm/6 font-semibold !text-gray-400">
            Github
          </a>
        </div>
      </nav>
      
    </header>
  )
}