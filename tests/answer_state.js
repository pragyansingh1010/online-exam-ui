function answerState(answer) {
  return answer === null || answer === undefined ? 'unanswered' : 'answered';
}

console.assert(answerState(null) === 'unanswered');
console.assert(answerState(undefined) === 'unanswered');
console.assert(answerState('A') === 'answered');
console.assert(answerState(0) === 'answered');
console.log('Exam answer state tests passed');
