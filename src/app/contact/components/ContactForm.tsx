export default function ContactForm() {
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
							className="border py-2 px-3 text-text bg-background-dark/50 rounded-md"
						/>
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
