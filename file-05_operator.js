function greaterNumber(a, b)
 {
    console.log("................step 1..................");
  var result = a > b?"A is greater":"B is greater";
  console.log(`${result}`);
}
greaterNumber(10, -10);
greaterNumber(800, 899);
console.log("...................STEP 2....................");
 function isEvenOrOddNum(x)
 {
    var r1= x%2==0?"True":"False";
    console.log(` ${x}  is ${r1}`);
 }
 isEvenOrOddNum(29);
 isEvenOrOddNum(44);
 isEvenOrOddNum(0);
 isEvenOrOddNum(101);
 console.log(".................Step 3........................");
 function wordLength(s1)
 {
         var len=s1.length;
         console.log(`${s1} length is : ${len}`);
         var ans=len%2==0?"EVEN":"ODD";
                return ans;
 }
 var out=wordLength("JavaScript");
 
 console.log(`word length is ${out}`);