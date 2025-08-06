// complete the given function

function palindrome(str){
	const s = str.replaceAll(' ','');
	let i=0,j=str.length-1;
	while(i<j){
		
		if((s[i].toLowerCase())!==(s[j].toLowerCase()))return false;
		i++;
		j--;
	}
return true;
}
module.exports = palindrome
