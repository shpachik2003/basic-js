class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    
    const messageUpperCase = message.toUpperCase().replace(/[^A-Z]/g, '');
    const keyUpperCase = key.toUpperCase().replace(/[^A-Z]/g, '');
    const vigenereTable = this.createVigenereTable();

    let result = '';
    let keyIndex = 0;
    for (let i = 0; i < messageUpperCase.length; i++) {
      const messageCharCode = messageUpperCase.charCodeAt(i);
      const keyCharCode = keyUpperCase.charCodeAt(keyIndex % keyUpperCase.length);
      
      if (messageCharCode < 65 || messageCharCode > 90) {
        result += message[i];
        continue;
      }

      const encryptedCharCode = vigenereTable[messageCharCode - 65][keyCharCode - 65];
      result += String.fromCharCode(encryptedCharCode);
      keyIndex++;
    }

    return this.direct ? result : result.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    const encryptedMessageUpperCase = encryptedMessage.toUpperCase().replace(/[^A-Z]/g, '');
    const keyUpperCase = key.toUpperCase().replace(/[^A-Z]/g, '');
    const vigenereTable = this.createVigenereTable();

    let result = '';
    let keyIndex = 0;
    for (let i = 0; i < encryptedMessageUpperCase.length; i++) {
      const encryptedCharCode = encryptedMessageUpperCase.charCodeAt(i);
      const keyCharCode = keyUpperCase.charCodeAt(keyIndex % keyUpperCase.length);
      
      if (encryptedCharCode < 65 || encryptedCharCode > 90) {
        result += encryptedMessage[i];
        continue;
      }

      const messageCharCode = this.findDecryptedCharCode(vigenereTable, encryptedCharCode, keyCharCode);
      result += String.fromCharCode(messageCharCode);
      keyIndex++;
    }

    return this.direct ? result : result.split('').reverse().join('');
  }

  createVigenereTable() {
    const table = [];
    for (let i = 0; i < 26; i++) {
      const row = [];
      for (let j = 0; j < 26; j++) {
        row.push((i + j) % 26 + 65);
      }
      table.push(row);
    }
    return table;
  }

  findDecryptedCharCode(vigenereTable, encryptedCharCode, keyCharCode) {
    for (let i = 0; i < 26; i++) {
      if (vigenereTable[i][keyCharCode - 65] === encryptedCharCode) {
        return i + 65;
      }
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
