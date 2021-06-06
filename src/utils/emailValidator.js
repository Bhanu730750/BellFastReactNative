
export default function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email || email.length <= 0) return ' 아이디는 이메일 형식으로 입력하세요.';
    if (!re.test(String(email).toLowerCase())) return '아이디는 이메일 형식으로 입력하세요.';

  return '';
  }
  