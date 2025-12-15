import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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
        { error: "El formato del email no es valido" },
        { status: 400 }
      );
    }

    const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || process.env.CONTACT_EMAIL || "contacto@nextcode.com";

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "NextCode <onboarding@resend.dev>",
      to: [contactEmail],
      replyTo: email,
      subject: "Nuevo contacto de " + name + " - " + projectType,
      html: "<div style=\"font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;\"><h2 style=\"color: #6366f1;\">Nuevo mensaje de contacto</h2><div style=\"background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;\"><p><strong>Nombre:</strong> " + name + "</p><p><strong>Email:</strong> <a href=\"mailto:" + email + "\">" + email + "</a></p><p><strong>Tipo de proyecto:</strong> " + projectType + "</p></div><div style=\"background: #fff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;\"><p><strong>Mensaje:</strong></p><p style=\"white-space: pre-wrap;\">" + message + "</p></div><p style=\"color: #6b7280; font-size: 12px; margin-top: 20px;\">Este mensaje fue enviado desde el formulario de contacto de NextCode.</p></div>",
    });

    if (error) {
      console.error("Error sending email:", error);
      return NextResponse.json(
        { error: "Error al enviar el mensaje" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Mensaje enviado correctamente", id: data?.id },
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
