import React from 'react'

type skillCardProps = {
	text: string

	svgIcon: React.ReactNode
}
export default function skillCard({ text, svgIcon }: skillCardProps) {
	return (
		<div className="flex items-center p-2 flex-col w-28 sm:w-[150px] h-auto hover:scale-105 transition duration-500">
			<div className="">{svgIcon}</div>
			<p className="text-2xl text-center whitespace-nowrap">{text}</p>
		</div>
	)
}

