const passwordLengthRange = document.getElementById("passwordLengthRange");
const passwordLengthNumber = document.getElementById("passwordLengthNumber");
const includeUppercaseElement = document.getElementById("includeUppercase");
const includeLowercaseElement = document.getElementById("includeLowercase");
const includeNumbersElement = document.getElementById("includeNumbers");
const includeSymbolsElement = document.getElementById("includeSymbols");

const form = document.getElementById("passwordGeneratorForm");
const UPPERCASE_CHAR_CODES = arrayFromLowtoHigh(65, 90);
const LOWERCASE_CHAR_CODES = arrayFromLowtoHigh(97, 122);
const NUMBERS_CHAR_CODES = arrayFromLowtoHigh(48, 57);
const SYMBOLS_CHAR_CODES = arrayFromLowtoHigh(33, 47)
  .concat(arrayFromLowtoHigh(58, 64))
  .concat(arrayFromLowtoHigh(91, 96))
  .concat(arrayFromLowtoHigh(123, 126));

passwordLengthNumber.addEventListener("input", syncCharacterAmount);
passwordLengthRange.addEventListener("input", syncCharacterAmount);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const passwordLength = passwordLengthNumber.value;
  const includeUppercase = includeUppercaseElement.checked;
  const includeLowercase = includeLowercaseElement.checked;
  const includeNumbers = includeNumbersElement.checked;
  const includeSymbols = includeSymbolsElement.checked;

  const password = generatePassword(
    passwordLength,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols
  );
});

function generatePassword(
  passwordLength,
  includeUppercase,
  includeLowercase,
  includeNumbers,
  includeSymbols
) {
  console.log(SYMBOLS_CHAR_CODES);
}

function arrayFromLowtoHigh(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) array.push(i);
  return array;
}

function syncCharacterAmount(e) {
  const value = e.target.value;
  passwordLengthNumber.value = value;
  passwordLengthRange.value = value;
}
