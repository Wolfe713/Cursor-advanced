// 1.визначення найбільшої цифри в числі
function getMaxDigit(n) {
    let max=0, min=9;
    while (n>0) {
      
        if (n%10>max) max = n%10;
        n = Math.floor(n/10);
     }  
return 'Найбільша цифра у числі:' +max;  
}
console.log(getMaxDigit(1236));
// 2.степінь числа
function pow(a, b) {
    let result = a;
    for (let i = 1; i < b; i++) {
      result *= a;
    }
    return result;
  }

console.log(pow(6, 2));
// 3.форматування імені
function nameFormatting(name) {
 return name.slice(0, 1).toUpperCase()+name.slice(1).toLowerCase();
}  

console.log(nameFormatting('amElY'))
// 4.зарплата після вирахування податків
function salaryWithoutTaxes(x) {
    let taxes = x*0.195;
    result = x - taxes;
    return result;
}
console.log(salaryWithoutTaxes(3000));
// 5.повернення випадкового числа в заданому діапазоні
function getRandomNumber(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.round(rand);
}
console.log(getRandomNumber(6, 87));
// 6.лічильник букв
function countLetter(letter, word) {
    
    let arr = word.split('');
    let counter = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === letter){
            counter++;} } 
   
    return counter;
        }   
    console.log(countLetter("f","lkjkjkjhfff"));
    // 8.генерація випадкового пароля
    function getRandomPassword(len = 8) {
       let ints = [0,1,2,3,4,5,6,7,8,9];
    
       let out = '';
       for (let i = 0; i < len; i++) {
        let ch = Math.random(1,2);
        if (ch < 1) {
            let ch2 = Math.round(Math.random(1,ints.length)*10);
           out += ints[ch2];
        }
       } 
       return out;
    }
    console.log(getRandomPassword(4));
    // 10.паліндром
    function isPalindrom(str) {
     let strReverse = str.split('').reverse().join('');
    return (str ===strReverse);}
  
   console.log(isPalindrom('шалаш'));    

   document.writeln( `<ul>
   <li>Функція 1: ${getMaxDigit(1236)}</li>
   <li>Функція 2: ${pow(6, 2)}</li>
   <li>Функція 3: ${nameFormatting('amElY')}</li>
   <li>Функція 4: ${salaryWithoutTaxes(3000)}</li>
   <li>Функція 5: ${getRandomNumber(6, 87)}</li>
   <li>Функція 6: ${countLetter("f","lkjkjkjhfff")}</li>
   <li>Функція 8: ${getRandomPassword(4)}</li>
   <li>Функція 10: ${isPalindrom('шалаш')}</li></ul>`);
   
   
