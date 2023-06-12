import SkillsTree from "./SkillsTree";


export default function Skills() {
	return (
		<section className=" w-full flex flex-col justify-center items-center bg-amber-600 mt-20 ">
			<h1 className="text-6xl">Skills</h1>
            <SkillsTree />
		</section>
	)
}
