import { EmailTemplate } from '../../../components/EmailTemplate'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
console.log("resend", resend);

export async function POST(request: Request) {
    const body = await request.json()
    console.log("body", body);
    const { name, email, message} = body

		const data = await resend.emails.send({

			from: email,
			to: ['beeondweb@gmail.com'],
			subject: 'Portfolio Contact Form',
      text: message,
			react: EmailTemplate({ name: name }),
		})

    console.log("data", data);
    


}
