function Change(txt) {
	let arr = [];
	for(let i = 0; i < 10; i++) {
		let a = + txt.replace('*', i);
		if(a % 6 === 0) {
			arr.push(a);
		}
	}
	return arr;
}

console.log(Change('1*9'));
