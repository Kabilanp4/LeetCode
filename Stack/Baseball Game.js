/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  let newArr = [];
  let hasAny = ["C", "D", "+"];
  //   let flag = hasAny.some((item) => operations.includes(item));
  //   console.log("hasAny: " + flag);
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "C") {
      newArr.pop();
    } else if (operations[i] === "D") {
      const peakElement = newArr[newArr.length - 1];
      newArr.push(2 * peakElement);
    } else if (operations[i] === "+") {
      newArr.push(
        parseInt(newArr[newArr.length - 1]) +
          parseInt(newArr[newArr.length - 2])
      );
    } else {
      newArr.push(operations[i]);
      console.log("newArr: " + newArr);
    }
  }
  console.log(newArr);
  //array.reduce(callback, initialValue);
  //To convert String array into an integer array
  //const newArr = newArr.map(Number);
  return newArr.reduce(
    (accumulator, currentValue) =>
      parseInt(accumulator) + parseInt(currentValue),
    0
  );
};
const val = calPoints(["5", "2", "C", "D", "+"]);
console.log(val);
