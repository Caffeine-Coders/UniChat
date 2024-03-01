import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";

function capitalize(s) 
{
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function WelcomeEmail({ schooladminFirstname, schooladminLname, schoolname }) {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";

    const fname = capitalize(schooladminFirstname);
    const lname = capitalize(schooladminLname);
    const school = capitalize(schoolname);

  return (
        <div style={container}>
          <img
            src={"https://fetizif.stripocdn.email/content/guids/CABINET_de689a1ba63d4b3ecdb42b5808f9f5dfc7f00f01771480d1e24d8485b574ca9a/images/untitled_design.png"}
            width="800"
            height="800"
            alt="UniChat"
            style={logo}
          />
          <p style={paragraph}>Hi {fname} {lname},</p>
          <p style={paragraph}>
            🎉 Welcome to UniChat, {school}! 🎉 <br/>
            We are thrilled to have you join our vibrant community of learners and educators. At UniChat, we believe in fostering collaboration, communication, and creativity to elevate your educational journey to new heights.
            <br/>
            <br/>
            Get ready to unlock a world of possibilities as you connect with fellow students, teachers, and staff in real-time conversations. Whether it's discussing assignments, sharing resources, or organizing group projects, UniChat is your go-to platform for seamless communication.
            <br/>
            <br/>
            But wait, there's more! 🚀
            <br/>
            
            With UniChat, you'll enjoy innovative features designed to streamline your school experience. From interactive classrooms to personalized study groups, our platform is packed with tools to enhance your learning environment and make education more engaging than ever before.
            <br/>
            So, dive in, explore, and make yourself at home in our digital community. We can't wait to see the amazing conversations, collaborations, and connections that unfold within our chat rooms.
            <br/>
            <br/>
            Welcome aboard, {school}! Let's chat, learn, and grow together! 🌟
            <br/>
         
          </p>
          <div style={btnContainer}>
            <a href="http://localhost:3000/" style={button}>
              Get started
            </a>
          </div>
          <p style={paragraph}>
             Warm regards,
            <br />
            UniChat Team
          </p>
          <hr style={hr} />
          <p style={footer}>
            You are receiving this email because you signed up for UniChat. If you
            did not sign up, please ignore this email.
          </p>
        </div>

  );
}

export default  WelcomeEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center",
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center",
  display: "inline-block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};

// import React from 'react';

// const WelcomeEmail = ({ firstName, lastname, schoolname }) => (
//   <div>
//     <h1>Welcome, {firstName}!</h1>
//   </div>
// );

// export default WelcomeEmail;
