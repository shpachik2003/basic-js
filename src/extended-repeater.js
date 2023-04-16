function repeater(str, options) {
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  const addition = (options.addition !== undefined) ? options.addition : '';
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';

  let repeatedStr = '';

  for (let i = 0; i < repeatTimes; i++) {
    let repeatedAddition = '';

    for (let j = 0; j < additionRepeatTimes; j++) {
      repeatedAddition += (j !== additionRepeatTimes - 1) ? `${addition}${additionSeparator}` : addition;
    }

    repeatedStr += (i !== repeatTimes - 1) ? `${str}${repeatedAddition}${separator}` : `${str}${repeatedAddition}`;
  }

  return repeatedStr;
}

module.exports = {
  repeater
};
