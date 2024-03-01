import { client } from "../../../../Services/MongoDB_Routines";
import { NextResponse } from "next/server";
import WelcomeEmail from "../../../../Components/EmailTemplate/EmailDesing";
import { Resend } from 'resend';

const resend = new Resend('re_KfFPsP3x_2hRQrLkgKYcgPUudc87ReVc7');

export async function POST(request) {
    try{
        const {firstname, lastname, email, schoolname} = await request.json();
        if (!firstname || !lastname || !email) {
            return NextResponse.json({status: 400, message: "Missing required fields."});
        }
        const {data,error} = await resend.emails.send({
            from: "UniChat <onboarding@resend.dev>",
            to: email,
            subject: "Welcome to Unichat",
            react: WelcomeEmail({schooladminFirstname: firstname, schooladminLname: lastname, schoolname: schoolname})
            });
        
         if(error === null){
            return NextResponse.json({status: 200, message: "Email sent successfully."});
         }
        else{
            return NextResponse.json({status: 500, message: "Email not sent successfully."});
        }

         
    }
    catch(err){
        return NextResponse.json({status: 500, message: err});
    }
}