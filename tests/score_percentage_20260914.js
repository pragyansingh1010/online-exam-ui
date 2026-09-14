function percentage(correct, total) {
  return total > 0 ? (correct / total) * 100 : 0;
}

console.assert(percentage(5, 10) === 50);
console.assert(percentage(10, 10) === 100);
console.assert(percentage(0, 10) === 0);
console.assert(percentage(0, 0) === 0);
console.log('Exam percentage rules passed');
