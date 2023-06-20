import Image from 'next/image'
import laptop from '#/laptopBeeLog.png'
import pinkNoise from '#/pink-circle.png'
import { GithubIcon } from '@/components/Icons'

export default function BigProjCard() {
	return (
		<div className="w-2/3">
			<div className=" w-full max-w-screen-lg mx-auto aspect-video flex relative rounded-lg   group">
				<div className="absolute top-0 left-0 translate-y-1/2  animate-spin-two shadow-md backdrop-blur-3xl  shadow-transparent rounded-full transition duration-500 group-hover:shadow-accent">
					<Image alt="grain" src={pinkNoise} />
				</div>
			

				<span className="absolute"></span>
				<div className=" w-1/2  flex flex-col justify-center pl-8 gap-6 ">
					<h2 className="text-2xl text-text/70 dark:text-text-dark/80">
						Build with : React, Typescript,
						Prisma, TRPC
					</h2>
					<h1 className="text-4xl">
						BeeKeeper&apos;s Log
					</h1>
					<section className="text-text/70 dark:text-text-dark/80">
						<p>Track hive health</p>
						<p>
							Store information
							related to hive
							inspection
						</p>
					</section>

					<div className="flex gap-4 items-center">
						<a
							href="https://github.com/Captain-Leftovers/Captain-Leftovers-bee-log-react-trpc-prisma-postgresql-"
							target="_blank"
							className="w-8 hover:scale-110 "
						>
							<GithubIcon className="" />
						</a>
						<a
							
							href="https://beekeeperslog.com"
							target="_blank"
							className="shadow-md w-40 flex items-center justify-center p-2.5 px-6 border-2 border-solid rounded-md border-primary dark:border-primary-dark bg-primary dark:bg-primary-dark font-semibold hover:bg-transparent dark:hover:bg-transparent"
						>
							Live Link
						</a>
					</div>
				</div>
				<div className="absolute -right-20 -bottom-20 w-2/3">
					<picture className="">
						<Image
							className=""
							src={laptop}
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
