export const isValid = (s) => {
  const stack = [];
  const bracketsMap = { ")": "(", "}": "{", "]": "[" };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!bracketsMap[char]) {
      stack.push(char);
    } else if (stack.pop() !== bracketsMap[char]) {
      return false;
    }
  }

  return stack.length === 0;
};
