'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MoonIcon, SunIcon } from '@/components/Icons'
import useThemeSwitcher from '@/hooks/useThemeSwitcher'

export default function NavBar() {

	const [mode , toggleTheme ]  = useThemeSwitcher( ) 

	const pathname = usePathname()
	return (
		<header className="bg-background dark:bg-background-dark bg-opacity-95 flex items-center justify-between max-w-screen-xl  w-full  py-8 font-medium  sticky top-0 z-50 ">
			<nav className="">
				<Link href="/" className="relative mr-6 group">
					Home
					<span
						className={`absolute left-0 inline-block  h-[2px] -bottom-0.5 bg-accent dark:bg-accent-dark group-hover:w-full transition-[width] ease duration-300 ${
							pathname === '/'
								? 'w-full'
								: 'w-0'
						} `}
					>
						&nbsp;
					</span>
				</Link>
				<Link
					href="/about"
					className="relative mr-6 group"
				>
					Learn about me
					<span
						className={`absolute left-0 inline-block  h-[2px] -bottom-0.5 bg-accent dark:bg-accent-dark group-hover:w-full transition-[width] ease duration-300 ${
							pathname === '/about'
								? 'w-full'
								: 'w-0'
						} `}
					>
						&nbsp;
					</span>
				</Link>
				<Link
					href="/projects"
					className="relative group"
				>
					Projects
					<span
						className={`absolute left-0 inline-block  h-[2px] -bottom-0.5 bg-accent dark:bg-accent-dark group-hover:w-full transition-[width] ease duration-300 ${
							pathname === '/projects'
								? 'w-full'
								: 'w-0'
						} `}
					>
						&nbsp;
					</span>
				</Link>
			</nav>
			<nav className="flex">
				<button  className="w-8" 
					onClick={toggleTheme as ()=> void }

					
				>
					{mode === 'dark' ? (
						<MoonIcon />
					) : (

					<SunIcon />
					)}
				</button>
			</nav>
		</header>
	)
}

//TODO : Add a hamburger menu for mobile devices or a dropdown menu or not at all maybe add logo
