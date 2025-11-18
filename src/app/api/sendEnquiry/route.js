// import nodemailer from "nodemailer";
// import { NextResponse } from "next/server";

// export async function POST(req) {

//     try {
//         const data = await req.json();
//         const data2 = data.body;
//         const { name, email, message } = await data2;
//         // Create SMTP transporter
//         const transporter = nodemailer.createTransport({
//             host: process.env.SMTP_HOST, // e.g., smtp.gmail.com
//             port: process.env.SMTP_PORT, // 587
//             secure: false, // true if 465
//             auth: {
//                 user: process.env.SMTP_USER, // your email
//                 pass: process.env.SMTP_PASS, // your password or app password
//             },
//         });

//         // Send email
//         await transporter.sendMail({
//             from: `"${name}" <${email}>`,
//             to: process.env.SMTP_USER, // your email
//             subject: "New Inquiry from Contact Form",
//             text: message,
//             html: `<p><strong>Name:</strong> ${name}</p>
//                      <p><strong>Email:</strong> ${email}</p>
//                      <p><strong>Message:</strong> ${message}</p>`,
//         });

//         return new Response(
//             JSON.stringify({ message: "Inquiry sent successfully!" }),
//             { status: 200 }
//         );
//         // return NextResponse.json({ status: true, message: "Inquiry sent successfully!", data: savedContact });

//     } catch (error) {
//         console.error(error);
//         return new NextResponse(JSON.stringify({ error: "Failed to send inquiry" }), {
//             status: 500,
//         });
//         // NextResponse.json({ status: false, message: "Failed to send inquiry" });
//     }
// }

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

// POST /api/contact
export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, message, phone, service } = body.body || {};
        console.log("XXXXXX:=>", name, email, message)
        // Validate Input
        if (!name || !email || !message) {
            return NextResponse.json(
                { status: false, message: "All fields are required" },
                { status: 400 }
            );
        }

        // Validate Email Format
        // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // if (!emailRegex.test(email)) {
        //     return NextResponse.json(
        //         { status: false, message: "Invalid email format" },
        //         { status: 400 }
        //     );
        // }

        // Create SMTP transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: Number(process.env.SMTP_PORT) === 465, // true only if port 465
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Email options
        const mailOptions = {
            from: process.env.SMTP_USER,
            to: process.env.SMTP_USER,
            subject: "New Inquiry from Contact Form",
            html: `
        <h3>New Inquiry Received</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong><br>${phone}</p>
        <p><strong>Service:</strong><br>${service}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { status: true, message: "Inquiry sent successfully!" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Email Sending Error:", error);

        return NextResponse.json(
            { status: false, message: "Failed to send inquiry" },
            { status: 500 }
        );
    }
}
