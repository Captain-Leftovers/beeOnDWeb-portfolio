'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavBar() {
	const pathname = usePathname()
	return (
		<header className="bg-background  dark:bg-background-dark bg-opacity-95 flex items-center justify-between max-w-screen-xl  w-full  py-8 font-medium  sticky top-0 z-50 ">
			<nav className=" mx-auto lg:mx-0">
				<Link href="/" className="relative mr-6 group">
					Home
					<span
						className={`absolute left-0 inline-block  h-[2px] -bottom-0.5 bg-accent dark:bg-accent-dark group-hover:w-full transition-[width] ease duration-300 ${
							pathname === '/' ? 'w-full' : 'w-0'
						} `}
					>
						&nbsp;
					</span>
				</Link>
				<Link href="/about" className="relative mr-6 group">
					About Me
					<span
						className={`absolute left-0 inline-block  h-[2px] -bottom-0.5 bg-accent dark:bg-accent-dark group-hover:w-full transition-[width] ease duration-300 ${
							pathname === '/about' ? 'w-full' : 'w-0'
						} `}
					>
						&nbsp;
					</span>
				</Link>
				<Link href="/projects" className="relative mr-6 group">
					Projects
					<span
						className={`absolute left-0 inline-block  h-[2px] -bottom-0.5 bg-accent dark:bg-accent-dark group-hover:w-full transition-[width] ease duration-300 ${
							pathname === '/projects' ? 'w-full' : 'w-0'
						} `}
					>
						&nbsp;
					</span>
				</Link>
				<Link href="/contact" className="relative group">
					Contact
					<span
						className={`absolute left-0 inline-block  h-[2px] -bottom-0.5 bg-accent dark:bg-accent-dark group-hover:w-full transition-[width] ease duration-300 ${
							pathname === '/contact' ? 'w-full' : 'w-0'
						} `}
					>
						&nbsp;
					</span>
				</Link>
			</nav>
		</header>
	)
}

//TODO : Add a hamburger menu for mobile devices or a dropdown menu or not at all maybe add logo
