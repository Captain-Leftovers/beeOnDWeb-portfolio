'use client'

import SkillCard from './SkillCard'
import NextJsSVG from './NextJsSVG'
import AlpineSVG from './AlpineSVG'
import HtmxSVG from './HtmxSVG'
import CssSVG from './CssSVG'
import JavaScriptSVG from './JavaScriptSVG'
import HtmlSVG from './HtmlSVG'
import ReactSVG from './ReactSVG'
import TypeScriptSVG from './TypeScriptSVG'
import GoSVG from './GoSVG'
import TrpcSVG from './TrpcSVG'
import SqlSVG from './SqlSVG'
import PrismaSVG from './PrismaSVG'
import DockerSVG from './DockerSVG'
import TailwindSVG from './TailwindSVG'
import GitSVG from './GitSVG'
import NodJsSVG from './NodeJsSVG'
import { motion } from 'framer-motion'
import SvelteSVG from './SvelteSVG'
import Affinity_Designer from './AffinityDesignerSVG'
import AffinityPhotoSVG from './AffinityPhotoSVG'
import FigmaSVG from './FigmaSVG'

const item = {
	hidden: { opacity: 0, y: 30 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
		},
	},
}

export default function SkillsTree() {
	return (
		<div className="grid w-full grid-cols-2 gap-6 my-10 lg:grid-cols-4 justify-items-center md:grid-cols-3 sm:grid-cols-2">
			<motion.div
				variants={item}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
			>
				<SkillCard svgIcon={<HtmlSVG />} text="HTML" />
			</motion.div>
			<motion.div
				variants={item}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
			>
				<SkillCard svgIcon={<CssSVG />} text="CSS" />
			</motion.div>
			<motion.div
				variants={item}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
			>
				<SkillCard svgIcon={<TailwindSVG />} text="Tailwind" />
			</motion.div>
			<motion.div
				variants={item}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
			>
				<SkillCard svgIcon={<JavaScriptSVG />} text="JavaScript" />
			</motion.div>
			<motion.div
				variants={item}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
			>
				<SkillCard svgIcon={<TypeScriptSVG />} text="TypeScript" />
			</motion.div>

			<motion.div
				variants={item}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
			>
				<SkillCard svgIcon={<GoSVG />} text="Go" />
			</motion.div>

			<motion.div
				variants={item}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
			>
				<SkillCard svgIcon={<ReactSVG />} text="React" />
			</motion.div>
			<motion.div
				variants={item}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
			>
				<SkillCard svgIcon={<NextJsSVG />} text="Next JS" />
			</motion.div>
			<motion.div
				variants={item}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
			>
				<SkillCard svgIcon={<SvelteSVG />} text="Svelte" />
			</motion.div>
			<motion.div
				variants={item}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
			>
				<SkillCard svgIcon={<AlpineSVG />} text="Alpine JS" />
			</motion.div>
			<motion.div
				variants={item}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
			>
				<SkillCard svgIcon={<HtmxSVG />} text="HTMX" />
			</motion.div>
			<motion.div
				variants={item}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
			>
				<SkillCard svgIcon={<TrpcSVG />} text="TRPC" />
			</motion.div>
			<motion.div
				variants={item}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
			>
				<SkillCard svgIcon={<PrismaSVG />} text="Prisma" />
			</motion.div>
			<motion.div
				variants={item}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
			>
				<SkillCard svgIcon={<SqlSVG />} text="SQL" />
			</motion.div>
			<motion.div
				variants={item}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
			>
				<SkillCard svgIcon={<GitSVG />} text="GIT" />
			</motion.div>
			<motion.div
				variants={item}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
			>
				<SkillCard svgIcon={<NodJsSVG />} text="Node JS" />
			</motion.div>
			<motion.div
				variants={item}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
			>
				<SkillCard svgIcon={<DockerSVG />} text="Docker" />
			</motion.div>
			<motion.div
				variants={item}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
			>
				<SkillCard
					svgIcon={<AffinityPhotoSVG />}
					text="Affinity Photo"
				/>
			</motion.div>
			<motion.div
				variants={item}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
			>
				<SkillCard
					svgIcon={<Affinity_Designer />}
					text="Affinity Designer"
				/>
			</motion.div>
			<motion.div
				variants={item}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
			>
				<SkillCard
					svgIcon={<FigmaSVG />}
					text="Figma"
				/>
			</motion.div>
		</div>
	)
}
