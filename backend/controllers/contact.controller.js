import Contact from "../models/contact.model.js";
import sendEmail from "../utils/email.js";

const createContactMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const contact = await Contact.create({
      name,
      email,
      message,
    });

    await sendEmail(
      email,
      "Movie Management - Contact Message Received",
      `Hello ${name},

We have received your message successfully.

Your message:
${message}

Thank you for contacting Movie Management.

Regards,
We will get back to you shortly.

Movie Management Team`,
    );

    res.status(201).json({
      message: "Message sent successfully",
      contact: {
        id: contact._id,
        name: contact.name,
        email: contact.email,
        message: contact.message,
      },
    });
  } catch (error) {
    console.error("Contact message error:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

export { createContactMessage };