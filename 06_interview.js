var interviewEligibility = function (
  gradScore,
  hscScore,
  sscScore,
  candidateName
) {
  if (gradScore >= 70 || hscScore >= 80 || sscScore > 90) {
    console.log(`${candidateName} :You are  eligible for TCS interview`);
  } else {
    if (
      gradScore == null ||
      gradScore == NaN ||
      gradScore == undefined ||
      hscScore==null||
      hscScore==NaN||
      hscScore==undefined||
      sscScore==null||
      sscScore==undefined||
      sscScore==NaN||
      candidateName==NaN||
      candidateName==undefined||
      candidateName==null||

        gradScore < 70 ||
        hscScore < 80 ||
        sscScore < 90)
     {
      console.log(`${candidateName} :You are not eligible for TCS interview`);
    }
  }
};
interviewEligibility(85.97, 69.85, 88.2, "Pratiksha Bhuse");
interviewEligibility(77, 55, 81, "Diksha Ubale");
interviewEligibility(NaN, 66, 68, "xyz");
interviewEligibility(55, NaN, 68, "pqr");
interviewEligibility(55, 66, undefined, "uvw");
interviewEligibility(55, 66, 68, null);
