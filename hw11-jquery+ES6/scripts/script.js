// 程式碼寫在這裡!

// Step0:設定玩家和莊家的牌組（空陣列）
let yourDeck = [];
let dealerDeck = [];
let yourPoint = 0;
let dealerPoint = 0;
let inGame = false;
// 0:未定，1:玩家贏，2:莊家贏，3:平手
let winner = 0; 




// Step1:頁面啟動時，初始化卡片及按鈕
// Step1-1.在頁面準備好時，才做下方的功能。
$(document).ready(function(){
    initCards();
    initButtons();
});

// Step1-2-2.先初始化、設定洗牌後的牌組、發牌的順序，呼叫發牌的動作
function newGame(){
    // 初始化
    resetGame();

    // 設定洗牌後的牌組
    deck = shuffle(buildDeck());

    // 設定發牌的順序
    yourDeck.push(deal());
    dealerDeck.push(deal());
    yourDeck.push(deal());

    // 遊戲開始
    inGame = true;

    // 呼叫發牌的動作
    renderGameTable();
    console.log('New Game!');
}

// Step1-2-3.發牌的順序
function deal(){
    return deck.shift();
}

// Step1-2-1.指定卡牌底色及花樣

function initButtons(){
    $('#action-new-game').click(evt => newGame());

    $('#action-hit').click(evt =>{
        evt.preventDefault();
        yourDeck.push(deal());
        renderGameTable();
    });

    $('#action-stand').click(evt =>{
        evt.preventDefault();
        dealerDeck.push(deal());
        dealerRound();
    });
}

function initCards(){
    $('.card div').html('㊙');
}


// Step2:
// Step2-1.建立牌組:先製作一個空陣列。再用兩個回圈形成花色和數字共52張牌。將卡片塞到陣列裡。最後再將整個陣列回傳。
function buildDeck(){
    let deck = [];
    for(let suit = 1; suit <= 4; suit++){
        for(let number = 1; number <= 13; number++){
            let c = new Card(suit, number);
            deck.push(c);
        }
    }
    return deck;
}

// Step2-2.洗牌的功能(來源：https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

// Step3:翻出莊家一張、玩家兩張的牌，計算雙方點數並呈現在畫面上
function renderGameTable(){
  // 牌
  yourDeck.forEach((card, i) => {
    let theCard = $(`#yourCard${i + 1}`);
    theCard.html(card.cardNumber());
    theCard.prev().html(card.cardSuit());
  });

  dealerDeck.forEach((card, i) => {
    let theCard = $(`#dealerCard${i + 1}`);
    theCard.html(card.cardNumber());
    theCard.prev().html(card.cardSuit());
  });

    // 算點數
    yourPoint = calcPoint(yourDeck);
    dealerPoint = calcPoint(dealerDeck);

    // 定義雙方任一點數超過21點，遊戲結束。
    if(yourPoint >= 21 || dealerPoint >= 21){
        inGame = false;
    }

    // 算輸贏
    checkWinner();
    showWinStamp();

    // 呈現點數
    $('.your-cards h1').html(`你： ${yourPoint}點`);
    $('.dealer-cards h1').html(`莊家： ${dealerPoint}點`);

    // 按鈕啟動寫法1
    // if(inGame){
    //     $('#action-hit').attr('disabled',false);
    //     $('#action-stand').attr('disabled',false);
    // }else{
    //     $('#action-hit').attr('disabled',true);
    //     $('#action-stand').attr('disabled',true);
    // }

    // 按鈕啟動寫法2
    $('#action-hit').attr('disabled', !inGame);
    $('#action-stand').attr('disabled', !inGame);
}

function checkWinner(){
    switch(true){
        // 1.如果玩家21點，玩家贏
        case yourPoint == 21:
            winner = 1;
            break;
        // 3.如果點數爆掉
        case yourPoint > 21:
            winner = 2;
            break;
        case dealerPoint > 21:
            winner = 1;
            break;
        // 2.平手
        case dealerPoint == yourPoint:
            winner = 3;
            break;
        // 0.比點數
        case dealerPoint > yourPoint:
            winner = 2;
            break;
    
        default:
            winner = 0;
            break;
        }
    }

function showWinStamp(){
    switch(winner){
        // 1.玩家贏
        case 1:
            $('.your-cards').addClass('win');
            break;
        // 2.莊家贏
        case 2:
            $('.dealer-cards').addClass('win');
            break;
        // 3.平手
        case 3:
            break;
        
        default:
            break;
        }
    }

// Step4:設定計算點數的功能、新增A的特殊計點方式
function calcPoint(deck){
    let point = 0;

    deck.forEach(card =>{
        point += card.cardPoint();
    });

    if(point > 21){
        deck.forEach(card =>{
            if(card.cardNumber() === 'A'){
                // A的點數從11點變1點
                point -= 10;
            }
        })
    }
    
    return point;
}

// Step4:遊戲重置(清除手上的牌和點數)
function resetGame(){
    deck = [];
    yourDeck = [];
    dealerDeck = [];
    yourPoint = 0;
    dealerPoint = 0;
    winner = 0;

    // initCards(); 
}


function dealerRound(){
    // 1.發牌
    // 2.如果點數>=玩家，莊家贏
    // 3.如果點數<=玩家，繼續發，重複1的動作
    // 4.如果>21點，結束，玩家贏
    
    while(true){
        dealerPoint = calcPoint(dealerDeck);
        if(dealerPoint < yourPoint){
            dealerDeck.push(deal());
        }else{
            break;
        }
    }

    inGame = false;

    renderGameTable();

}






// Step2-3.建立卡牌類別、增加牌面、點數和花色
class Card{
    constructor(suit, number){
        this.suit = suit;
        this.number = number;
    }

    cardNumber(){
        switch(this.number){
            case 1:
                return 'A';
            case 11:
                return 'J';
            case 12:
                return 'Q';
            case 13:
                return 'K';
            default:
                return this.number;
        }
    }

    cardPoint(){
        switch(this.number){
            case 1:
                return 11;
            case 11:
            case 12:
            case 13:
                return 10;
            default:
                return this.number;
        }
    }

    cardSuit(){
        switch(this.suit){
            case 1:
                return '♠';
            case 2:
                return '♣';
            case 3:
                return '♥';
            case 4:
                return '♦';
        }
    }
}