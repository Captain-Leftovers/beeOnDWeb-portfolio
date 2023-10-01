import ContactSection from "./components/ContactSection";


export const metadata = {
  title: 'Contact Me',
  description: 'Contact me page',
}

export default function Contact() {

    

return (
  <div className="flex flex-grow justify-center p-2 max-w-7xl w-full">
     <ContactSection />
  </div>
  )
}

//TODO : Add contact form
//TODO : Add contact info
//TODO : Add social media links (linkedin, github) not done for now
//TODO : fix mobile and tablet view!!!