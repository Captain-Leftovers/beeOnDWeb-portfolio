import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'
import Divider from './Divider'
import SectionTitle from './SectionTitle'

export default function ContactSection() {
	return (
		<div className="flex flex-col gap-14  mt-10 w-full">
			<SectionTitle />
			<div className='flex w-full'>
				<ContactInfo />
                <Divider/>
				<ContactForm />
			</div>
		</div>
	)
}
