console.log(`...................step 1..............`);
var evenOdd=function(n)
{
    if( n %2==0)
    {
        return ` ${n} is EVEN ` ;

    }
    else{
        return `${n} is ODD `;
    }
}

var e=evenOdd(70);
var p=evenOdd(67);
var m=evenOdd(98);
console.log(e);
console.log(p);
console.log(m);
console.log(`......................step 2......................`);
var voteEligible= function(age)
{
    if(age>17)
    {
        console.log(` ${age} ,Eligible for vote`);
    }
    else{
        console.log(` ${age} , not Eligible for vote`);
    }
}
voteEligible(45);
voteEligible(20);
voteEligible(17);
voteEligible(40);
console.log(` ...................step 3...............`);
var char=function(s1)
{
    if(s1.length>10)
    {
        console.log(`${s1} String contain more than 10 character`);
    }else{
        console.log(` ${s1} String  can not contain more than 10 character` );
    }
}
char("JavaScript-ES6");
console.log(`.................step 4............`);
var stringDemo= function(s2)
{
    if(s2.startsWith("Java"))
    {
        console.log(`${s2} starts with Java`);
    }
    else{
        console.log(`${s2}  not starts with Java`);
    }
}
stringDemo("JavaScript language");

