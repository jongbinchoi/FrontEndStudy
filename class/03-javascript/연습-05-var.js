"123" == 123;
true;
// 느슨한 동치 연산자 타입 비교 없이 값만 같으면 됨

"123" === 123;
false;
// 데이터 타입과 값까지 같아야 True

if (1 + 1 === 2) {
	console.log("정답입니다");
} else {
	console.log("틀렸습니다");
}
// VM1048:2 정답입니다

if (true) {
	console.log("정답입니다");
} else {
	console.log("틀렸습니다");
}
// VM1185:2 정답입니다
undefined;
if (!true) {
	console.log("정답입니다");
} else {
	console.log("틀렸습니다");
}
// VM1200:4 틀렸습니다
undefined;
if (0) {
	console.log("정답입니다");
} else {
	console.log("틀렸습니다");
}
// VM1208:4 틀렸습니다
// undefined
if (1) {
	console.log("정답입니다");
} else {
	console.log("틀렸습니다");
}
// VM1331:2 정답입니다
undefined;
if (null) {
	console.log("정답입니다");
} else {
	console.log("틀렸습니다");
}
// VM1356:4 틀렸습니다

const profile = {
	name: "철수",
	age: 12,
	school: "다람쥐초등학교",
};
// undefined;
if (profile.age >= 20) {
	console.log("성인입니다");
} else if (profile.age >= 8 && profile.age <= 19) {
	console.log("학생입니다");
} else {
	console.log("어린이입니다");
}
// VM2287:5 학생입니다

Math.floor(Math.random() * 100000);
// 90726
Math.floor(Math.random() * 100000);
// 4384
Math.floor(Math.random() * 100000);
// 461
String(Math.floor(Math.random() * 100000));
// '79420'
String(Math.floor(Math.random() * 100000)).padStart(6, "0");
// '048341'
String(Math.floor(Math.random() * 100000)).padStart(6, "0");
// '052806'
String(Math.floor(Math.random() * 100000)).padStart(6, "0");
// '061694'
let a = String(Math.floor(Math.random() * 100000)).padStart(6, "0");
// undefined
a;
// '042877'
