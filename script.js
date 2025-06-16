
let signatureCanvas = document.getElementById("signaturePad");
let sigCtx = signatureCanvas?.getContext("2d");
let drawing = false;

if (signatureCanvas && sigCtx) {
  signatureCanvas.onmousedown = () => {
    drawing = true;
    sigCtx.beginPath();
  };
  signatureCanvas.onmouseup = () => {
    drawing = false;
    sigCtx.beginPath();
  };
  signatureCanvas.onmousemove = (e) => {
    if (drawing) {
      const rect = signatureCanvas.getBoundingClientRect();
      sigCtx.lineWidth = 2;
      sigCtx.lineCap = "round";
      sigCtx.strokeStyle = "#000";
      sigCtx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
      sigCtx.stroke();
    }
  };
}

function clearSignature() {
  if (sigCtx) {
    sigCtx.clearRect(0, 0, signatureCanvas.width, signatureCanvas.height);
    sigCtx.beginPath();
  }
}

function downloadFinalPDF() {
  alert("Final PDF export would be handled here.");
}
