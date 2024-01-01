function squareOfwordlength(s1) {
  var len1 = s1.length;
  console.log(
    `step 1... length of word : ${len1} and square is: ${len1 * len1}`
  );
}
squareOfwordlength("javaScript");
squareOfwordlength("Google Chrome");
squareOfwordlength("Developer Smart");
console.log("..................................................");
console.log("step 2");
function calculate() {
  var s2 = "I am Angular Developer";
  var s3 = s2.length;
  //console.log(`length of string :${s3}`);
  var res = s2.split(" ");
  var p = res.length;
  //console.log(`${res.length}`);
  console.log(
    `  string length ${s3}: And  string length  divide by total number of words : ${
      s3 / p
    } `
  );
  console.log(
    `  string length ${s3}: And  string length  multiply by total number of words : ${
      s3 * p
    } `
  );
}
calculate();
