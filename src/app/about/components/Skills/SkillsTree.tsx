import SkillCard from "./SkillCard"
import NextJsSVG from "./NextJsSVG";
import CssSVG from "./CssSVG"
import JavaScriptSVG from "./JavaScriptSVG"
import HtmlSVG from "./HtmlSVG"
import ReactSVG from "./ReactSVG"
import TypeScriptSVG from "./TypeScriptSVG";
import TrpcSVG from "./TrpcSVG";
import SqlSVG from "./SqlSVG";
import PrismaSVG from "./PrismaSVG";
import TailwindSVG from "./TailwindSVG";
import GitSVG from "./GitSVG";
import NodJsSVG from "./NodeJsSVG";


export default function SkillsTree() {
	console.log();
	
	return (
		<div className="my-10 w-full grid gap-10 lg:grid-cols-4 justify-items-center md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
			<SkillCard svgIcon={<HtmlSVG/>} text='HTML'/>
			<SkillCard svgIcon={<CssSVG/>} text='CSS'/>
			<SkillCard svgIcon={<TailwindSVG/>} text='Tailwind CSS'/>
			<SkillCard svgIcon={<JavaScriptSVG/>} text='JavaScript'/>
			<SkillCard svgIcon={<TypeScriptSVG/>} text='TypeScript'/>
			<SkillCard svgIcon={<ReactSVG/>} text='React'/>
			<SkillCard svgIcon={<NextJsSVG/>} text='Next JS'/>
			<SkillCard svgIcon={<TrpcSVG/>} text='TRPC'/>
			<SkillCard svgIcon={<PrismaSVG/>} text='Prisma'/>
			<SkillCard svgIcon={<SqlSVG/>} text='SQL'/>
			<SkillCard svgIcon={<GitSVG/>} text='GIT'/>
			<SkillCard svgIcon={<NodJsSVG/>} text='Node JS'/>
		</div>
	)
}

//TODO : maybe put lights on top of the art frames for skills that shine light on the art frames and put labels below

//TODO : make art frame for skills and display them if you cant just use photos i guess midjourney can create photos with ?JS logo maybe