function palindrome(str) {

  for (var i = 0; i < str.length / 2; i++) {
    let first = str.charAt(i);
    let last = str.charAt(str.length - 1 - i);

    if (first !== last) {
      return false;
    }
  }

  return true
}

console.log(palindrome('kayak'))