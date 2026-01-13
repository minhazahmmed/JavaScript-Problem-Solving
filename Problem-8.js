function capitalizeWords(str) {
  let result = "";
  let capitalizeNext = true;

  for (let i = 0; i < str.length; i++) {
    if (capitalizeNext && str[i] !== " ") {
      result += str[i].toUpperCase();
      capitalizeNext = false;
    } else {
      result += str[i];
    }

    if (str[i] === " ") {
      capitalizeNext = true;
    }
  }

  return result;
}

console.log(capitalizeWords("hello world"));
