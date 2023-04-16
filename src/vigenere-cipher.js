class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    const upperCaseMessage = message.toUpperCase().replace(/[^A-Z]/g, '');
    const upperCaseKey = key.toUpperCase().replace(/[^A-Z]/g, '');

    let encrypted = '';
    let keyIndex = 0;
    for (let i = 0; i < upperCaseMessage.length; i++) {
      const charCode = upperCaseMessage.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        const messageIndex = charCode - 65;
        const keyCode = upperCaseKey.charCodeAt(keyIndex % upperCaseKey.length) - 65;
        const encryptedCharCode = ((messageIndex + keyCode) % 26) + 65;
        encrypted += String.fromCharCode(encryptedCharCode);
        keyIndex++;
      } else {
        encrypted += upperCaseMessage[i];
      }
    }

    if (!this.isDirect) {
      encrypted = encrypted.split('').reverse().join('');
    }

    return encrypted;
  }


  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    const upperCaseMessage = encryptedMessage.toUpperCase().replace(/[^A-Z]/g, '');
    const upperCaseKey = key.toUpperCase().replace(/[^A-Z]/g, '');

    let decrypted = '';
    let keyIndex = 0;
    for (let i = 0; i < upperCaseMessage.length; i++) {
      const charCode = upperCaseMessage.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        const messageIndex = charCode - 65;
        const keyCode = upperCaseKey.charCodeAt(keyIndex % upperCaseKey.length) - 65;
        const decryptedCharCode = ((messageIndex - keyCode + 26) % 26) + 65;
        decrypted += String.fromCharCode(decryptedCharCode);
        keyIndex++;
      } else {
        decrypted += upperCaseMessage[i];
      }
    }

    if (!this.isDirect) {
      decrypted = decrypted.split('').reverse().join('');
    }

    return decrypted;
  }
}

module.exports = {
  VigenereCipheringMachine
};
