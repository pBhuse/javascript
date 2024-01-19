

var gradeSystem=function(marks)
{
if(marks<0 || marks>100|| marks==undefined || isNaN(marks))//Invalid Input
{
    console.log(`${marks} Invalid Input...`);
}
else{
    if(marks<=35)//fail
    {
        console.log(` ${marks} unfortunately you are failed...`);
    }
    else{
        if(marks>=35 && marks<50)
        {
            console.log(`${marks} You are pass. Grade ==>c`);
        }
        else if(marks>=50 && marks<75)
        {
            console.log(`${marks} You are pass.Grade==>B`);
        }
        else{
            console.log(`${marks} you are Pass. Grade ==>A`);
        }
    }
}
}
gradeSystem(68);
gradeSystem(35);
gradeSystem(-10);
gradeSystem(undefined);
gradeSystem(null);
gradeSystem(NaN);