'use client'

import { CopySVG } from '@/components/Icons'
import { useState } from 'react'

type InfoBlockProps = {
	icon: React.ReactNode
	textInfo: string
}

export default function InfoBlock({ icon, textInfo }: InfoBlockProps) {
    const [animate, setAnimate] = useState(false);

	const copyText = () => {
		navigator.clipboard.writeText(textInfo)
        setAnimate(true)
	}
	return (
		<div
			className="bg-background-dark/50  text-sm sm:text-lg rounded-md cursor-pointer group"
			onClick={copyText}
		>
			<div className="flex items-center">
				<div className="w-10 sm:w-20">{icon}</div>
				<p className="px-2 sm:px-6 py-2 group-active:scale-105 transition whitespace-nowrap">
					{textInfo}
				</p>
				<div className={`text-xs sm:text-base mr-4 sm:mr-10 ml-auto opacity-0 ${animate ? 'animate-fade-in-out' : ''}`} onAnimationEnd={()=> setAnimate(false)}>Copied</div>
				<div className=" w-4 sm:w-6 mr-4 sm:mr-10">
					<CopySVG className="group-active:scale-110 transition" />
				</div>
			</div>
		</div>
	)
}
