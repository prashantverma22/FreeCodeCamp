function rot13(str) {
  var myStr = "";
  for(var i=0; i < str.length; i++){
    var AscNum = str[i].charCodeAt();
    if(AscNum >= 65 && AscNum <= 77){
       myStr += String.fromCharCode(AscNum + 13);
    }
    else if(AscNum >= 78 && AscNum <= 90){
      myStr += String.fromCharCode(AscNum - 13);
    }
    else{
      myStr += str[i];
    }
   }
  return myStr;
}
rot13("SERR PBQR PNZC");
