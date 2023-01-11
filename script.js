// complete the given function

function palindrome(str){
	let polishedString = str.replace(\/W+/g, "");
	let reversedString = polishedString.split("").reversed().join("");
	console.log(reversedString,polishedString)
	if(polishedString != reversedString){
		return false;
	}
	return true;

}
module.exports = palindrome
