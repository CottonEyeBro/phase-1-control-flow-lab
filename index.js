function scuberGreetingForFeet(ride){
  const midDistanceFee = 'That will be twenty bucks.';
  const longDistanceFee = 'I will gladly take your thirty bucks.';
  if (ride <= 400) {
    return 'This one is on me!';
  } else if (ride > 400 && ride <= 2000) {
    return midDistanceFee;
  } else if (ride > 2000 && ride <= 2500) {
    return longDistanceFee;
  } else {
    return 'No can do.';
  }
}

function ternaryCheckCity(destination){
  return destination === 'NYC' ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return "Thank you so much.";
      break;
    case 'not as generous':
      return "Thank you.";
      break;
    default:
      return "Bye.";
  }
}