console.log("***** Switch case ******");
function weekDay(day) {
  switch (day) {
    case 1:
      console.log(`Day of week is ${day}: Monday`);
      break;
    case 2:
      console.log(`Day of week is ${day}: Tuesday`);
      break;
    case 3:
      console.log(`Day of week is ${day}: Wednesday`);
      break;
    case 4:
      console.log(`Day of week is ${day}: Thursday`);
      break;
    case 5:
      console.log(`Day of week is ${day}: Friday`);
      break;
    case 6:
      console.log(`Day of week is ${day}: Saturday`);
      break;
    case 7:
      console.log(`Day of week is ${day}: Sunday`);
      break;
    default:
      console.log("Invalid day");
      break;
  }
}
weekDay(3); // 1 to 7, invalid
weekDay(7); 
weekDay(0); 
weekDay(-2); 
weekDay(100); 
weekDay(null);
weekDay(undefined);
