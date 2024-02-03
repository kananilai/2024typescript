function add(n1, n2) {
    return n1 + n2;
}
function printResult2(num) {
    console.log("Result: " + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, function (result) {
    console.log(result);
});
var combineValues;
combineValues = add;
console.log(combineValues(8, 8));
printResult2(add(5, 12));
