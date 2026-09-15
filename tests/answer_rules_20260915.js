function isAnswered(value) {
  return value !== null && value !== undefined && value !== '';
}

console.assert(isAnswered('A'));
console.assert(!isAnswered(''));
