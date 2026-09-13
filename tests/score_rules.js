function score(correct, total) {
  return total > 0 ? (correct / total) * 100 : 0;
}

console.assert(score(10, 10) === 100);
console.assert(score(0, 10) === 0);
console.assert(score(5, 10) === 50);
console.assert(score(0, 0) === 0);
console.log('Exam score tests passed');
