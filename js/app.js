const svg = document.getElementById("svg");
const curve = document.getElementById("curve");
const startPoint = document.getElementById("startPoint");
const controlPoint = document.getElementById("controlPoint");
const controlPoint2 = document.getElementById("controlPoint2");
const endPoint = document.getElementById("endPoint");
const pathCode = document.getElementById("pathCode");
const helpButton = document.getElementById("helpButton");
const helpModal = document.getElementById("helpModal");
const closeModal = document.querySelector(".close");
const baseLine = document.getElementById("baseLine");
const copyButton = document.getElementById("copyButton");
const controline1 = document.getElementById("controlLine1");
const controline2 = document.getElementById("controlLine2");
const controlJoin = document.getElementById("controlJoin");
const startLabel = document.getElementById("startLabel");
const control1Label = document.getElementById("control1Label");
const control2Label = document.getElementById("control2Label");
const endLabel = document.getElementById("endLabel");

const inputs = {
  startX: document.getElementById("startX"),
  startY: document.getElementById("startY"),
  controlX: document.getElementById("controlX"),
  controlY: document.getElementById("controlY"),
  controlX2: document.getElementById("controlX2"),
  controlY2: document.getElementById("controlY2"),
  endX: document.getElementById("endX"),
  endY: document.getElementById("endY"),
};

function updateCurve() {
  const startX = parseFloat(inputs.startX.value);
  const startY = parseFloat(inputs.startY.value);
  const controlX = parseFloat(inputs.controlX.value);
  const controlY = parseFloat(inputs.controlY.value);
  const controlX2 = parseFloat(inputs.controlX2.value);
  const controlY2 = parseFloat(inputs.controlY2.value);
  const endX = parseFloat(inputs.endX.value);
  const endY = parseFloat(inputs.endY.value);

  // Update the path's "d" attribute
  const d = `M ${startX},${startY} C ${controlX},${controlY} ${controlX2},${controlY2} ${endX},${endY}`;
  curve.setAttribute("d", d);

  pathCode.value = "d = '" + d + "'";

  // Update the positions of the points
  startPoint.setAttribute("cx", startX.toString());
  startPoint.setAttribute("cy", startY.toString());
  controlPoint.setAttribute("cx", controlX.toString());
  controlPoint.setAttribute("cy", controlY.toString());
  controlPoint2.setAttribute("cx", controlX2.toString());
  controlPoint2.setAttribute("cy", controlY2.toString());
  endPoint.setAttribute("cx", endX.toString());
  endPoint.setAttribute("cy", endY.toString());

  baseLine.setAttribute("x1", startX.toString());
  baseLine.setAttribute("y1", startY.toString());
  baseLine.setAttribute("x2", endX.toString());
  baseLine.setAttribute("y2", endY.toString());
  controline1.setAttribute("x1", startX.toString());
  controline1.setAttribute("y1", startY.toString());
  controline1.setAttribute("x2", controlX.toString());
  controline1.setAttribute("y2", controlY.toString());

  controline2.setAttribute("x1", endX.toString());
  controline2.setAttribute("y1", endY.toString());
  controline2.setAttribute("x2", controlX2.toString());
  controline2.setAttribute("y2", controlY2.toString());

  controlJoin.setAttribute("x1", controlX.toString());
  controlJoin.setAttribute("y1", controlY.toString());
  controlJoin.setAttribute("x2", controlX2.toString());
  controlJoin.setAttribute("y2", controlY2.toString());

  // Update the labels
  const offset = 10;
  startLabel.setAttribute("x", (inputs.startX.value - offset).toString());
  startLabel.setAttribute("y", (inputs.startY.value - offset).toString());
  control1Label.setAttribute("x", (inputs.controlX.value - offset).toString());
  control1Label.setAttribute("y", (inputs.controlY.value - offset).toString());
  control2Label.setAttribute("x", (inputs.controlX2.value - offset).toString());
  control2Label.setAttribute("y", (inputs.controlY2.value - offset).toString());
  endLabel.setAttribute("x", (inputs.endX.value - offset).toString());
  endLabel.setAttribute("y", (inputs.endY.value - offset).toString());

}


copyButton.addEventListener("click", () => {
  const pathText = pathCode.value;
  navigator.clipboard.writeText(pathText).then(() => {
    alert("Path copied to clipboard!");
  }).catch(err => {
    console.error("Failed to copy text: ", err);
  });
});

// Add event listeners to update the curve on input change
Object.values(inputs).forEach(input => {
  input.addEventListener("input", updateCurve);
});

// Show the modal when the help button is clicked
helpButton.addEventListener("click", () => {
  helpModal.style.display = "block";
});

// Close the modal when the close button is clicked
closeModal.addEventListener("click", () => {
  helpModal.style.display = "none";
});

// Close the modal when clicking outside of it
window.addEventListener("click", (event) => {
  if (event.target === helpModal) {
    helpModal.style.display = "none";
  }
});

// Initialize the curve
updateCurve();
