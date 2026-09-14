function validScore(value) {
  return Number.isFinite(value) && value >= 0;
}

console.assert(validScore(0));
console.assert(validScore(10));
console.assert(validScore(10.5));
console.assert(!validScore(-1));
console.log('Exam score validation passed');
