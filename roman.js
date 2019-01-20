//Roman to numeral converter

function convertToRoman(num) {
    var obj = {
      M : 1000,
      D : 500,
      C : 100,
      L : 50,
      X : 10,
      V : 5,
      I : 1
    };

    var roman = "";

   for (var key in obj) {
     while (num >= obj[key]) {
       roman += key;
       num -= obj[key];
     }
   }
 return roman;
}

console.log(convertToRoman(2));
