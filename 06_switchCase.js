function dayOfTheWeek(dayNum) {
  switch (dayNum) {
    case 1:
      console.log(`Day Number ${dayNum}==>Monday`);

      break;
    case 2:
      console.log(`Day Number ${dayNum}==>Tuesday`);

      break;
    case 3:
      console.log(`Day Number ${dayNum}==>Wednesday`);

      break;
    case 4:
      console.log(`Day Number ${dayNum}==>Thursday`);

      break;
    case 5:
      console.log(`Day Number ${dayNum}==>Friday`);

      break;
    case 6:
      console.log(`Day Number ${dayNum}==>saturday`);

      break;
    case 7:
      console.log(`Day Number ${dayNum}==>Sunday`);

      break;

    default:
      console.log(`Invalid Day Number ${dayNum}`);
      break;
  }
}
dayOfTheWeek(2);
dayOfTheWeek(3);
dayOfTheWeek(7);
dayOfTheWeek(0);
dayOfTheWeek(null);
dayOfTheWeek(NaN);
