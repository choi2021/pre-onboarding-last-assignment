function maskPhoneNumber(phoneNumber: string) {
  let originStr = phoneNumber;
  let maskedPhoneNumber = '010-****-0000';
  if (/-[0-9]{3}-/.test(phoneNumber)) {
    maskedPhoneNumber = originStr
      .toString()
      .replace(
        phoneNumber,
        phoneNumber.toString().replace(/-[0-9]{3}-/g, '-***-')
      );
  } else if (/-[0-9]{4}-/.test(phoneNumber)) {
    maskedPhoneNumber = originStr
      .toString()
      .replace(
        phoneNumber,
        phoneNumber.toString().replace(/-[0-9]{4}-/g, '-****-')
      );
  }
  return maskedPhoneNumber;
}

function maskAccountNumber(accountNumber: string) {
  let result = accountNumber.replace(/\S/gi, '*');
  result = result.substring(1, result.length - 1);
  result = accountNumber[0] + result + accountNumber[accountNumber.length - 1];
  return result;
}

export { maskPhoneNumber, maskAccountNumber };
