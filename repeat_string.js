function repeatStringNumTimes(str, num) {
  var myStr = '';
  while (num > 0) {
    myStr += str;
    num--;
  }
  return myStr;
}

repeatStringNumTimes("abc", 3);
