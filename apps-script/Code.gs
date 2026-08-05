/**
 * Cole este código no Apps Script vinculado à planilha "Leads Festival
 * Usualdance" (Extensões > Apps Script na planilha). Depois publique como
 * Web App (Implantar > Nova implantação > Aplicativo da Web, acesso
 * "Qualquer pessoa"), copie a URL gerada e cole em GOOGLE_SHEETS_WEBHOOK_URL
 * nas env vars do projeto (Vercel + .env.local).
 *
 * Payload enviado pela API do site: { name, email, whatsapp, created_at }
 */
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Leads") ||
    SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  var lead = JSON.parse(e.postData.contents);

  sheet.appendRow([
    lead.name || "",
    lead.email || "",
    lead.whatsapp || "",
    lead.created_at || new Date().toISOString(),
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
