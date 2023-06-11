import { GithubIcon, LinkedInIcon, TwitterIcon } from '@/components/Icons'

export default function FollowMe() {
	return (
		<section className="fixed flex items-center justify-center rotate-90 -right-10 top-1/2">
			<div className="relative px-6 py-2 rounded-md bg-accent before:content-[''] before:w-10 before:h-[1px]  before:absolute before:-right-10 before:top-1/2  before:-translate-y-1/2 before:bg-text ">Find me on</div>
            
			<a
				href="https://github.com/Captain-Leftovers"
				target="_blank"
				className="w-8 mr-4 -rotate-90 ml-14 hover:scale-110"
			>
				<GithubIcon />
			</a>
			<a
				href="https://www.linkedin.com/in/dobromir-ivanov-710136261/"
				target="_blank"
				className="w-8 mr-4 -rotate-90 hover:scale-110"
			>
				<LinkedInIcon />
			</a>

			<a
				href="https://twitter.com/BeeondwebIvanov"
				target="_blank"
				className="w-8 mr-4 -rotate-90 hover:scale-110"
			>
				<TwitterIcon />
			</a>
		</section>
	)
}
