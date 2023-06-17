import Image from 'next/image'
import laptop from '#/laptopBeeLog.png'

export default function BigProjCard() {
	return (
		<div className="w-1/2 bg-red-300 ">
			<div className="bg-accent  w-full max-w-screen-lg mx-auto aspect-video flex relative ">
				<div className=" w-full bg-yellow-300 ">
					<h1>BeeKeeper's Log</h1>
					<h2>React, Typescript, Prisma, TRPC</h2>
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
