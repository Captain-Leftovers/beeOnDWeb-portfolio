import Link from 'next/link'
import { CircularText } from '@/components/Icons'

export default function HireMe() {
	return (
		<div className="lg:fixed flex items-center justify-center overflow-hidden lg:left-4 lg:bottom-4">
      <div className='relative flex items-center justify-center w-48 h-auto'>
        <CircularText className={"fill-text dark:fill-text-dark animate-spin-slower "}/>
			<Link href="/" className="absolute flex items-center justify-center w-24 h-24 font-semibold transition-all duration-200  rounded-full dark:bg-primary-dark  bg-primary dark:text-text-dark text-text hover:scale-105 active:scale-100">
				Hire Me
			</Link>
      </div>
		</div>
	)
}

//TODO : Add a link to the contact page or email me directly and fix it not fire on every change
