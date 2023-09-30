import { CallSVG, LocationSVG, MailSVG } from "@/components/Icons";
import InfoBlock from "./InfoBlock";


export default function ContactInfo() {

    

return (
  <div className="flex-1 px-4 space-y-10 flex flex-col justify-center">
     <InfoBlock icon={<CallSVG className=""/>} textInfo="+61 414 083 591" />
     <InfoBlock icon={<MailSVG className="p-3"/>} textInfo="beeondweb@gmail.com" />
     <InfoBlock icon={<LocationSVG className="p-3"/>} textInfo="Marrickville, Sydney" />
  </div>
  )
}

//TODO : Add correct icons