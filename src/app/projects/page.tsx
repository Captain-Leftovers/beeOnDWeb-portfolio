import BigProjCard from './components/BigProjCard'
import beeLogLaptop from '#/laptopBeeLog.png'
import mySpotLaptop from '#/laptopMySpot.png'
import multyCms from '#/multy-cms .png'
import bahamataLaptop from '#/laptopBahamata.png'
import laptopEcommerce from '#/laptopEcommerce.png'
import laptopAdminDash from '#/laptopAdminDash.png'

export const metadata = {
	title: 'Projects',
	description: 'Projects page',
}

export default function Projects() {
	return (
		<main className="w-full xl:max-w-screen-xl space-y-28 pt-10 pb-20 overflow-hidden">
			<div className="w-full">
				<h1 className="text-2xl mx-auto p-4 sm:text-4xl font-medium text-center xl:max-w-screen-lg ">
					Exploring the intersection of technology and creativity.
				</h1>
			</div>
			<BigProjCard
				buildWith="Build with : NextJs, Zustand"
				name="Bahamata Service"
				description={[
					'Motorcycle repair service',
					'Control motorcycles for sale through CMS',
				]}
				client={true}
				imageSrc={bahamataLaptop}
				cardColor="bg-green-100"
				githubLink="https://github.com/Captain-Leftovers/motorcycle-repair-shop-next14"
				liveLink="https://www.bahamataservice.com/"
				loading="eager"
				priority={true}
			/>
			<BigProjCard
				buildWith="Build with : NextJs, Shadcn, Cloudinary"
				name="Multy-CMS"
				description={[
					'CMS for multiple websites',
					'Give access to clients to edit their own website',
				]}
				client={true}
				imageSrc={multyCms}
				cardColor="bg-amber-100"
				githubLink="https://github.com/Captain-Leftovers/multi-web-cms-next14"
				liveLink="https://scribehow.com/embed/Preview_the_Multy-Web-CMS_features__h0U6x42fSLyS30GEU9hlUA?skipIntro=true"
				demo={true}
				loading="eager"
				priority={true}
			/>
			<BigProjCard
				buildWith="Build with : React, Tailwind, Supabase, PostgreSQL, Stripe"
				name="My Spot"
				description={[
					'Upload Songs',
					'Listen to songs',
					'Monthly Subscription',
				]}
				imageSrc={mySpotLaptop}
				cardColor="bg-blue-100"
				githubLink="https://github.com/Captain-Leftovers/my-spot"
				liveLink="https://my-spot.vercel.app/"
				loading="eager"
				priority={true}
			/>
			<BigProjCard
				buildWith="Build with : Next.js 13, React, Tailwind, Prisma"
				name="Art Eccomerce"
				description={[
					'Browse and buy art',
					'Search for art by category',
				]}
				imageSrc={laptopEcommerce}
				githubLink="https://github.com/Captain-Leftovers/Ecommerce-Store"
				cardColor="bg-green-100  dark:bg-amber-100"
				liveLink="https://ecom-art-store.vercel.app/"
			/>

			<BigProjCard
				buildWith="Build with : Next.js 13, Tailwind, Prisma, MySQL"
				name="Admin Dashboard"
				description={[
					'Control multiple stores through this single CMS',
				]}
				imageSrc={laptopAdminDash}
				githubLink="https://github.com/Captain-Leftovers/ecommerce-admin-dashboard"
				cardColor="bg-amber-100  dark:bg-amber-200"
				liveLink="https://dash-cms.vercel.app/"
			/>

			<BigProjCard
				buildWith="Build with : Go, HTMX"
				name="BeeKeeper's Log"
				description={['Development in progress...']}
				inProgress={true}
				imageSrc={beeLogLaptop}
				cardColor="bg-blue-100"
				githubLink=""
				liveLink=""
			/>
		</main>
	)
}
