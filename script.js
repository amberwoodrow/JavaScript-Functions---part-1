// 1.
function sum (num1, num2) {
  return(num1 + num2);
}

console.log(sum(1, 2);
console.log(sum(3, 5));

// 2.
function isEqual(arg1, arg2) {
  if (arg1 === arg2) {
    return("true");
  }else {
    return("false");
  }
}

console.log(isEqual('hi', 'hi'));
console.log(isEqual('no', 'yes'));
console.log(isEqual('1', '5'));

// 3.
function discountPercentage (discount, cost) {
  if (discount >= 100 || discount <= 0){
    return("Your discount must be between 1 - 99");
  } else {
    totalDiscount = cost * (discount/100);
    return("The total discount is $" + totalDiscount);
  }
}

console.log(discountPercentage(40, 100));
console.log(discountPercentage(30, 10));
console.log(discountPercentage(0, 60));
console.log(discountPercentage(-2, 40));
console.log(discountPercentage(200, 25));

// 4.
function stringCapitalize (str) {
  var strLength = str.split(" ").length;
  var wordArray = str.split(" ");
  var newStr = ""
  for (i=0; i<strLength; i++) {
    newStr += wordArray[i].replace(wordArray[i][0], wordArray[i][0].toUpperCase()) + " ";
  }
  return (newStr.trim());
}

console.log(stringCapitalize("hello jon jacob jingle hiemer smith"));

// 5.
function evenNumbers (num) {
  var number= ""
  if (num >= 0 && num <= 100){
    for (var i = 0; i<= num; i+=2) {
      number += i + " ";
    }
    return(number);
  } else {
    return("You did not enter a number between 0 - 100.");
  }
}

console.log(evenNumbers(8));
console.log(evenNumbers(20));
console.log(evenNumbers(106));

// 6.
function isDivisible(num1, num2) {
  if (num1%num2 === 0) {
    return('true');
  } else {
    return('false');
  }
}

console.log(isDivisible(9, 3));
console.log(isDivisible(3, 10));

// 7.
function oddNumbers(num) {
  if (num >=0 && num <= 100) {
    var nums = "";
    if (num >= 40) {
      for (i=41; i <= num; i+=2) {
        nums += i + " ";
      }
    } else {
      for (i=1; i <= num; i+=2) {
        nums += i + " ";
      }
    }
      return(nums);
  } else {
    return("You did not enter a number between 0 - 100.")
  }
}

console.log(oddNumbers(8));
console.log(oddNumbers(53));
console.log(oddNumbers(1000));
console.log(oddNumbers(100));
console.log(oddNumbers(1000));
console.log(oddNumbers(-100));
