'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'


export default function BoardIllustration() {

  return (
    <div className="relative translate-x-1/2">
        <div className="w-40 h-40 -left-80 top-0 absolute bg-white rounded" />
        <div className="w-40 h-40 -left-40 top-40 absolute bg-white/90 rounded" />
        <div className="w-40 h-40 left-40 top-40 absolute bg-white/70 rounded" />
        <div className="w-40 h-40 -left-0 top-0 absolute bg-white/80 rounded" />
        <div className="w-40 h-40 left-0 top-80 absolute bg-white/60 rounded" />
    </div>
  )
}