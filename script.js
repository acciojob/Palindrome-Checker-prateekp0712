// complete the given function

function palindrome(str){
	const len = string.length;
	for(let i=0;i<len/2;i++){
		if(string[i] !==string[len -1 -i]){
			alert('it is not a palindrome')
		}
	}
	alert('it is a palindrome')

}

module.exports = palindrome
