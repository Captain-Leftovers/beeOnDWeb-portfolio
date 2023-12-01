'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'

type EmbedButtonProps = {
    embedLink?: string
}
export default function EmbedButton({
    embedLink,
}: EmbedButtonProps) {
	const [open, setOpen] = useState(false)

    

    if (!embedLink) {
        return null
    }

	return (
		<Dialog.Root>
			<Dialog.Trigger asChild>
				<button className="shadow-md w-20 whitespace-nowrap  sm:w-24 md:w-32 flex items-center justify-center py-0.5 sm:p-2.5 sm:px-6 border-2 border-solid rounded-md border-primary dark:border-primary-dark bg-primary dark:bg-primary-dark font-medium sm:font-semibold hover:bg-primary/90 dark:hover:bg-transparent transition disabled:opacity-50 disabled:cursor-not-allowed">
					Preview
				</button>
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0 z-50 backdrop-blur-sm" />
				<Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] h-full w-[90vw] max-w-7xl translate-x-[-50%] translate-y-[-50%] rounded-[6px] p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-50 bg-white">
					<iframe
						className="w-full h-full rounded-[6px]"
						src={embedLink}
					></iframe>
					<Dialog.Close asChild>
						<button
							className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
							aria-label="Close"
						>
							X
						</button>
					</Dialog.Close>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	)
}


// TODO add this to the github repo after test it on mobile