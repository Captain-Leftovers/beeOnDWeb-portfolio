import { GithubIcon, LinkedInIcon, XSVG } from '@/components/Icons'

export default function FollowMe() {
	return (
		<section className="xl:fixed flex items-center justify-center xl:rotate-90  xl:-right-24 xl:top-1/2">
			<div className="relative px-6 py-2 rounded-md bg-accent dark:bg-accent-dark before:content-[''] before:w-10 before:h-[1px]  before:absolute before:-right-10 before:top-1/2  before:-translat e-y-1/2 before:bg-text dark:before:bg-text-dark whitespace-nowrap ">
				Find me on
			</div>

			<a
				href="https://github.com/Captain-Leftovers"
				target="_blank"
				className="w-8 mr-4  ml-14 hover:scale-110 xl:-rotate-90"
			>
				<GithubIcon />
			</a>
			<a
				href="https://www.linkedin.com/in/dobromir-ivanov-710136261/"
				target="_blank"
				className="w-8 mr-4 hover:scale-110 xl:-rotate-90"
			>
				<LinkedInIcon />
			</a>

			<a
				href="https://twitter.com/lalilulelo_mg"
				target="_blank"
				className="w-8 mr-4  hover:scale-110 xl:-rotate-90"
			>
				<XSVG />
			</a>
		</section>
	)
}
