type InfoBlockProps = {
	icon: React.ReactNode
	textInfo: string
}

export default function InfoBlock({ icon, textInfo }: InfoBlockProps) {
	return (
		<div className="bg-background-dark/50  text-base sm:text-lg rounded-md">
			<div className="flex items-center">
				<div className="w-20">{icon}</div>
				<p className="px-6 py-2">{textInfo}</p>
			</div>
		</div>
	)
}
