// 程式碼寫在這裡!


// hw9的寫法在上方
document.querySelector('.selectAll').addEventListener("click", function(evt){
    evt.preventDefault();
    selectAllSkills();
})

document.querySelector('#minusItem').onclick = function(evt) {
    evt.preventDefault();
    addProduct(-1);
}

document.querySelector('#addItem').onclick = function(evt) {
    evt.preventDefault();
    addProduct(1);
}






// hw8的寫法在下方

// 想學會的技能「全選」的功能
function selectAllSkills(){
    var skills = document.querySelectorAll('.skill');

    for (i = 0; i < skills.length; i++) {
        var s = skills[i];
        s.checked = true;
    }
}

// 按「+-值」會有的功能
function addProduct(amount){
    // 抓到數量0
    var quantityField = document.querySelector('#item1Quantity');
    // 抓到小計0（目前是抓到整個span）
    var priceField = document.querySelector('#item1Price');
    // 把quantity定義為：改變元素裡的值，並轉化為數字的行為。
    var quantity = parseInt(quantityField.innerHTML);

    quantity = quantity + amount;
    // 也可寫成quantity += amount;

    // 設定quantity最小值為0
    if(quantity < 0 ){quantity = 0;}

    // 將quantity呈現在quantity
    quantityField.innerHTML = quantity;

    // 讓「小計」的地方，有自動計算的功能
    priceField.innerHTML = quantity * 300;
    
}

