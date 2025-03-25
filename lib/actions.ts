"use server"

import { Resend } from "resend"

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY)

// Type for newsletter subscription
type SubscribeToNewsletterProps = {
  email: string
}

// Type for contact form
type ContactFormProps = {
  name: string
  email: string
  message: string
}

// Function to subscribe to newsletter
export async function subscribeToNewsletter({ email }: SubscribeToNewsletterProps) {
  try {
    // Validate email
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return { success: false, error: "Please provide a valid email address" }
    }

    // Send confirmation email using Resend
    const { data, error } = await resend.emails.send({
      from: "PULSE Festival <info@kscode.eu>",
      to: [email],
      subject: "Welcome to PULSE Festival Newsletter!",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #f59e0b; margin-bottom: 24px;">Welcome to PULSE Festival!</h1>
          <p style="margin-bottom: 16px;">Thank you for subscribing to our newsletter. You'll now receive updates about:</p>
          <ul style="margin-bottom: 24px;">
            <li>Artist announcements</li>
            <li>Special ticket offers</li>
            <li>Festival updates</li>
            <li>Behind-the-scenes content</li>
          </ul>
          <p style="margin-bottom: 24px;">We're excited to have you join our community of Punjabi and Bollywood music lovers!</p>
          <div style="background: linear-gradient(to right, #f59e0b, #ea580c); padding: 2px; border-radius: 4px;">
            <div style="background-color: #000; padding: 16px; border-radius: 2px; text-align: center;">
              <a href="https://your-website.com/tickets" style="color: #f59e0b; text-decoration: none; font-weight: bold;">GET YOUR TICKETS NOW</a>
            </div>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("Error sending email:", error)
      return { success: false, error: "Failed to send confirmation email" }
    }

    // Here you would typically also save the email to your database
    // For this example, we'll just return success

    return { success: true }
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return { success: false, error: "An unexpected error occurred" }
  }
}

// Function to send contact form
export async function sendContactForm({ name, email, message }: ContactFormProps) {
  try {
    // Validate inputs
    if (!name || !email || !message) {
      return { success: false, error: "All fields are required" }
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return { success: false, error: "Please provide a valid email address" }
    }

    // Create a email template with a good modern template context: somebody fill a services contact form on my site
    const { data, error } = await resend.emails.send({
        from: "Kscode Contact Form <info@kscode.eu>",
        to: email,
        subject: "Confirmation: We've Received Your Inquiry",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <div style="background-color: #f59e0b; padding: 15px; border-radius: 8px 8px 0 0; text-align: center;">
              <h2 style="color: #fff; margin: 0;">Thank You for Your Inquiry</h2>
            </div>
            <div style="padding: 20px; background-color: #fff;">
              <p style="color: #333; font-size: 16px;">
                Hey ${name},  
                <br><br>
                Thank you for reaching out. We have received your inquiry and our team is currently reviewing your request.  
                <br><br>
                We will get back to you as soon as possible with further information or any next steps required.
              </p>
              <p style="color: #333; font-size: 16px;">
                If you need immediate assistance, please reply to this email.
              </p>
              <p style="color: #555; font-size: 14px; margin-top: 20px;">
                Best regards, <br><strong>Kiran <br>Founder, Kscode</strong>
              </p>
            </div>
            <div style="text-align: center; padding: 15px; background-color: #f9f9f9; border-radius: 0 0 8px 8px;">
              <p style="font-size: 12px; color: #777;">This is an automated confirmation email.</p>
            </div>
          </div>
        `,
      });
      

    if (error) {
      console.error("Error sending email:", error)
      return { success: false, error: "Failed to send your message" }
    }

    return { success: true }
  } catch (error) {
    console.error("Contact form error:", error)
    return { success: false, error: "An unexpected error occurred" }
  }
}

