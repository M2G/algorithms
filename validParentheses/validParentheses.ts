function validParentheses(s){
  const stack = [];
  
  for (let i = 0; i < s.length; i += 1) {
    const top = stack[stack.length - 1];
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      // @ts-ignore
      stack.push(s[i]);
    } else if (s[i] === ')' && top === '(' && stack.length !== 0) {
      stack.pop();
    } else if (s[i] === ']' && top === '[' && stack.length !== 0) {
      stack.pop();
    } else if (s[i] === '}' && top === '{' && stack.length !== 0) {
      stack.pop();
    } else {
      return false;
    }
  }
  
  return stack.length === 0;
}

export default validParentheses;