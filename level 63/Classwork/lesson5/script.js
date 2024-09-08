const date1 = new Date("2022-03-25");
const date2 = new Date("October 13, 2014 11:13:00");

const year1 = date1.getFullYear();
const month1 = date1.getMonth();
const date1Day = date1.getDate();
const day1 = date1.getDay();
const hours1 = date1.getHours();
const minutes1 = date1.getMinutes();
const seconds1 = date1.getSeconds();
const milliseconds1 = date1.getMilliseconds();

const year2 = date2.getFullYear();
const month2 = date2.getMonth();
const date2Day = date2.getDate();
const day2 = date2.getDay();
const hours2 = date2.getHours();
const minutes2 = date2.getMinutes();
const seconds2 = date2.getSeconds();
const milliseconds2 = date2.getMilliseconds();

console.log("First Date Object (2022-03-25):");
console.log("Year:", year1);
console.log("Month:", month1);
console.log("Date:", date1Day);
console.log("Day of Week:", day1);
console.log("Hours:", hours1);
console.log("Minutes:", minutes1);
console.log("Seconds:", seconds1);
console.log("Milliseconds:", milliseconds1);

console.log("Second Date Object (October 13, 2014 11:13:00):");
console.log("Year:", year2);
console.log("Month:", month2);
console.log("Date:", date2Day);
console.log("Day of Week:", day2);
console.log("Hours:", hours2);
console.log("Minutes:", minutes2);
console.log("Seconds:", seconds2);
console.log("Milliseconds:", milliseconds2);
