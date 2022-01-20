$(() => $('[data-toggle="tooltip"]').tooltip());
document.getElementById('anio').innerHTML = new Date().getFullYear();

const preValidation = (sentence) => /[a-z 0-9]+$/g.test(sentence);
const ruler = {
  a: 'ai',
  e: 'enter',
  i: 'imes',
  o: 'ober',
  u: 'ufat',
};

const reverseRuler = () => {
  let = aux = {};
  for (const property in ruler) {
    aux[ruler[property]] = property;
  }
  return aux;
};

const patternEncrypt = new RegExp(Object.keys(ruler).join().replaceAll(',', '|'), 'g');
const encrypt = (sentence) => sentence.replace(patternEncrypt, (key) => ruler[key]);

const patternDecrypt = new RegExp(Object.keys(reverseRuler()).join().replaceAll(',', '|'), 'g');
const decrypt = (sentence) => sentence.replace(patternDecrypt, (key) => reverseRuler()[key]);

const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const btnEncrypt = document.getElementById('btn-encrypt');
const btnDecrypt = document.getElementById('btn-decrypt');
const clipboardPaste = document.getElementById('clipboard-paste');
const cleanUp = document.getElementById('clean-up');
const clipboardCopy = document.getElementById('clipboard-copy');

input.addEventListener('input', ({ data }) => {
  if (!preValidation(input.value)) input.value = input.value.replaceAll(data, '');
});

btnEncrypt.addEventListener('click', () => {
  input.value = input.value.trim();
  textarea.value = encrypt(input.value);
});

btnDecrypt.addEventListener('click', () => {
  input.value = input.value.trim();
  textarea.value = decrypt(input.value);
});

clipboardPaste.addEventListener('click', () => {
  navigator.clipboard.readText().then((clipText) => (input.value = clipText));
});

cleanUp.addEventListener('click', () => {
  input.value = '';
  textarea.value = '';
});

clipboardCopy.addEventListener('click', () => {
  navigator.clipboard.writeText(textarea.value);
});
