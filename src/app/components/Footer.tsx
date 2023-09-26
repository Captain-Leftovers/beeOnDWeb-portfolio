import Link from 'next/link'

export default function Footer() {
	return (
		<footer className=' text-sm sm:text-md lg:text-lg  relative z-10 flex justify-around items-center p-2 max-w-screen-xl w-full '>
			<span className='text-center'>
				{new Date().getFullYear()} &copy; All Rights
				Reserved
			</span>
			<div className='text-center'>
				Build with{' '}
				<span className=''>&#9825;&nbsp;</span>
				by&nbsp;
				<span className=''>BeeOnDWeb</span>
			</div>
		</footer>
	)
}


//TODO : Add a link to the contact page or email me directly check all other links in footer