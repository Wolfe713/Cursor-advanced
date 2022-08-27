const N = +prompt('Вкажіть число');

console.log(typeof N);
console.log(Number.isInteger(N));
const M = +prompt('Вкажіть число');

console.log(typeof M);
console.log(Number.isInteger(M));
let evenNum = window.confirm('Пропускати парні числа?');
let result = 0;
if (evenNum) {
    for (let i = N; i <= M; i++) {
      if (i % 2 == 1) {
         result += i;
        } }
}
      else {
    for (let i = N; i <= M; i++){
        result += i;
    }
  } 
   console.log (result) ; 
document.writeln(result) ;
  



