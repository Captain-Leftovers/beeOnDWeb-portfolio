import AboutMe from './AboutMe'
import PersonalPhotoCard from './PersonalPhotoCard'

export default function Introduction() {
	return (
		<article className="">
			<div className="w-full py-8 space-y-4 lg:flex lg:flex-row">
				<PersonalPhotoCard />
				<AboutMe />
			</div>
		</article>
	)
}

