'use client'

import Link from 'next/link'
import { CircularText } from '@/components/Icons'
import MagneticWrapper from '@/components/MagneticWrapper'

export default function HireMe() {
	return (
		<div className="xl:fixed flex items-center justify-center xl:-left-2 xl:bottom-4">
			<MagneticWrapper>
				<div className="relative flex items-center justify-center w-32 sm:w-48  h-auto">
					<CircularText
						className={
							'fill-text dark:fill-text-dark animate-spin-slower'
						}
					/>
					<Link
						href="/contact"
						className="absolute flex items-center justify-center w-2/4 h-2/4 font-medium transition-all duration-200  rounded-full dark:bg-primary-dark  bg-primary dark:text-text-dark text-text hover:scale-105 hover:bg-primary/90 active:scale-100 text-xs sm:text-base md:text-lg"
					>
						Hire Me
					</Link>
				</div>
			</MagneticWrapper>
		</div>
	)
}
