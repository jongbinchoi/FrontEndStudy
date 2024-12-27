const changeFocus1 = () => {
	let phone1 = document.getElementById("p1").value;

	if (!/^\d*$/.test(phone1)) {
		// 정규표현식으로 숫자가 아닌 값이 있으면
		event.target.value = phone1.replace(/\D/g, ""); // 숫자가 아닌 문자를 제거
	}

	if (phone1.length === 3) {
		document.getElementById("p2").focus(); // 포커스 이동
	}
};

const changeFocus2 = () => {
	let phone2 = document.getElementById("p2").value;

	if (!/^\d*$/.test(phone2)) {
		// 정규표현식으로 숫자가 아닌 값이 있으면
		event.target.value = phone2.replace(/\D/g, ""); // 숫자가 아닌 문자를 제거
	}

	if (phone2.length === 4) {
		document.getElementById("p3").focus(); // 포커스 이동
	}
};
