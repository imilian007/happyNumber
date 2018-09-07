"use strict";


let userNumber = prompt("Enter a number to test if it is happy or sad");
let flag = 0;
let breakCase = 0;
let referenceArray = [];

while(flag != 1 && breakCase != 1)
{
	let splitNumber = userNumber.split("")

	let decimalArray = [];

	let newUserNumber = 0;

	for(let i = 0; i < splitNumber.length; i++)
	{
		let decimalStr = splitNumber.pop()

		let onesPlaceInt = parseInt(decimalStr)

		onesPlaceInt = Math.pow(onesPlaceInt, 2)

		decimalArray.unshift(onesPlaceInt);

		decimalStr = "" + onesPlaceInt;

		splitNumber.unshift(decimalStr);
	}

	for(let i = 0; i < decimalArray.length; i++)
	{
		newUserNumber += decimalArray[i];
	}

	userNumber = "" + newUserNumber;

	referenceArray.unshift(newUserNumber);

	for (let i = 0; i < referenceArray.length; i++) 
	{
		if (newUserNumber === referenceArray[i+1])
		{
			breakCase = 1
			break;
		}
	}

	flag = newUserNumber;
}

if (flag === 1) 
	{
		console.log("Your number is a happy number!")
	}

else if (breakCase === 1)
	{
		console.log("Your number is a sad number :(")
	}