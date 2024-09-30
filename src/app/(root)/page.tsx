import { LaptopSVG } from '@/components/Icons'
import Link from 'next/link'

export default function Home() {
	return (
		<main className="flex flex-col xl:flex-row  items-center justify-around  bg-background dark:bg-background-dark grow w-full lg:max-w-screen-xl text-text dark:text-text-dark">
			<div className="md:w-1/2 bg-red-200">
				<LaptopSVG className="w-full h-auto" />
			</div>

			<article className="flex flex-col w-fit  text-center">
				<h1 className="self-center text-2xl sm:text-4xl font-medium ">Hi there!</h1>
				<p className="animate-slideFromLeft ">
					I&apos;m{' '}
					<span className="text-2xl font-medium text-primary dark:text-primary-dark">
						<Link className="relative group" href="/about">
							Dob
							<span
								className={`w-0 absolute left-0 inline-block  h-[2px] -bottom-0.5 bg-accent dark:bg-accent-dark group-hover:w-full transition-[width] ease duration-300`}
							></span>
						</Link>
					</span>
					,
				</p>
				<p className='sm:text-xl'> Full Stack Programmer and Web Developer,</p>
				<p className='sm:text-xl'> fusing cutting-edge technology with your visions.</p>
				<div className="flex items-center justify-center w-full mt-4  whitespace-nowrap">
					<a
						download
						href="/Resume.pdf"
						className="w-32 sm:w-40 flex items-center justify-center p-2 sm:p-2.5 sm:px-6 border-2 border-solid rounded-md border-primary dark:border-primary-dark bg-primary dark:bg-primary-dark font-medium hover:bg-primary/90 dark:hover:bg-transparent transition"
					>
						My Resume
					</a>
					<a
						href="/contact"
						className="flex items-center justify-center w-32 sm:w-40 ml-4 p-2 sm:p-2.5 sm:px-6 border-2 border-solid rounded-md border-primary hover:text-primary dark:hover:text-primary-dark dark:border-primary-dark dark:bg-background-dark font-medium cursor-pointer transition"
					>
						Get in touch
					</a>
				</div>
			</article>
		</main>
	)
}
