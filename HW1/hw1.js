const peanut = 15.678;
const hazelnut = 123.965;
const walnut = 90.2345;
console.log(Math.max(peanut, hazelnut, walnut));
console.log(Math.min(peanut, hazelnut, walnut));
let sum = (peanut + hazelnut + walnut);
console.log(sum);
console.log(Math.floor(peanut));
console.log(Math.floor(hazelnut));
console.log(Math.floor(walnut));
console.log(Math.floor(peanut+hazelnut+walnut))
console.log(Math.ceil(sum/100)*100);
console.log(Math.floor(sum) % 2 == 0);
console.log(500-sum);
console.log(peanut.toFixed(2));
console.log(hazelnut.toFixed(2));
console.log(walnut.toFixed(2));
const discount = (100-1) * Math.random() + 1;
console.log(discount);
let sumDiscount = sum - sum * (discount/100);
console.log(sumDiscount.toFixed(2));
console.log(sum/2-(sum * (discount/100)));
const content = `Максимальна ціна: ${Math.max(peanut, hazelnut, walnut)}
Мінімальна ціна: ${Math.min(peanut, hazelnut, walnut)}
Вартість всіх товарів: ${sum}
Округлення вартості(без копійок): ${Math.floor(peanut)}, ${Math.floor(hazelnut)}, ${Math.floor(walnut)}, ${Math.floor(peanut+hazelnut+walnut)}
Округлення вартості до сотень: ${Math.ceil(sum/100)*100}
Сума всіх товарів парне число: ${Math.floor(sum) % 2 == 0}
Решта: ${500-sum}
Округлення цін до другого знаку після коми: ${peanut.toFixed(2)}, ${hazelnut.toFixed(2)}, ${walnut.toFixed(2)}
Знижка: ${discount}%
Вартість товарів зі знижкою: ${sumDiscount.toFixed(2)}
Чистий прибуток: ${sum/2-(sum * (discount/100))}`;
console.log(content)
