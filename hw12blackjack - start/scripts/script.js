// 程式碼寫在這裡!

// Step1:頁面啟動時，初始化卡片及按鈕
// 1.在頁面準備好時，才做下方的功能。
$(document).ready(function(){
    initCards();
    initButtons();
});

// 2.用jquery指定卡牌底色花樣
function initCards(){
    $('.card div').html('㊙');
}

function initButtons(){
    $('#action-new-game').click(evt => newGame());
}

function newGame(){
    console.log('hi')
}

