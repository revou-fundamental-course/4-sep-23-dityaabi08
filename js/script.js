function calculate() {
  const sideLength = parseFloat(document.getElementById("sideLength").value);

  if (!isNaN(sideLength)) {
    const perimeter = 4 * sideLength;
    const area = sideLength * sideLength;

    const finalPerimeter = perimeter.toLocaleString("ID");
    const finalArea = area.toLocaleString("ID");

    document.getElementById(
      "perimeterResult"
    ).textContent = `(4 x S = 4 x ${sideLength} = ${finalPerimeter})`;
    document.getElementById(
      "areaResult"
    ).textContent = `(S x S = ${sideLength} x ${sideLength} = ${finalArea})`;
  } else {
    alert("Masukkan panjang sisi yang valid.");
  }
}

function reset() {
  // Mengosongkan input panjang sisi
  document.getElementById("sideLength").value = "";

  // Mengosongkan hasil keliling dan luas
  document.getElementById("perimeterResult").textContent = "-";
  document.getElementById("areaResult").textContent = "-";
}
