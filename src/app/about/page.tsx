import Introduction from './components/Introduction/Introduction'
import Skills from './components/Skills/Skills'

export default function page() {
	return (
		<main className="flex flex-col items-center justify-center bg-blue-200 grow px-80 ">
			{/* <Introduction /> */}
			<Skills />
		</main>
	)
}
