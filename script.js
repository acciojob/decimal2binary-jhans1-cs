function convertDecimalToBinary() {
  const decimalInput = document.getElementById('decimal-input');
  const decimal = parseInt(decimalInput.value);

  const result = decimalToBinary(decimal);

  const resultElement = document.getElementById('result');
  resultElement.textContent = `Binary: ${result}`;
}

function decimalToBinary(decimal) {
  if (decimal === 0) {
    return '0';
  }

  let binary = '';
  while (decimal > 0) {
    binary = (decimal % 2) + binary;
    decimal = Math.floor(decimal / 2);
  }

  return binary;
}
