console.log("Assignment No 1");

console.log("..................Step 1...............");
function display()
{
    console.log(" This is Java script Function");

}
function show()
{
    var a=10;
    var b=20;
    var c=a+b;
    console.log("Addition  of two numbers=:",c);
}
display();
show();
console.log("............Step 2.................");
function personalDetails(firstName,lastName,collegeName)
{
console.log("My First Name is",firstName);
console.log("My last Name is",lastName);
console.log("My college Name is",collegeName);
}
personalDetails("Pratiksha","Bhuse","vidnyan mahavidyalaya sangola");
console.log(".............step 3.............");
function swapValues(n1, n2) {
    console.log("Before Swap", "n1:", n1, " n2:", n2);
    var temp = n1;
    n1 = n2;
    n2 = temp;
    console.log("After Swap", "n1:", n1, " n2:", n2);
  }
  swapValues("Virat","Anushka");
  console.log("....................");
  swapValues(1000,2000);
  console.log("...............step 4.............");
  function addThreeValues(n1,n2,n3)
  {
    var result=n1+n2+n3;
    console.log("Addition :",result);
  }
  addThreeValues(10.23,600,40);
  addThreeValues("Hello","Good","Morning");