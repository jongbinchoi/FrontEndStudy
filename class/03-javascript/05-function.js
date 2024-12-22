// // 함수 선언식 , 호이스팅 문제
// function hello(name) {
// 	alert(name + "님 안녕하세요");
// }

// // 함수 표현식, 익명함수
// const hello = function (name) {
// 	alert(name + "님 안녕하세요");
// };

// // 화살표 함수(function과동일 간소화한것) <- 실무
// const hello = (name) => {
// 	alert(name + "님 안녕하세요");
// };

// 함수 선언식

// function number() {
// 	const token = String(Math.floor(Math.random() * 100000)).padStart(6, "0");
// 	document.getElementById("num").innerText = token;
// }

let number = () => {
	const token = String(Math.floor(Math.random() * 100000)).padStart(6, "0");
	document.getElementById("num").innerText = token;
	document.getElementById("num").style.color = "#" + token;
};
