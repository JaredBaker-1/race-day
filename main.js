let raceNumber = Math.floor(Math.random() * 1000);
let early = true;
let age = 18;

if(early && age > 18){
  raceNumber += 1000;
} 

if(early && age > 18) {
  console.log(`${raceNumber}'s race will start at 9:30 am.`);
}
else if(!early && age > 18) {
  console.log(`${raceNumber}'s race will start at 11:00 am.`);
}
else if (age < 18 ) {
  console.log(`${raceNumber}'s race will start at 12:30 pm.`);
}
else {
  console.log(`${raceNumber} please see the registration desk.`);
}