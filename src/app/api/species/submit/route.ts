import { NextResponse } from "next/server";
import { Resend } from "resend";
import { CURADORIA_EMAILS } from "@/data/constants";

interface SubmitPayload {
  nome?: string;
  nomeCientifico?: string;
  familia?: string;
  classe?: string;
  partes?: string[];
  uso?: string;
  cuidado?: string;
  relevancia?: string;
  fonte?: string;
  fonteImagem?: string;
  imageUrl?: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value: string): string {
  return `<tr>
      <td style="padding:8px 12px;border:1px solid #e2e8f0;background:#f8fafc;font-weight:600;vertical-align:top;white-space:nowrap;">${escapeHtml(
        label
      )}</td>
      <td style="padding:8px 12px;border:1px solid #e2e8f0;vertical-align:top;">${escapeHtml(
        value || "—"
      )}</td>
    </tr>`;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Servico de e-mail nao configurado (RESEND_API_KEY ausente)." },
      { status: 500 }
    );
  }

  let payload: SubmitPayload = {};
  try {
    payload = (await request.json()) as SubmitPayload;
  } catch {
    return NextResponse.json({ error: "Dados invalidos." }, { status: 400 });
  }

  const nome = payload.nome?.trim();
  if (!nome) {
    return NextResponse.json(
      { error: "Nome da especie e obrigatorio." },
      { status: 400 }
    );
  }

  const partes = Array.isArray(payload.partes)
    ? payload.partes.join(", ")
    : "";

  const imageUrl = payload.imageUrl?.trim() || "";
  const isDataImage = imageUrl.startsWith("data:image/");

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#0f172a;max-width:640px;margin:0 auto;">
      <h2 style="color:#15803d;margin-bottom:4px;">Nova especie PANC para analise</h2>
      <p style="color:#475569;margin-top:0;">Solicitacao de analise de nova especie para o catalogo publico.</p>
      <table style="border-collapse:collapse;width:100%;font-size:14px;">
        ${row("Nome popular", nome)}
        ${row("Nome cientifico", payload.nomeCientifico?.trim() || "")}
        ${row("Familia botanica", payload.familia?.trim() || "")}
        ${row("Classe", payload.classe?.trim() || "")}
        ${row("Partes comestiveis", partes)}
        ${row("Uso culinario", payload.uso?.trim() || "")}
        ${row("Cuidados e seguranca", payload.cuidado?.trim() || "")}
        ${row("Justificativa / relevancia", payload.relevancia?.trim() || "")}
        ${row("Fonte do texto", payload.fonte?.trim() || "")}
        ${row("Fonte da imagem", payload.fonteImagem?.trim() || "")}
      </table>
      ${
        isDataImage
          ? `<p style="margin-top:16px;color:#475569;">A imagem enviada esta anexada a este e-mail.</p>`
          : imageUrl
          ? `<p style="margin-top:16px;"><a href="${escapeHtml(
              imageUrl
            )}" style="color:#15803d;">Ver imagem da especie</a></p>`
          : ""
      }
      <p style="margin-top:24px;color:#64748b;font-size:12px;">
        Apos retorno positivo da curadoria de conteudo, a especie podera seguir para publicacao.
      </p>
    </div>
  `;

  const attachments: { filename: string; content: Buffer }[] = [];
  if (isDataImage) {
    const match = imageUrl.match(/^data:image\/([a-zA-Z0-9.+-]+);base64,(.*)$/);
    if (match) {
      const ext = match[1].split("+")[0];
      try {
        attachments.push({
          filename: `imagem-${nome.replace(/\s+/g, "-").toLowerCase()}.${ext}`,
          content: Buffer.from(match[2], "base64"),
        });
      } catch {
        // Se o base64 estiver corrompido, segue sem anexo.
      }
    }
  }

  const from = process.env.EMAIL_FROM || "onboarding@resend.dev";
  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from,
      to: CURADORIA_EMAILS,
      subject: `Analise de nova especie PANC: ${nome}`,
      html,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    if (error) {
      return NextResponse.json(
        { error: error.message || "Falha ao enviar e-mail." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Falha ao enviar e-mail.";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
