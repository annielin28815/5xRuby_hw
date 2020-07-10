var clicker = document.querySelector('#clicker');

// 事件監聽-方法1
// clicker.addEventListener("click" , function(){
//     console.log('我被按了QQ');
// });

// 事件監聽-方法2
clicker.onclick = function(){
    console.log('我被按了YY');
};