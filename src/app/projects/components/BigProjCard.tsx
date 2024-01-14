import Image, { StaticImageData } from 'next/image'
import blueNoise from '#/blue-circle.png'
import { GithubIcon } from '@/components/Icons'
import EmbedButton from './EmbedButton'

type BigProjCardProps = {
	client?: boolean | undefined
	buildWith: string
	name: string
	description: string[]
	imageSrc: StaticImageData
	cardColor?: string
	githubLink?: string
	liveLink?: string
	loading?: 'lazy' | 'eager'
	priority?: boolean
	inProgress?: boolean
	demo?: boolean
}

export default function BigProjCard({
	demo,
	client,
	buildWith,
	name,
	description,
	imageSrc,
	cardColor = 'bg-green-100',
	githubLink,
	liveLink,
	loading,
	priority,
	inProgress,
}: BigProjCardProps) {


	

	return (
		<div className="lg:w-[750px] md:w-9/12 sm:w-9/12 w-5/6 mx-auto h-auto group relative">
			<div className="" />

			<div
				className={`w-full  mx-auto aspect-video flex relative rounded-lg outline outline-text outline-offset-8 box-content  border border-transparent  group-hover:border-accent ${cardColor} dark:bg-opacity-40`}
			>
				{client && (
					<p className="absolute lg:block  hidden sm:left-0 sm:top-0 bg-accent sm:h-auto sm:w-full p-1 px-2 rounded-t-lg text-xs sm:text-base">
						Real-world client project
					</p>
				)}
				<div className="w-1/2 top-0 left-14 sm:w-3/5 absolute sm:top-0 sm:left-4 sm:translate-y-1/2  animate-spin-two shadow-md backdrop-blur-3xl scale-100  shadow-transparent rounded-full transition duration-500">
					<Image
						loading={loading}
						priority={priority}
						alt="grain"
						src={blueNoise}
						className="dark:opacity-60"
					/>
				</div>

				<div className="text-sm w-1/2  flex flex-col justify-between pl-2 sm:pl-4 md:pl-8 z-20 py-2">
					<div className="my-auto sm:space-y-4 space-y-1">
						<h2 className="text-sm sm:text-2xl text-text/70 dark:text-text-dark/80">
							{buildWith}
						</h2>
						<h1 className="text-base font-medium sm:text-3xl md:text-4xl leading-5">
							{name}
						</h1>
						<section className="text-text/70 dark:text-text-dark/80 text-xs sm:text-base">
							<ul className="list-disc">
								{description.map((desc) => (
									<li
										className={`ml-4 ${
											inProgress &&
											'text-red-400 animate-fade-in-out-text'
										}`}
										key={desc}
									>
										<p>{desc}</p>
									</li>
								))}
							</ul>
						</section>
					</div>

					<div className="flex gap-2 sm:gap-4 items-center">
						<a
							href={githubLink}
							target="_blank"
							className="w-8 hover:scale-110  transition"
							style={{
								pointerEvents:
									githubLink === '' ? 'none' : 'auto',
								opacity: githubLink === '' ? 0.5 : 1,
							}}
						>
							<GithubIcon className="" />
						</a>
						{ !demo ? (<a

							href={liveLink}
							target="_blank"
							style={{
								pointerEvents:
									liveLink === '' ? 'none' : 'auto',

								opacity: liveLink === '' ? 0.5 : 1,
							}}
							className={`shadow-md w-20 whitespace-nowrap  sm:w-24 md:w-32 flex items-center justify-center py-0.5 sm:p-2.5 sm:px-6 border-2 border-solid rounded-md border-primary dark:border-primary-dark bg-primary dark:bg-primary-dark font-medium hover:bg-primary/90 dark:hover:bg-transparent transition disabled:opacity-50 disabled:cursor-not-allowed`}
						>
							Live Link
						</a>) 
						: <EmbedButton embedLink={
							liveLink
						}/>}
					</div>
				</div>
				<div className="absolute w-3/5 -right-5 -bottom-8 sm:-right-20 sm:-bottom-20 sm:w-2/3">
					<picture className="">
						<Image
							loading="eager"
							className=""
							src={imageSrc}
							alt="laptop"
							priority={true}
						/>
					</picture>
				</div>
			</div>
		</div>
	)
}
