import Image from 'next/image'
import myPhoto from '#/one.png'

export default function PersonalPhotoCard() {
	return (
		<div className=" relative  w-full min-h-[400px]">
			<Image
				src={myPhoto}
				alt="myPhoto"
				fill
				style={{ objectFit: 'contain' }}
			/>
		</div>
	)
}
