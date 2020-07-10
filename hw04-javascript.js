// 函數練習-判斷是否為閏年


var year = prompt('請輸入西元年份，以判斷是否為閏年。');

console.log ('您輸入的年份是 ' + year);



function isLeapYear(year){
  if(year %4 === 0 && year %100 !== 0 || year %400 === 0){
  return true;
}else{
  return false;
}
}



if (isLeapYear(year)){
  console.log('此年是閏年唷！');
}else{
  console.log('此年不是閏年。');
}



