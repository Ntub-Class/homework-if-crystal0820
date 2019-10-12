// 請介紹兩個字串方法跟數字方法
//第一個字串方法
var str1 = "掰掰";
var str2 = "再見";

console.log(str1.concat("  ", str2));
console.log(str2.concat(" , ", str1));
// 將字符串參數連接到調用字符串，然後出現一個新的字串。

//第二個字串方法
var greeting = "   你好 歡迎!   ";

console.log(greeting);
console.log(greeting.trim());
//刪除字串兩端的空格。

//第一個數字方法
console.log(Number.isFinite(1/0));
console.log(Number.isFinite(10/5));
console.log(Number.isFinite(0/0));
//確定傳遞的值是否為有限數

//第二個數字方法
var number = 5.123456;

console.log(number.toPrecision()); 
console.log(number.toPrecision(5));  
console.log(number.toPrecision(2));   
console.log(number.toPrecision(1));
//使用指定的精度返回表示對象的字串。

// 錢錢大於一個值，叫乾爹
let money = 60000;
let limit = 500000; // 限制值

if(money > 40000){
    console.log("乾爹");
}else{
    console.log("抱歉你太窮了")
}