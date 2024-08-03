let 이름 = ['Lee', 'park'];
let 이름 = 'Lee';
let 이름 = { 이름: 'Lee' };
let 이름 = 'Lee';
let 이름 = 90090;



//타입 지정하는 법

interface InputProps {
 id?: string;
 placeholder?: string;
 value?: string;
 buttonTitle?: string;
 error?: boolean;
 helperType: string; // error, description
 helperText?: string;
 disabled?: boolean;
 onChange?: any;
 onClick?: any;
}

