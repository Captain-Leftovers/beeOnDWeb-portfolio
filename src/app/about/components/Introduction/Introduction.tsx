import AboutMe from './AboutMe'
import PersonalPhotoCard from './PersonalPhotoCard'

export default function Introduction() {
	return (
		<article className="grid w-full grid-cols-8 gap-16 min-h-[80vh] py-8 ">
			<AboutMe />
			<PersonalPhotoCard />
		</article>
	)
}
