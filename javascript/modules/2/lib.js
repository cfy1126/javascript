// 预设输出
// let x = "hello"
// export default x;

// 非预设的输出
// let data = [5, 6, 7]
// let obj = {
//   x: 10,
//   y: 2
// }
// export { x as default, data, obj }

let add = function (n1, n2) {
  console.log(n1 + n2)
}

let multiply = function (n1, n2) {
  console.log(n1 * n2)
}

let math = {
  add,
  multiply
}
export default math
export { add, multiply }