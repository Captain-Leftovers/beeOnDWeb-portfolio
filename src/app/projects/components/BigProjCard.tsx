import Image from 'next/image'
import laptop from '#/laptopBeeLog.png'

export default function BigProjCard() {
	return (
		<div className="w-1/2  ">
			<div className=" bg-accent/40  w-full max-w-screen-lg mx-auto aspect-video flex relative ">
				<span className='absolute'>
					//TODO :  make this a line  for astetic purposes
				</span>
				<div className=" w-1/2  flex flex-col justify-center pl-8 gap-6">
					<h2 className='text-2xl'>Build with : React, Typescript, Prisma, TRPC</h2>
					<h1 className='text-4xl'>BeeKeeper&apos;s Log</h1>
					<section>
					<p>Track hive health</p>
					<p>Store information related to hive inspection</p>

					</section>
				</div>
				<div className='absolute -right-20 -bottom-20 w-2/3'>
					<picture className="">
						<Image
							className=""
							src={laptop}
							alt="laptop"
						/>
					</picture>
				</div>
			</div>
		</div>
	)
}

//TODO : Add image //TODO : add text description
// elements
