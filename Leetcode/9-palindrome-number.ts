function isPalindrome(x: number): boolean {
 const n: string = x.toString();

  for (let i = 0; i < n.length / 2; i += 1) {
    if (n[i] !== n[n.length - 1 - i]) {
      return false;
    }
  }

  return true;
};

console.log('isPalindrome', isPalindrome(121))
console.log('isPalindrome', isPalindrome(-121))
console.log('isPalindrome', isPalindrome(10))