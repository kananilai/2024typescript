var userInput;
var userName;
userInput = 5;
userInput = 'Max';
if (typeof userInput === "string") {
    userName = userInput;
}
// userName = userInput;//userInoutがstring型である保証がないためエラーが発生する
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError('An error occurred!', 500);
console.log(result);
