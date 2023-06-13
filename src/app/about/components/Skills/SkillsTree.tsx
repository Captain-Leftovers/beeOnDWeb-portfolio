import Image from "next/image";
import js from '#/javascript.png'

export default function SkillsTree() {
	return (
		<div className="mt-10 w-full flex items-center justify-center">
			<div className='w-40'>
			 <Image src={js} alt="javascript" />
			</div>
		</div>
	)
}

//TODO : maybe put lights on top of the art frames for skills that shine light on the art frames and put labels below

//TODO : make art frame for skills and display them if you cant just use photos i guess midjourney can create photos with ?JS logo maybe