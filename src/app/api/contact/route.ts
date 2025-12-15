import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, projectType, message } = body;

    // Validate required fields
    if (!name || !email || !projectType || !message) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "El formato del email no es válido" },
        { status: 400 }
      );
    }

    // Here you would integrate with your email service
    // Options:
    // 1. Nodemailer with SMTP
    // 2. SendGrid
    // 3. Resend
    // 4. EmailJS (client-side alternative)

    // For now, we'll log the data and return success
    // In production, replace this with actual email sending logic
    console.log("New contact form submission:", {
      name,
      email,
      projectType,
      message,
      timestamp: new Date().toISOString(),
    });

    // Example with Resend (uncomment and configure):
    /*
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'NextCode <onboarding@resend.dev>',
      to: ['your-email@example.com'],
      subject: `Nuevo contacto de ${name} - ${projectType}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Tipo de proyecto:</strong> ${projectType}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });
    */

    return NextResponse.json(
      { success: true, message: "Mensaje enviado correctamente" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Error al procesar el formulario" },
      { status: 500 }
    );
  }
}
