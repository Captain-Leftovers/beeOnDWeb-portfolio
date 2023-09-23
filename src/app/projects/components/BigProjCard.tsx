import Image, { StaticImageData } from 'next/image'
import blueNoise from '#/blue-circle.png'
import { GithubIcon } from '@/components/Icons'

type BigProjCardProps = {
	buildWith: string
	name: string
	description: string[]
	imageSrc: StaticImageData
	cardColor?: string
	githubLink: string
	liveLink?: string
}

export default function BigProjCard({
	buildWith,
	name,
	description,
	imageSrc,
	cardColor = 'bg-green-100',
	githubLink,
	liveLink
}: BigProjCardProps) {
	return (
		<div className="md:w-[750px] w-[360px] mx-auto h-auto group ">
			<div className={`w-full  mx-auto aspect-video flex relative rounded-lg outline outline-transparent outline-1 group-hover:outline-accent ${cardColor} dark:bg-opacity-40`}>
				<div className="w-1/2 top-0 left-14 sm:w-3/5 absolute sm:top-0 sm:left-0 sm:translate-y-1/2  animate-spin-two shadow-md backdrop-blur-3xl scale-100  shadow-transparent rounded-full transition duration-500">
					<Image alt="grain" src={blueNoise} className="dark:opacity-60" />
				</div>

				<div className="text-sm w-1/2  flex flex-col justify-center pl-8 gap-1 sm:gap-6 z-20">
					<h2 className="text-md sm:text-2xl text-text/70 dark:text-text-dark/80">
						{buildWith}
					</h2>
					<h1 className="text-lg sm:text-4xl">{name}</h1>
					<section className="text-text/70 dark:text-text-dark/80">
						<ul>
							{description.map((desc) => (
								<li key={desc}>
									<p>{desc}</p>
								</li>
							))}
						</ul>
					</section>

					<div className="flex gap-2 sm:gap-4 items-center">
						<a
							href={githubLink}
							target="_blank"
							className="w-8 hover:scale-110 "
						>
							<GithubIcon className="" />
						</a>
						<a
							href={liveLink}
							target="_blank"
							className=" shadow-md w-16 whitespace-nowrap  sm:w-24 md:w-32 flex items-center justify-center p-1 sm:p-2.5 sm:px-6 border-2 border-solid rounded-md border-primary dark:border-primary-dark bg-primary dark:bg-primary-dark font-medium sm:font-semibold hover:bg-transparent dark:hover:bg-transparent"
						>
							Live Link
						</a>
					</div>
				</div>
				<div className="absolute w-3/5 -right-5 -bottom-8 sm:-right-20 sm:-bottom-20 sm:w-2/3">
					<picture className="">
						<Image
							loading="eager"
							className=""
							src={imageSrc}
							alt="laptop"
						/>
					</picture>
				</div>
			</div>
		</div>
	)
}

//TODO : Add image
//TODO : add text description elements
//TODO : add the line decoration on the card in left middle
