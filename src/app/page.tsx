import { LaptopSVG } from "@/components/Icons";

export default function Home() {
	return (
		<main className="flex items-center justify-center bg-background grow">
		<div className="w-1/2 bg-blue-400 ">
			<LaptopSVG className="w-full h-auto" />
		</div>

		<article className="flex flex-col">
			<h1 className="self-center text-4xl font-medium ">Hi there!</h1>
			<p className="text-center ">I'm <span className="text-2xl font-medium text-primary">Dob</span>,<br/> Full Stack Programmer and Web Developer,<br/> fusing cutting-edge technology with your visions.</p>
			<div className="flex items-center justify-center w-full mt-4">
				<a download href='/resume.pdf'  className="flex items-center p-2.5 px-6 border-2 border-solid rounded-md border-primary bg-primary font-semibold hover:bg-secondary">Resume</a>
				<a className="flex items-center ml-4 p-2.5 px-6 border-2 border-solid rounded-md border-secondary font-semibold bg-secondary ">Contact</a>

			</div>
		</article>
		</main>
	)
}


//TODO : add contact href