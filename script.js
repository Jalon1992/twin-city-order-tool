
function loadPDF(file) {
  const viewer = "https://mozilla.github.io/pdf.js/web/viewer.html?file=";
  document.getElementById("pdfFrame").src = viewer + encodeURIComponent(file);
}

let signatureCanvas = document.getElementById("signaturePad");
let sigCtx = signatureCanvas?.getContext("2d");
let drawing = false;

if (signatureCanvas && sigCtx) {
  signatureCanvas.onmousedown = () => drawing = true;
  signatureCanvas.onmouseup = () => drawing = false;
  signatureCanvas.onmousemove = (e) => {
    if (drawing) {
      const rect = signatureCanvas.getBoundingClientRect();
      sigCtx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
      sigCtx.stroke();
    }
  };
}

function clearSignature() {
  if (sigCtx) sigCtx.clearRect(0, 0, signatureCanvas.width, signatureCanvas.height);
}

function downloadFinalPDF() {
  alert("In a full version with PDF-lib, this would combine the layout, signature, and selected form into a final PDF.");
}
