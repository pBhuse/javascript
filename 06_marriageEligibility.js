var marriageEligibility = function (gender, age) {
  if (age == undefined || age == null || age == NaN) {
    console.log(`Invalid Input `);
  } else {
    if (gender == "male" && age >= 21) {
      console.log(` ${gender},Eligible for marriage`);
    } else {
      if (gender == "female" && age >= 18) {
        console.log(`${gender}, Eligible for marriage`);
      }
      else{
        console.log(`not eligible for marriage`);
      }
    }
  }
}

marriageEligibility( NaN);
marriageEligibility("male", 17);
marriageEligibility("female", 28);
marriageEligibility("male", 25);
marriageEligibility(undefined);
marriageEligibility("female", 18);
marriageEligibility( null);
