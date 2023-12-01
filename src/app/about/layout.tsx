import FollowMe from '@/app/components/FollowMe'
import Footer from '@/app/components/Footer'
import HireMe from '@/app/components/HireMe'
import NavBar from '@/app/components/NavBar'

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
		<>
			<NavBar />
			{children}
			<div className="flex flex-col gap-4">
				<HireMe />
				<FollowMe />
			</div>
			<Footer />
		</>
	)
}
