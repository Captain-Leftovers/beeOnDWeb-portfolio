'use client'

import { useState } from 'react'
import toast from 'react-hot-toast'

const initialState = {
	name: '',
	email: '',
	message: '',
}



export default function ContactForm() {
	const [blurred, setBlurred] = useState<boolean>(false)
	const [data, setData] = useState(initialState)
	const [isLoading, setIsLoading] = useState<boolean>(false)
	
	const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		try {
			setIsLoading(true)
			const response = await fetch('/api/send', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			})
			if (response.status === 200) {

				setData(initialState)
				setBlurred(false)
				toast.success(
					`Hey ${data.name}, your message was sent successfully!`
				)
			} else {
				toast.error(
					`Hey ${data.name}, something went wrong! ${response.status} ${response.statusText}`
				)
			}
		} catch (error) {
			
			console.log(error)

			toast.error(`Hey ${data.name}, something went wrong!`)
		}
		
		setIsLoading(false)
	}

	const handleOnBlur = () => {
		setBlurred(true)
	}

	return (
		<div className="flex-1 px-4">
			<form onSubmit={sendEmail} >
				<div className="text-lg">
					<div className="flex flex-col mb-4">
						<label
							htmlFor="name"
							className="mb-2 text-lg  text-text"
						>
							Name
						</label>
						<input
							onChange={(e) => {
								setData({ ...data, name: e.target.value })
							}}
							value={data.name}
							type="text"
							name="name"
							id="name"
							placeholder="Your name"
							onBlur={handleOnBlur}
							required={true}
							pattern="^[\p{L}\-' ]+$"
							className=" py-2 px-3 text-text bg-background-dark/50 rounded-md peer border-2 border-gray-200  p-2  focus:border-accent focus:outline-none hover:border-two transition-colors duration-500 ease-in-out"
						/>
						<span
							className={` text-red-500 text-xs opacity-0 pl-1 ${
								blurred ? 'opacity-100' : ''
							}  peer-valid:opacity-0`}
						>
							{'enter your name'}
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
							onChange={(e) => {
								setData({ ...data, email: e.target.value })
							}}
							type="text"
							value={data.email}
							name="email"
							id="email"
							onBlur={handleOnBlur}
							required={true}
							pattern="[^@\s]+@[^@\s]+"
							placeholder="Your email"
							className="py-2 px-3 text-text bg-background-dark/50 rounded-md peer border-2 border-gray-200  p-2  focus:border-accent focus:outline-none hover:border-two transition-colors duration-500 ease-in-out"
						/>
						<span
							className={` text-red-500 text-xs opacity-0 pl-1 ${
								blurred ? 'opacity-100' : ''
							}  peer-valid:opacity-0`}
						>
							{'enter your email'}
						</span>
					</div>
					<div className="flex flex-col mb-4">
						<label
							htmlFor="message"
							className="mb-2 text-lg text-text"
						>
							Message
						</label>
						<textarea
							onChange={(e) => {
								setData({ ...data, message: e.target.value })
							}}
							rows={10}
							value={data.message}
							name="message"
							required={true}
							id="message"
							placeholder="Say something..."
							className="py-2 px-3 text-text bg-background-dark/50 rounded-md peer border-2 border-gray-200  p-2  focus:border-accent focus:outline-none hover:border-two transition-colors duration-500 ease-in-out"
						/>
					</div>
					<button
						disabled = {isLoading}
						type="submit"
						className="bg-primary hover:bg-primary/90 text-text font-medium py-2 px-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
					>
						Send
					</button>
				</div>
			</form>
		</div>
	)
}
