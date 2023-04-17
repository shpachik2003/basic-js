class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    let result = '';
    message = message.toUpperCase();
    key = key.toUpperCase();
    let keyLength = key.length;
    let j = 0;

    for (let i = 0; i < message.length; i++) {
      let letter = message[i];

      if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90) {
        let encryptedLetter = String.fromCharCode((letter.charCodeAt(0) + key.charCodeAt(j % keyLength)) % 26 + 65);
        result += encryptedLetter;
        j++;
      } else {
        result += letter;
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    let result = '';
    message = message.toUpperCase();
    key = key.toUpperCase();
    let keyLength = key.length;
    let j = 0;

    for (let i = 0; i < message.length; i++) {
      let letter = message[i];

      if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90) {
        let decryptedLetter = String.fromCharCode(((letter.charCodeAt(0) + 26) - key.charCodeAt(j % keyLength)) % 26 + 65);
        result += decryptedLetter;
        j++;
      } else {
        result += letter;
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
