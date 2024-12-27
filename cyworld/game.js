const startWord = () => {
	let myword = document.getElementById("myword").value; //입력된 값을 가져오기위함 value
	let word = document.getElementById("word").innerText; //사이 내용 가져오기 위해 innerText

	let lastword = word[word.length - 1];
	let firstword = myword[0];

	if (lastword === firstword) {
		//정답일때
		document.getElementById("result").innerText = "정답입니다!";
		document.getElementById("word").innerText = myword;
		document.getElementById("myword").value = "";
	} else {
		//오답일때
		document.getElementById("result").innerText = "오답!";
		document.getElementById("myword").value = "";
	}
};
