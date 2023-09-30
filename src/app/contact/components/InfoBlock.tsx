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
			className="bg-background-dark/50  text-base sm:text-lg rounded-md cursor-pointer group"
			onClick={copyText}
		>
			<div className="flex items-center">
				<div className="w-20">{icon}</div>
				<p className="px-6 py-2 group-active:scale-105 transition">
					{textInfo}
				</p>
				<div className={`mr-10 ml-auto opacity-0 ${animate ? 'animate-fade-in-out' : ''}`} onAnimationEnd={()=> setAnimate(false)}>Copied</div>
				<div className=" w-6 mr-10">
					<CopySVG className="group-active:scale-110 transition" />
				</div>
			</div>
		</div>
	)
}
