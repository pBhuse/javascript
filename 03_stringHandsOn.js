function stringHandsOn()
{
var givenStringIS="   Hey you are doing good, keep it up    ";
console.log(` ...step 1.. ${givenStringIS } `);

console.log(`...step2...length of string is : ${givenStringIS.length}`);
var len1=givenStringIS.length;
var string1=givenStringIS.trim();
console.log(`....step 3..... string is : ${string1} and length is:${string1.length}`);
var len2=string1.length;
var len3=len1-len2;
console.log(`...step 4...Total Number of extra Spaces:${len3}`);
console.log(`...step 5...First and Last Character :${string1.charAt(0)}, ${string1.charAt(string1.length-1)}`);
var result=string1.split(" ");
console.log(` ...step6...Total words in the string is: ${result.length} `);
console.log(`...step 7...index of words good is :${givenStringIS.indexOf("good")}`);
console.log(`...step 8 ... Substring : ${givenStringIS.substring(22)}`);
console.log(`...step 9... ${string1.endsWith("up")}`);
console.log(`...step 10 ... ${string1.startsWith("Hey")}`);

}
stringHandsOn();

