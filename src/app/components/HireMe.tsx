import Link from 'next/link'
import { CircularSVG, CircularText } from '@/components/Icons'

export default function HireMe() {
	return (
		<div className="fixed flex items-center justify-center overflow-hidden left-8 bottom-8">
      <div className='relative flex items-center justify-center w-48 h-auto'>
        <CircularText className={"fill-text animate-spin-slower "}/>
			<Link href="/" className="absolute flex items-center justify-center w-24 h-24 font-semibold transition-all duration-200 border border-solid rounded-full border-text bg-primary text-text hover:scale-105 active:scale-100">
				Hire Me
			</Link>
      </div>
		</div>
	)
}

//TODO : Add a link to the contact page or email me directly and fix it not fire on every change
