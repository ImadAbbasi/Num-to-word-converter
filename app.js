let btnConvet = document.querySelector("button");
let input = document.querySelector("input");
let output = document.querySelector("h2");

btnConvet.addEventListener("click", () => {
  output.innerText = numberToWords.toWords(input.value);
});

// const form = document.getElementById("myform");
// const num = document.getElementById("num");
// const converted = document.getElementById("converted");
// const btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//   converted.innerHTML = numberToWords(input.value);
// });

// const ones = {
//   0: "Zero",
//   1: "One",
//   2: "Two",
//   3: "Three",
//   4: "Four",
//   5: "Five",
//   6: "Six",
//   7: "Seven",
//   8: "Eight",
//   9: "Nine",
//   10: "Ten",
//   11: "Eleven",
//   12: "Twelve",
//   13: "Thirteen",
//   14: "Fourteen",
//   15: "Fifteen",
//   16: "Sixteen",
//   17: "Seventeen",
//   18: "Eighteen",
//   19: "Nineteen",
// };

// const prefixes = {
//   2: "Twenty",
//   3: "Thirty",
//   4: "Fourty",
//   5: "Fifty",
//   6: "Sixty",
//   7: "Seventy",
//   8: "Eighty",
//   9: "Ninety",
// };

// form.onsubmit = (event) => {
//   event.preventDefault();

//   if (+num.value in ones) {
//     converted.innerHTML = ones[+num.value];
//   }

//   //   const numArray = num.value.split("");
//   //   if (numArray.length === 2 && +num.value > 19) {
//   //     converted.innerHTML = prefixes[numArray[0]] + " " + ones[numArray[1]];
//   //   }
//   const numarr = num.value.split("");

//   if (numarr.length === 2 && +num.value > 19) {
//     converted.innerHTML = prefixes[numarr[0]] + " " + ones[numarr[1]];
//   }

//   //   converted.innerHTML = num.value;
// };
