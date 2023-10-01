'use client'

import { useState } from 'react'

export default function ContactForm() {
	const [blurred, setBlurred] = useState<boolean>(false)

	const handleOnBlur = () => {
		setBlurred(true)
	}

	return (
		<div className="flex-1 px-4">
			<form>
				<div className="text-lg">
					<div className="flex flex-col mb-4">
						<label
							htmlFor="name"
							className="mb-2 text-lg  text-text"
						>
							Name
						</label>
						<input
							type="text"
							name="name"
							id="name"
							placeholder="Your name"
							onBlur={handleOnBlur}
							required = {true}
							pattern='^[a-zA-Z ]{3,30}$'
							className=" py-2 px-3 text-text bg-background-dark/50 rounded-md peer border-2 border-gray-200  p-2  focus:border-accent focus:outline-none hover:border-two transition-colors duration-500 ease-in-out"

						/>
						<span
							className={` text-red-500 text-xs opacity-0 pl-1 ${
								blurred ? 'opacity-100' : ''
							}  peer-valid:opacity-0`}
						>
							{/* TODO add error messages */}
						</span>
					</div>
					<div className="flex flex-col mb-4">
						<label
							htmlFor="email"
							className="mb-2 text-lg text-text "
						>
							Email
						</label>
						<input
							type="text"
							name="email"
							id="email"
							placeholder="Your email"
							className="border py-2 px-3 text-text rounded-md  bg-background-dark/50"
						/>
					</div>
					<div className="flex flex-col mb-4">
						<label
							htmlFor="message"
							className="mb-2 text-lg text-text"
						>
							Message
						</label>
						<textarea
							rows={10}
							name="message"
							id="message"
							placeholder="Say something..."
							className="border py-2 px-3 text-text rounded-md  bg-background-dark/50"
						/>
					</div>
					<button
						type="submit"
						className="bg-primary text-text py-2 px-4 rounded-md"
					>
						Send
					</button>
				</div>
			</form>
		</div>
	)
}
