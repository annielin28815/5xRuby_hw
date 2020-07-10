// 變數和流程控制練習-判斷是否為閏年

var year = prompt('請輸入西元年份，以判斷是否為閏年。');

console.log ('year = ' + year);

if(year %4 === 0 && year %100 !== 0 || year %400 === 0){
  console.log(year + '此年是閏年唷！');
}else{
  console.log(year + '此年不是閏年。');
}

