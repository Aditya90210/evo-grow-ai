import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  message: string;
}

const escapeHtml = (s: string) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 255;

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = (await req.json()) as ContactEmailRequest;
    const name = (body.name ?? "").toString().trim().slice(0, 100);
    const email = (body.email ?? "").toString().trim().slice(0, 255);
    const message = (body.message ?? "").toString().trim().slice(0, 2000);

    if (!name || !message || !isValidEmail(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid input" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    // Always send the notification to a fixed internal admin address.
    // Never use the caller-supplied address as the recipient (prevents
    // using this endpoint as an unauthenticated spam/phishing relay).
    const ADMIN_EMAIL = Deno.env.get("CONTACT_ADMIN_EMAIL") ?? "onboarding@resend.dev";

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "EVO Scalvex <onboarding@resend.dev>",
        to: [ADMIN_EMAIL],
        reply_to: email,
        subject: `New contact form submission from ${name}`,
        html: `
          <h1>New contact form submission</h1>
          <p><strong>From:</strong> ${safeName} &lt;${safeEmail}&gt;</p>
          <p><strong>Message:</strong></p>
          <p style="padding: 16px; background-color: #f4f4f4; border-radius: 8px;">${safeMessage}</p>
        `,
        text: `New contact form submission\n\nFrom: ${name} <${email}>\n\nMessage:\n${message}`,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Resend API error:", errorData);
      return new Response(
        JSON.stringify({ error: "Failed to send email" }),
        { status: 502, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
