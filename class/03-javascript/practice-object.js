//코드지갑

let friend = {name: "철수", age:13}
///undefined
let friend = {
    name: "철수",
    age:13,
    camp: "코드캠프"
}
//undefined
friend
{name: '철수', age: 13, camp: '코드캠프'}
friend.age
13
friend.name
'철수'
let classmates = [
    { name : "철수", age:13, school: "1초등학교"},
    { name : "영희", age:12, school: "2초등학교"},
    { name : "문희", age:16, school: "3초등학교"}
]
//undefined
classmates[0].name
'철수'


// -----
const fruits = [
    { number: 1, title: "레드향" },   
    { number: 2, title: "샤인머스켓" }, 
    { number: 3, title: "산청딸기" }, 
    { number: 4, title: "한라봉" },   
    { number: 5, title: "사과" }, 
    { number: 6, title: "애플망고" },
    { number: 7, title: "딸기" },   
    { number: 8, title: "천혜향" }, 
    { number: 9, title: "논산딸기" },
    { number: 10, title: "두리안" }
];
undefined
for (let i = 0; i < 10; i++) {
    console.log(fruits[i].number + " " + fruits[i].title);
}
VM2665:2 1 레드향
VM2665:2 2 샤인머스켓
VM2665:2 3 산청딸기
VM2665:2 4 한라봉
VM2665:2 5 사과
VM2665:2 6 애플망고
VM2665:2 7 딸기
VM2665:2 8 천혜향
VM2665:2 9 논산딸기
VM2665:2 10 두리안
undefined