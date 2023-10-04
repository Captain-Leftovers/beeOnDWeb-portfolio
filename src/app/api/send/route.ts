import { EmailTemplate } from '../../../components/EmailTemplate'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_TEST)
console.log('resend', resend)

export async function POST(request: Request) {
	const body = await request.json()
	const { name, email, message } = body

  let data;
  try{

    data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['lalilulelo.mg@gmail.com'],
      subject: 'Portfolio Contact Form Message',
      text: message,
      react: EmailTemplate({ name, senderEmail: email, message}),
    })
  }
  catch(e: unknown){
    console.log('e', e);
    
    return NextResponse.json({ error: e });
  }

  console.log('data', data);

  return NextResponse.json(data);
}
