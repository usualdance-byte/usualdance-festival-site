/**
 * Cole este código no Apps Script vinculado à planilha de leads (Extensões >
 * Apps Script na planilha). Depois publique como Web App (Implantar > Nova
 * implantação > Aplicativo da Web, acesso "Qualquer pessoa"), copie a URL
 * gerada e cole em GOOGLE_SHEETS_WEBHOOK_URL nas env vars do projeto (Vercel
 * + .env.local).
 *
 * Payload enviado pela API do site: { name, email, whatsapp, source, created_at }
 *
 * Uma única aba recebe leads de todas as fontes (site, voto popular,
 * inscrições, etc.) — a coluna "Origem" distingue de onde cada linha veio,
 * em vez de espalhar em abas separadas.
 */
var HEADERS = ["Nome", "E-mail", "WhatsApp", "Origem", "Data"];

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Leads") ||
    SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
  }

  var lead = JSON.parse(e.postData.contents);

  sheet.appendRow([
    lead.name || "",
    lead.email || "",
    lead.whatsapp || "",
    lead.source || "desconhecida",
    lead.created_at || new Date().toISOString(),
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
