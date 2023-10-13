import { LaptopSVG } from "@/components/Icons";

export default function Home() {

	
	return (
		<main className="flex flex-col xl:flex-row  items-center justify-around  bg-background dark:bg-background-dark grow w-full lg:max-w-screen-xl text-text dark:text-text-dark">
		<div className="w-1/2">
			<LaptopSVG className="w-full h-auto" />
		</div>

		<article className="flex flex-col w-fit  ">
			<h1 className="self-center text-4xl font-medium ">Hi there!</h1>
			<p className="text-center ">I&apos;m <span className="text-2xl font-medium text-primary dark:text-primary-dark">Dob</span>,<br/> Full Stack Programmer and Web Developer,<br/> fusing cutting-edge technology with your visions.</p>
			<div className="flex items-center justify-center w-full mt-4">
				<a download href='/Resume.pdf'  className=" w-40 flex items-center justify-center p-2.5 px-6 border-2 border-solid rounded-md border-primary dark:border-primary-dark bg-primary dark:bg-primary-dark font-semibold hover:bg-transparent dark:hover:bg-transparent">My Resume</a>
				<a href="/contact" className="flex items-center justify-center ml-4 p-2.5 px-6 border-2 border-solid rounded-md border-primary hover:text-primary dark:hover:text-primary-dark dark:border-primary-dark dark:bg-background-dark font-semibold w-40 cursor-pointer ">Get in touch</a>
			

			</div>
		</article>
		</main>
	)
}

