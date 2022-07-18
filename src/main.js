// let form=document.getElementById(`todo-form`);

let form=document.querySelector("#todo-form");
let bt=document.querySelector(".submit");
let head=document.querySelector("h1")
let list=document.querySelector("#todo-list");
//선택자
bt.onclick=function (){
    form.style.backgroundColor=`red`;
    head.textContent="Hello";
}
//색깔 바꾸기
form.style.backgroundColor=`blue`;
//텍스트 바꾸기
// head.textContent="Hello";
//태그 변경하기
list.lastElementChild.innerHTML="<h1>HelloWorld</h1>";
//태그 추가하기
