// DOM Elements

const range = document.getElementById("amountRange");
const number = document.getElementById("amountNumber");
const form = document.getElementById("passwordForm");
const uppercaseEl = document.getElementById("uppercase");
// const lowercaseEl = document.getElementById("lowercase");
const numberEl = document.getElementById("numbers");
const symbolEl = document.getElementById("symbols");
const uppercaseCh = lowToHigh(65, 90);
const lowercaseCh = lowToHigh(97, 122);
const numberCh = lowToHigh(48, 57);
const symbolCh = lowToHigh(33, 47)
  .concat(lowToHigh(58, 64))
  .concat(lowToHigh(91, 96))
  .concat(lowToHigh(123, 126));
const passwordDisplay = document.getElementById("passwordDisplay");

// Event Listeners
number.addEventListener("input", syncCharacterAmount);
range.addEventListener("input", syncCharacterAmount);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const characterAmount = number.value;
  const uppercase = uppercaseEl.checked;
  const lowercase = true;
  const numbers = numberEl.checked;
  const symbols = symbolEl.checked;
  const password = generatePassword(
    characterAmount,
    uppercase,
    lowercase,
    symbols,
    numbers
  );
  passwordDisplay.innerText = password;
});

// issue w/ console.log
function generatePassword(
  characterAmountVal,
  uppercaseVal,
  lowercaseVal,
  symbolsVal,
  numbersVal
) {
  console.log(
    characterAmountVal,
    uppercaseVal,
    lowercaseVal,
    symbolsVal,
    numbersVal
  );

  let charCodes = lowercaseCh;
  if (uppercaseVal) charCodes = charCodes.concat(uppercaseCh);
  if (numbersVal) charCodes = charCodes.concat(numberCh);
  if (symbolsVal) charCodes = charCodes.concat(symbolCh);
  const passwordCh = [];
  console.log("CC", charCodes);
  for (let i = 0; i < characterAmountVal; i++) {
    const characterCode =
      charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCh.push(String.fromCharCode(characterCode));
  }
  console.log("PW", passwordCh);
  return passwordCh.join("");
}

function lowToHigh(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}

// links slider and input box
function syncCharacterAmount(e) {
  const value = e.target.value;
  number.value = value;
  range.value = value;
}
