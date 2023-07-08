console.log('Hey its working');
const myArray = [];
function buttonclick(){
    console.log('button is clicked');
    const inpEle = document.body.querySelector('.js-inp');
    const name = inpEle.value;
    // console.log(value);
    myArray.push(name);
    console.log(myArray);
    inpEle.value = '';
}
// const secondArr = ['hello','hey','how'];
const secondArr = [];
let para = '';
function secondclick(){
    const elem = document.body.querySelector('.js-inp-2');
    const val = elem.value;
    // console.log(val);
    let html2 = `<p>${val}</p>`;
    para = para+html2;
    elem.value = '';
}
function changetext(){
    document.body.querySelector('.main-second').innerHTML = para;
}
// console.log(para);
function eventclick(event){
    // console.log(event.key);
    if(event.key=='Enter'){
        secondclick();
    }
}