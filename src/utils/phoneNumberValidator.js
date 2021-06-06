export default phoneNumberValidator = (phonenumber) => {
    const re =  /^[0-9]+$/; ///^\d{10}$/;
    if (!phonenumber || phonenumber.length <=0 ) return '휴대폰 번호나 이메일 형식으로 입력하세요.';
    if (!re.test(String(phonenumber)))  return '휴대폰 번호나 이메일 형식으로 입력하세요.';
    return '';
  };


