// // // let form=document.getElementById(`todo-form`);
// //
// // let form=document.querySelector("#todo-form");
// // let bt=document.querySelector(".submit");
// // let head=document.querySelector("h1")
// // let list=document.querySelector("#todo-list");
// // //선택자
// // bt.onclick=function (){
// //     form.style.backgroundColor=`red`;
// //     head.textContent="Hello";
// //     alert("버튼 눌렀음")
// // }
// // //색깔 바꾸기
// // form.style.backgroundColor=`blue`;
// //
// // //텍스트 바꾸기
// // // head.textContent="Hello";
// // //태그 변경하기
// // list.lastElementChild.innerHTML="<h1>안녕하세요</h1>";
// // //태그 추가하기
// // document.createElement()

let bt1=document.querySelector("#one");
let bt2=document.querySelector("#two");
let area=document.querySelector("#area");

let handClick=function (){
    alert("저를 클릭 하셨나요");
}

let a=function (){
    console.log("div 생성중");
    let newDiv=document.createElement("div")
    newDiv.style.backgroundColor="red";
    newDiv.style.width=`100px`
    newDiv.style.height=`100px`
    area.appendChild(newDiv);//이 안에다가 생성해준다 라는 뜻
}
//이벤트 달기
bt1.addEventListener(`click`,handClick);
bt2.addEventListener(`click`,a);


















