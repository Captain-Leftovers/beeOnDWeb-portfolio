import BigProjCard from './components/BigProjCard'
import beeLogLaptop from '#/laptopBeeLog.png'
import mySpotLaptop from '#/laptopMySpot.png'


export const metadata = {
	title: 'Projects',
	description: 'Projects page',
}

export default function Projects() {
	return (
		<main className="w-full xl:max-w-screen-xl space-y-28 py-10">
			<div className='w-full'>
				<h1 className="text-2xl mx-auto p-4 sm:text-6xl text-center font-medium xl:max-w-screen-lg ">
					Exploring the intersection of technology
					and creativity.
				</h1>
			</div>

			<BigProjCard 
			buildWith='Build with : React, Typescript, Prisma, TRPC'  
			name='BeeKeeper&apos;s Log'
			description={['Track hive health','Store information about your hive inspections']}
			imageSrc={mySpotLaptop}
			cardColor='bg-blue-100'
			githubLink='https://github.com/Captain-Leftovers/my-spot'
			liveLink='https://my-spot.vercel.app/'
			/>
				<BigProjCard 
			buildWith='Build with : React, Typescript, Prisma, TRPC'  
			name='BeeKeeper&apos;s Log'
			description={['Track hive health','Store information about your hive inspections']}
			imageSrc={beeLogLaptop}
			githubLink=''
			cardColor='bg-green-100  dark:bg-amber-100'

			

			/>

	//TODO : add all projects and link and maybe see the order

			<BigProjCard 
			buildWith='Build with : React, Typescript, Prisma, TRPC'  
			name='BeeKeeper&apos;s Log'
			description={['Track hive health','Store information about your hive inspections']}
			imageSrc={beeLogLaptop}
			cardColor='bg-amber-100  dark:bg-amber-200'
			
			githubLink='https://github.com/Captain-Leftovers/Captain-Leftovers-bee-log-react-trpc-prisma-postgresql-'
			liveLink='https://beekeeperslog.com'
			/>
			
		</main>
	)
}


//TODO : add all projects and hotos