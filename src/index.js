// const num = 1000;

// const formatNum = typeof num ===  "number" ? num.toLocaleString() : "数値を入力してください"
// console.log(formatNum);

const check = (num1 = 10, num2 = 100) => {
  return num1 + num2 > 100 ? "１００こえてるよ" : "100超えてないよ";
};

console.log(check(1, 10));

const num1 = [10, 25, 30];

const num2 = num1.filter((a) => {
  return a % 2 === 1;
});
console.log(num2);
