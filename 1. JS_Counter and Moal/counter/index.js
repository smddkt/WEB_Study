const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");


console.log(number); 
console.log(increase);
console.log(decrease);


increase.onclick = () => {
    console.log("increase가 클릭됨");
    const current = parseInt(number.innerText, 10); //parseInt는 문자열을 정수로 변환, 두번째 인자 10은 10진수로 변환한다는 뜻
    number.innerText = current+1; //1씩 더하기
};


decrease.onclick = () => {
    console.log("decrease가 클릭됨");
    const current = parseInt(number.innerText, 10)
    number.innerText = current-1;
};