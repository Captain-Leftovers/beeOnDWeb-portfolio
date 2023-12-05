import { LaptopSVG } from '@/components/Icons'
import Link from 'next/link'

export default function Home() {
	return (
		<main className="flex flex-col xl:flex-row  items-center justify-around  bg-background dark:bg-background-dark grow w-full lg:max-w-screen-xl text-text dark:text-text-dark">
			<div className="w-1/2">
				<LaptopSVG className="w-full h-auto" />
			</div>

			<article className="flex flex-col w-fit  ">
				<h1 className="self-center text-4xl font-medium ">Hi there!</h1>
				<p className="text-center ">
					I&apos;m{' '}
					<span className="text-2xl font-medium text-primary dark:text-primary-dark">
						<Link className="relative group" href="/about">
							Dob
							<span
								className={`w-0 absolute left-0 inline-block  h-[2px] -bottom-0.5 bg-accent dark:bg-accent-dark group-hover:w-full transition-[width] ease duration-300`}
							></span>
						</Link>
					</span>
					,<br /> Full Stack Programmer and Web Developer,
					<br /> fusing cutting-edge technology with your visions.
				</p>
				<div className="flex items-center justify-center w-full mt-4">
					<a
						download
						href="/Resume.pdf"
						className=" w-40 flex items-center justify-center p-2.5 px-6 border-2 border-solid rounded-md border-primary dark:border-primary-dark bg-primary dark:bg-primary-dark font-semibold hover:bg-primary/90 dark:hover:bg-transparent transition"
					>
						My Resume
					</a>
					<a
						href="/contact"
						className="flex items-center justify-center ml-4 p-2.5 px-6 border-2 border-solid rounded-md border-primary hover:text-primary dark:hover:text-primary-dark dark:border-primary-dark dark:bg-background-dark font-semibold w-40 cursor-pointer transition"
					>
						Get in touch
					</a>
				</div>
			</article>
		</main>
	)
}