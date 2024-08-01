module.exports = function toReadable (number) {
  let single_number = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  let below_twenty = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  let below_hundred = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  if (number < 10) {
    return single_number[number];
  } else if (number > 9 && number < 20) {
      return below_twenty [number - 10];
  } else if (number > 19 && number < 100) {
      let second_number = toReadable (number % 10);
      return below_hundred[(number - (number % 10)) / 10 -2] + " " + second_number;
  } else {
      return single_number[Math.trunc(number / 100)] + " hundred " + toReadable(number % 100);
  }
}
