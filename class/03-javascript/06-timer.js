let number = () => {
	const token = String(Math.floor(Math.random() * 100000)).padStart(6, "0");
	document.getElementById("num").innerText = token;
	document.getElementById("num").style.color = "#" + token;

	let time = 2;

	setInterval(function () {
		if (time >= 0) {
			let min = Math.floor(time / 60); // 분 계산, floor 소수점 날려버림
			let sec = String(time % 60).padStart(2, "0"); // 초 계산, 두 자리로 출력
			document.getElementById("timer").innerText = `${min}:${sec}`; // 타이머 값 갱신
			time -= 1; // 시간을 1초씩 감소
		} else {
			document.getElementById("finish").disabled = true; // 버튼 비활성화
		}
	}, 1000); // 1초 간격으로 실행
};
