//parseInt()
console.log(parseInt("10")); // Output: 10 
console.log(parseInt("10.34")); // Output: 10 
console.log(parseInt("10px")); // Output: 10 
console.log(parseInt("px10")); // Output: NaN

console.log(parseInt("10", 10)); // Output: 10 
console.log(parseInt("10", 16)); // Output: 16 
console.log(parseInt("A", 16)); // Output: 10 (A är 10 i hexadecimalt)

//parseFloat(): parseFloat() används för att omvandla en sträng till ett flyttalsnummer (ett nummer med decimaler).
console.log(parseFloat("10")); // Output: 10 (men som flyttal)
console.log(parseFloat("10.34")); // Output: 10.34 
console.log(parseFloat("10.34px")); // Output: 10.34 
console.log(parseFloat("px10")); // Output: NaN

//Unary + Operator: sayilar verileri dize olarak alirken ve bunlari hesaplama yapmak icin sayiya donustururken kullaniriz.
console.log(+3); // Output: 3 
console.log(+"3"); // Output: 3 
console.log(+"3.14"); // Output: 3.14 
console.log(+true); // Output: 1 
console.log(+false); // Output: 0 
console.log(+""); // Output: 0 
console.log(+"hello"); // Output: NaN

//Number() : Yeni bir Number nesnesi örneği oluşturmak veya bir değişkeni sayıya dönüştürmek için kullanılır.
console.log(Number(123)); // Output: 123 
console.log(Number('123')); // Output: 123 
console.log(Number('123.45')); // Output: 123.45 
console.log(Number(true)); // Output: 1 
console.log(Number(false)); // Output: 0 
console.log(Number(' 123 ')); // Output: 123 
console.log(Number('hello')); // Output: NaN

//String(): String(), bir değişkeni string'e dönüştürmek için kullanılır. 
//Değişken zaten bir dize ise değişmeden kalır. 
//Sayı veya boole değişkeni gibi başka bir değer türüyse dize temsiline dönüştürülür.
console.log(String(123)); // Output: "123" 
console.log(String('hello')); // Output: "hello" 
console.log(String(true)); // Output: "true" 
console.log(String(null)); // Output: "null" 
console.log(String(undefined)); // Output: "undefined" 
console.log(String([1, 2, 3])); // Output: "1,2,3"

//toString(): används för att konvertera och returnera en strängrepresentation av ett objekt eller en primitiv datatyp.
let number = 123; 
console.log(number.toString()); // Output: "123" 

let booleanValue = true; 
console.log(booleanValue.toString()); // Output: "true" 

let array = [1, 2, 3]; 
console.log(array.toString()); // Output: "1,2,3" 

let myObject = {}; 
console.log(myObject.toString()); // Output: "[object Object]"

//Template Literals: Şablon Değişmezleri, Sayıları kolayca dizelere dönüştürmek için şablon değişmez değerlerini kullanabilirsiniz. 
//Şablon değişmezleri ters eğik çizgilerle(`) çevrilidir ve ${} içine alınmış hem metin hem de JavaScript ifadeleri içerebilirler.
//${} içerisinde birden fazla ifade ekleyebilir, hesaplamalar yapabilir ve hatta işlevleri doğrudan çağırabilirsiniz.
// Şablon değişmez değerlerini kullanmak, sayıları (ve diğer veri türlerini) JavaScript'te dizelere dönüştürmenin güçlü ve kullanımı kolay bir yoludur. 
let age = 30;
console.log(`Min ålder är ${age}`); // Output: "Min ålder är 30"

//Konkatenering med en tom sträng
//Birleştirmeyi kullanarak bir sayıyı dizeye de dönüştürebilirsiniz.
const num = 42;
console.log(num + "") // "42"







