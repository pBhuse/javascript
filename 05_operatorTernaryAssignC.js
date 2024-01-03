function maleMarriageEligibility(gender,age,boyName)
{
    var res= gender=="Male" && age>=21?`hey ${boyName} you are eligible for marriage`:` ${boyName} ,Not eligible for marriage`;
          console.log(res);
}
console.log("....................Step 1..............................");
maleMarriageEligibility("Male",25,"Billgates");
maleMarriageEligibility("Male",17,"Stew Jobs");
console.log(`.....................step2...............................`);
function femaleMarriageEligibility(gender,age,girlName)
{
    var res= gender=="Female" && age>=18?`hey ${girlName} you are eligible for marriage`:` ${girlName} ,Not eligible for marriage`;
    console.log(res);
}
femaleMarriageEligibility("Female",16,"Jenifer");
femaleMarriageEligibility("Female",27,"Malinda Gates");