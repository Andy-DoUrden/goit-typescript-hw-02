/*
  Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
*/

// оскільки змінна називається message то по ідеї тут має бути string але законсольложити ми можемо практично будь що, тому unknown
function showMessage(message: unknown): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

export {};
