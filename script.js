
let pdfViewer = document.getElementById("pdfFrame");
let signatureCanvas = document.getElementById("signaturePad");
let sigCtx = signatureCanvas.getContext("2d");
let drawing = false;

signatureCanvas.onmousedown = () => drawing = true;
signatureCanvas.onmouseup = () => drawing = false;
signatureCanvas.onmousemove = (e) => {
  if (drawing) {
    const rect = signatureCanvas.getBoundingClientRect();
    sigCtx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    sigCtx.stroke();
  }
};

function clearSignature() {
  sigCtx.clearRect(0, 0, signatureCanvas.width, signatureCanvas.height);
}

function loadPDF(file) {
  pdfViewer.src = file;
}

function downloadFinalPDF() {
  alert("This would combine PDF + drawing + signature and start the download (mocked in static version).");
}
