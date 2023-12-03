import './globals.css'
import { Montserrat } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import FollowMe from '@/app/components/FollowMe'
import Footer from '@/app/components/Footer'
import HireMe from '@/app/components/HireMe'
import NavBar from '@/app/components/NavBar'

const mont = Montserrat({
	subsets: ['latin'],
	variable: '--mont',
})

export const metadata = {
	title: 'BeeOnDWeb Portfolio',
	description: 'Portfolio website created by BeeOnDWeb',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body
				className={`${mont.variable} font-sans flex flex-col min-h-screen items-center dark:bg-background-dark bg-background dark:text-text-dark text-text lg:px-20 overflow-y-scroll`}
			>
				<Toaster />
				<NavBar />

				{children}
				<div className="flex flex-col gap-4">
					<HireMe />
					<FollowMe />
				</div>
				<Footer />
			</body>
		</html>
	)
}
