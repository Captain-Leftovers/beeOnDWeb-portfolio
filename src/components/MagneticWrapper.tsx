"use client"

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'




type MagneticWrapperProps = {
	children: React.ReactNode
}

export default function MagneticWrapper({ children }: MagneticWrapperProps) {
	const ref = useRef<HTMLDivElement>(null)
	const [position, setPosition] = useState({ x: 0, y: 0 })
	const isTouchDevice = 'ontouchstart' in window
  
	const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
	  if (!isTouchDevice && ref.current) {
		const { clientX, clientY } = e
		const { height, width, left, top } =
		  ref.current.getBoundingClientRect()
		const middleX = clientX - (left + width / 2)
		const middleY = clientY - (top + height / 2)
		setPosition({ x: middleX, y: middleY })
	  }
	}
  
	const reset = () => {
	  setPosition({ x: 0, y: 0 })
	}
  
	const { x, y } = position
	return (
	  <motion.div
		style={{ position: 'relative' }}
		ref={ref}
		onMouseMove={handleMouse}
		onMouseLeave={reset}
		animate={{ x, y }}
		transition={{
		  type: 'spring',
		  stiffness: 50,
		  damping: 15,
		  mass: 0.1,
		}}
	  >
		{children}
	  </motion.div>
	)
  }
