function answeredCount(answers) {
  return answers.filter(answer => answer !== null && answer !== '').length;
}

console.assert(answeredCount(['A', '', null, 'B']) === 2);
console.assert(answeredCount([]) === 0);
console.assert(answeredCount(['A', 'B']) === 2);
console.log('Answer count rules passed');
