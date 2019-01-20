//Palindrome checker

function palindrome(str) {
  var answer = str.split("").reverse().join("");
  if (answer === str) {
    return true;
  } else {
  return false;
  }
  return answer;
}
console.log(palindrome("eye"));
