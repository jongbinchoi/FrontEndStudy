setTimeout(function () {
	console.log("펑");
}, 3000);
// 1101
// instrument.ts:113 펑
setInterval(function () {
	console.log("3초가 지났다");
}, 3000);
// 1700
// 18instrument.ts:113 3초가 지났다

let time = 10;
setInterval(function () {
	if (time >= 0) {
		console.log(time);
		time = time - 1;
	}
}, 1000);
// 211
// instrument.ts:113 10
// instrument.ts:113 9
// instrument.ts:113 8
// instrument.ts:113 7
// instrument.ts:113 6
// instrument.ts:113 5
// instrument.ts:113 4
// instrument.ts:113 3
// instrument.ts:113 2
// instrument.ts:113 1
// instrument.ts:113 0

let time = 180;
setInterval(function () {
	if (time >= 0) {
		let min = Math.floor(time / 60);
		//padStart(2,"0") 두자리가 되지않았을때 0을 채워라
		let sec = String(time % 60).padStart(2, "0");
		console.log(min + ":" + sec);
		time -= 1;
	}
}, 1000);
