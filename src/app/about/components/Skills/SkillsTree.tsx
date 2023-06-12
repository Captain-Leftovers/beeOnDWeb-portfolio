import { JSSVG, TreeSVG } from '@/components/Icons'

export default function SkillsTree() {
	return (
		<div className="mt-10 w-full flex items-center justify-center">
			<div className='relative  bg-green-900'>
				<TreeSVG className="w-[70vh]" />
                <JSSVG className='absolute top-14 left-28 w-10' />
			</div>
		</div>
	)
}



//TODO : make art frame for skills and display them if you cant just use photos i guess midjourney can create photos with ?JS logo maybe