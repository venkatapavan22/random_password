const passwordValue=document.getElementById("password")
const passLen=10;

const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz";
const numbers="1234567890";
const symbols="!@#$%^&*()/?><";

const allChars=lowercase+upperCase+numbers+symbols

function createPassword(){
    let password="";
    password += upperCase[Math.floor(Math.random()*upperCase.length)]
    password += lowercase[Math.floor(Math.random()*lowercase.length)]
    password += numbers[Math.floor(Math.random()*numbers.length)]
    password += symbols[Math.floor(Math.random()*symbols.length)]

    while(passLen>password.length){
        password+=allChars[Math.floor(Math.random()*allChars.length)]
    }

    passwordValue.value=password;
}

function copyPassword(){
    passwordValue.select();
    document.execCommand("copy");
}