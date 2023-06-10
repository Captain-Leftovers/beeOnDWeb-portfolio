import Link from 'next/link'
import { CircularSVG } from '@/components/Icons'

export default function HireMe() {
	return (
		<div className="fixed flex items-center justify-center overflow-hidden left-4 bottom-4">
      <div className='relative flex items-center justify-center w-48 h-auto'>
        <CircularSVG className={"fill-text animate-spin-slower "}/>
			<Link href="/" className="absolute flex items-center justify-center w-24 h-24 font-semibold transition-all duration-200 border border-solid rounded-full border-text bg-primary text-text hover:scale-110 active:scale-90">
				Hire Me
			</Link>
      </div>
		</div>
	)
}

//TODO : Add a link to the contact page or email me directly
