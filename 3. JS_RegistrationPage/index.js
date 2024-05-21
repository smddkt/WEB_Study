let elInputName = document.querySelector("#name"); //입력된 이름 정보
let elNameSuccess = document.querySelector(".name-success"); //이름 입력 성공 메시지
let elNameFailure = document.querySelector(".name-failure"); //이름 입력 실패 메시지


let elInputEmail = document.querySelector("#email");
let elEmailSuccess = document.querySelector(".email-success");
let elEmailFailure = document.querySelector(".email-failure");

let elInputAge = document.querySelector("#age");
let elAgeSuccess = document.querySelector(".age-success");
let elAgeFailure1 = document.querySelector(".age-failure1");
let elAgeFailureNum = document.querySelector(".age-failure-num");
let elAgeFailurePos = document.querySelector(".age-failure-positive");
let elAgeFailureDec = document.querySelector(".age-failure-dec");
let elAgeFailure19 = document.querySelector(".age-failure-19");

let elInputPwd = document.querySelector("#password");
let elPwdSuccess = document.querySelector(".pwd-success");
let elPwdFailureMin = document.querySelector(".pwd-failure-min");
let elPwdFailureMax = document.querySelector(".pwd-failure-max");
let elPwdFailureMix = document.querySelector(".pwd-failure-mix");

let elInputCpwd = document.querySelector("#passwordConfirm");
let elCpwdSuccess = document.querySelector(".cpwd-success");
let elCpwdFailure = document.querySelector(".cpwd-failure");

let elRegister = document.querySelector(".signUp");

//이름
function nameStr(str) {
    return str.length >0;
}

//이메일
function email(str) {
    return /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/.test(str);
}

//나이

function age(value) {
    return value.length >0;
}

function ageType(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}

function isPositive(num){
    return num>=0;
}

function hasDecimal(num) {
    return num == Math.floor(num);
}

function upper19(num){
    return num>=19;
}




//비번
function pwdMin(value) {
    return value.length >=4;
}

function pwdMax(value) {
    return value.length <= 12;
}

function pwdMix(str) {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,12}$/.test(str);
}

//비번확인
function isMatch(password1, password2) {
    return password1.trim() !== '' && password1 === password2;
}




elRegister.addEventListener('click', function(){
    // 이름 입력 확인
    if (!nameStr(elInputName.value)) {
        elNameFailure.classList.remove('hide');
        elNameSuccess.classList.add('hide');
    }else {
        elNameFailure.classList.add('hide');
        elNameSuccess.classList.remove('hide');
    }
    // 이메일 입력 확인
    if (!email(elInputEmail.value)) {
        elEmailFailure.classList.remove('hide');
        elEmailSuccess.classList.add('hide');
    }else {
        elEmailFailure.classList.add('hide');
    if (email(elInputEmail.value)) {
        elEmailSuccess.classList.remove('hide');
    }}


    // 나이 입력 확인
    if (!age(elInputAge.value)) {
        elAgeFailure1.classList.remove('hide');
    }else {
        elAgeFailure1.classList.add('hide');
    }
    if (age(elInputAge.value) && !ageType(elInputAge.value)) {
        elAgeFailureNum.classList.remove('hide');
        elAgeFailure19.classList.add('hide');
        elAgeFailureDec.classList.add('hide');
    }else{
        elAgeFailureNum.classList.add('hide');
    }
    if (!isPositive(elInputAge.value) && age(elInputAge.value) && ageType(elInputAge.value)) {
        elAgeFailurePos.classList.remove('hide');
        elAgeFailure19.classList.add('hide');
    }else{
        elAgeFailurePos.classList.add('hide');
    }
    if (!hasDecimal(elInputAge.value) && age(elInputAge.value) && ageType(elInputAge.value)) {
        elAgeFailureDec.classList.remove('hide');
        elAgeFailure19.classList.add('hide');
    }else{
        elAgeFailureDec.classList.add('hide');
    }
    if (!upper19(elInputAge.value) && isPositive(elInputAge.value) && hasDecimal(elInputAge.value) &&age(elInputAge.value)) {
        elAgeFailure19.classList.remove('hide');
    }else{
        elAgeFailure19.classList.add('hide');
    }
    if (upper19(elInputAge.value) && ageType(elInputAge.value)){
        elAgeSuccess.classList.remove('hide');
    }else(elAgeSuccess.classList.add('hide'))

    // 비번 입력 확인
    if (!pwdMin(elInputPwd.value)) {
        elPwdFailureMin.classList.remove('hide');
    }else {
        elPwdFailureMin.classList.add('hide');
    }

    if (!pwdMax(elInputPwd.value)) {
        elPwdFailureMax.classList.remove('hide');
    }else {
        elPwdFailureMax.classList.add('hide');
    }

    if (pwdMix(elInputPwd.value)){
        elPwdSuccess.classList.remove('hide');
        elPwdFailureMix.classList.add('hide');
    }else{
        elPwdSuccess.classList.add('hide');
        if (pwdMin(elInputPwd.value)&&pwdMax(elInputPwd.value)){
            elPwdFailureMix.classList.remove('hide');
        }
    }

    // 비번일치 입력 확인
    if (!isMatch(elInputPwd.value, elInputCpwd.value)) {
        elCpwdFailure.classList.remove('hide');
        elCpwdSuccess.classList.add('hide');
    }else{
        elCpwdFailure.classList.add('hide');
        elCpwdSuccess.classList.remove('hide');

    }


});




const modal = document.querySelector('.modal');
const openModal = document.querySelector(".signUp");
const closeModal = document.querySelector(".closeModal");
const modal_background = document.querySelector('.modal_background');

openModal.addEventListener("click", ()=>{
    if (!elCpwdSuccess.classList.contains('hide')&&
    !elNameSuccess.classList.contains('hide')&&
    !elEmailSuccess.classList.contains('hide')&&
    !elAgeSuccess.classList.contains('hide')&&
    !elPwdSuccess.classList.contains('hide')){
    modal.style.display = "block";
    modal_background.style.display = "block";}
});


closeModal.addEventListener("click", ()=>{
    modal.style.display = "none";
    modal_background.style.display = "none";
});
