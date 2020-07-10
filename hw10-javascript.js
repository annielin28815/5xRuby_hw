// 物件練習(兩個方法呈現一樣的結果)

// 方法1
// 先設定一個烤盤

function Pokemon (name, skill) {
    this.name= name;
    this.skill= skill;
    this.attack = function(){
        var sound = this.name.slice(0, 2).repeat(2);
        console.log('攻擊吧！' + this.name + '！使出' + this.skill + '吧！' + sound);
    }
}

// 再設定倒入的內容物
var pikachu = new Pokemon('皮卡丘', '十萬伏特');
var turtle = new Pokemon('傑尼龜', '水槍');

// 呼叫出他的招式
pikachu.attack();










// // 方法2
// // 先設定一個烤盤

// function Pokemon (name, skill) {
//     this.name= name;
//     this.skill= skill;
// }


// Pokemon.prototype.attack = function(){
//     var sound = this.name.slice(0, 2).repeat(2);
//     console.log('攻擊吧！' + this.name + '！使出' + this.skill + '吧！' + sound);
// }

// // 再設定倒入的內容物
// var pikachu = new Pokemon('皮卡丘', '十萬伏特');
// var turtle = new Pokemon('傑尼龜', '水槍');

// // 呼叫出它的招式
// pikachu.attack();
