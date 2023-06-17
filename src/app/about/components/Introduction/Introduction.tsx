import AboutMe from './AboutMe'
import PersonalPhotoCard from './PersonalPhotoCard'

export default function Introduction() {
	return (
		<article className=" flex  w-full    min-h-[80vh] py-8 ">
			<AboutMe />
			<PersonalPhotoCard />
		</article>
	)
}
