import Image from 'next/image'
import myPhoto from '#/myPhoto.png'

export default function PersonalPhotoCard() {
	return (
		<div className=" relative  col-span-4">
			<Image
				src={myPhoto}
				alt="myPhoto"
				fill
				style={{ objectFit: 'contain' }}
			/>
		</div>
	)
}
