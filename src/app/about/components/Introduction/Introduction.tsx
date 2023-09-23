import AboutMe from './AboutMe'
import PersonalPhotoCard from './PersonalPhotoCard'

export default function Introduction() {
	return (
		<article className=" flex flex-col w-full min-h-[80vh] py-8 lg:flex-row">
			<AboutMe />
			<PersonalPhotoCard />
		</article>
	)
}




//TODO :  fix tablet and mobile view photo not sitting on bottom
