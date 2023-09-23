import Introduction from './components/Introduction/Introduction'
import Skills from './components/Skills/Skills'

export const metadata = {
	title: 'About',
	description: 'About page',
}

export default function page() {
	return (
		<main className="flex flex-col items-center justify-center grow  p-2 max-w-7xl">
			<Introduction />
			<Skills />
		</main>
	)
}
