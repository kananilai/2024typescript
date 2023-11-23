let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

if(typeof userInput ==="string"){
  userName = userInput;
}
// userName = userInput;//userInoutがstring型である保証がないためエラーが発生する

function generateError(message: string, code: number): never { //void型は戻り値を返しても返さなくてもよいが、never型は絶対に戻り値を返さない
  throw { message: message, errorCode: code };
}

const result = generateError('An error occurred!', 500);
console.log(result);

