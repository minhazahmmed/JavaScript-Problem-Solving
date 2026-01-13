function Palindrome(str) {
  let Forward = "";
  let Backward = "";
  for (let i = 0; i < str.length; i++) {
    Forward += str[i];
  }
  for (let j = str.length - 1; j >= 0; j--) {
    Backward += str[j];
  }
  if (Forward === Backward) {
    return true;
  } else {
    return false;
  }
}

console.log(Palindrome("madam"));
