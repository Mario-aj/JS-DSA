function timeConversion(s = "") {
  // Write your code here
  let [hour, minutes, seconds] = s.split(":");

  if (seconds.substring(2) === "PM") {
    let hourIn24Pattern = Number(hour) + 12;

    if (hourIn24Pattern < 24) {
      hour = String(hourIn24Pattern);
    }
  } else {
    if (hour === "12") {
      hour = "00";
    }
  }

  seconds = seconds.slice(0, 2);

  return [hour, minutes, seconds].join(":");
}

console.log(timeConversion("12:42:31PM"));
console.log(timeConversion("12:42:31AM"));
