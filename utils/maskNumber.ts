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

export { maskPhoneNumber };
