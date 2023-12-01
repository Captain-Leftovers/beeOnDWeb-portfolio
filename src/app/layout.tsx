
import './globals.css'
import { Montserrat } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

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
				{children}
			</body>
		</html>
	)
}
