function Compare(n) {
	if(n === 9) {
		return 0;
	}
	else if(n < 19) {
		return 19 - n;
	}
	else {
		return 3 * (n - 19);
	}
}

console.log(Compare(12));