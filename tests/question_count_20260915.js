function validQuestionCount(count) {
  return Number.isInteger(count) && count > 0;
}

console.assert(validQuestionCount(1));
console.assert(!validQuestionCount(0));
