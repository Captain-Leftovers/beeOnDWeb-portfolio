import Link from 'next/link'

export default function Footer() {
	return (
		<footer className='relative z-10 flex justify-between py-2 max-w-screen-2xl w-full '>
			<span>
				{new Date().getFullYear()} &copy; All Rights
				Reserved
			</span>
			<div className=''>
				Build with{' '}
				<span className='text-lg'>&#9825;&nbsp;</span>
				by&nbsp;
				<span className=''>BeeOnDWeb</span>
			</div>
		</footer>
	)
}


//TODO : Add a link to the contact page or email me directly check all other links in footer