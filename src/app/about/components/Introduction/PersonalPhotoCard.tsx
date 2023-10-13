import Image from 'next/image'
import myPhoto from '#/one.png'

export default function PersonalPhotoCard() {
	return (
		<div className="sm:basis-1/2 relative  w-full min-h-[400px]">
			<Image
				src={myPhoto}
				alt="myPhoto"
				loading="eager"
				style={{ objectFit: 'contain' }}
				priority
			/>
		</div>
	)
}
