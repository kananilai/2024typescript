let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

if(typeof userInput ==="string"){
  userName = userInput;
}
// userName = userInput;//userInoutがstring型である保証がないためエラーが発生する
