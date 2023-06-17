import FollowMe from './components/FollowMe'
import Footer from './components/Footer'
import HireMe from './components/HireMe'
import NavBar from './components/NavBar'
import './globals.css'
import { Montserrat } from 'next/font/google'

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
				className={`${mont.variable} font-sans flex flex-col min-h-screen items-center dark:bg-background-dark bg-background dark:text-text-dark text-text`}
			>
				<FollowMe />
				<HireMe />
				<NavBar />
				{children}
				<Footer />
			</body>
		</html>
	)
}
