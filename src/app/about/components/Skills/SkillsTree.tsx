'use client'

import SkillCard from './SkillCard'
import NextJsSVG from './NextJsSVG'
import CssSVG from './CssSVG'
import JavaScriptSVG from './JavaScriptSVG'
import HtmlSVG from './HtmlSVG'
import ReactSVG from './ReactSVG'
import TypeScriptSVG from './TypeScriptSVG'
import TrpcSVG from './TrpcSVG'
import SqlSVG from './SqlSVG'
import PrismaSVG from './PrismaSVG'
import TailwindSVG from './TailwindSVG'
import GitSVG from './GitSVG'
import NodJsSVG from './NodeJsSVG'
import { motion } from 'framer-motion'

const container = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.08,
		},
	},
}

const item = {
	hidden: { opacity: 0, y: 30 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.4,
		},
	},
}

export default function SkillsTree() {

	
	//TODO make the animation happen only while in view

	return (
		<motion.div
			variants={container}
			initial="hidden"
			whileInView="show"
			viewport={{
				once: true,
			}}
			className="my-10 w-full grid gap-6 lg:grid-cols-4 justify-items-center md:grid-cols-3 sm:grid-cols-2 grid-cols-2"
		>
			<motion.div variants={item}>
				<SkillCard svgIcon={<HtmlSVG />} text="HTML" />
			</motion.div>
			<motion.div variants={item}>
				<SkillCard svgIcon={<CssSVG />} text="CSS" />
			</motion.div>
			<motion.div variants={item}>
				<SkillCard svgIcon={<TailwindSVG />} text="Tailwind CSS" />
			</motion.div>
			<motion.div variants={item}>
				<SkillCard svgIcon={<JavaScriptSVG />} text="JavaScript" />
			</motion.div>
			<motion.div variants={item}>
				<SkillCard svgIcon={<TypeScriptSVG />} text="TypeScript" />
			</motion.div>
			<motion.div variants={item}>
				<SkillCard svgIcon={<ReactSVG />} text="React" />
			</motion.div>
			<motion.div variants={item}>
				<SkillCard svgIcon={<NextJsSVG />} text="Next JS" />
			</motion.div>
			<motion.div variants={item}>
				<SkillCard svgIcon={<TrpcSVG />} text="TRPC" />
			</motion.div>
			<motion.div variants={item}>
				<SkillCard svgIcon={<PrismaSVG />} text="Prisma" />
			</motion.div>
			<motion.div variants={item}>
				<SkillCard svgIcon={<SqlSVG />} text="SQL" />
			</motion.div>
			<motion.div variants={item}>
				<SkillCard svgIcon={<GitSVG />} text="GIT" />
			</motion.div>
			<motion.div variants={item}>
				<SkillCard svgIcon={<NodJsSVG />} text="Node JS" />
			</motion.div>
		</motion.div>
	)
}
