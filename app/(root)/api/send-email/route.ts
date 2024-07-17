import { sendEmail } from "@/app/utilities/email";

// Define types for incoming request data
interface Sender {
    name: string;
    email: string;
}

interface Recipient {
    name: string;
    email: string;
}

interface EmailRequest {
    sender: Sender;
    recipient: Recipient[];
    subject: string;
    body: string;
}

export async function POST(req: Request) {
    const data = await req.json();

    const { sender, recipient, subject, body } = data;

    const formattedSender = {
        name: sender.name,
        address: sender.email,
    };

    const formattedRecipients = recipient.map(({ name, email }: Recipient) => ({
        name,
        address: email,
    }));

    try {
        const result = await sendEmail({
            sender: formattedSender,
            recipient: formattedRecipients,
            subject,
            message: body,
        });
        console.log("Email sent successfully", result);
        return Response.json({
            accepted: result.accepted,
        });
    } catch (error) {
        console.error("Error sending email:", error);
        return new Response("Failed to send email", { status: 500 });
    }
}
