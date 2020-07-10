// 函數練習-BMI判斷

var bodyWeight = prompt('請輸入您的體重。(公斤)') ;
var bodyHeight = prompt('請輸入您的身高。(公尺)')  ;
var bmi = bodyWeight / (bodyHeight * bodyHeight);


console.log ('您的體重是 ' + bodyWeight + '公斤');
console.log ('您的身高是 ' + bodyHeight + '公尺');
console.log ('您的BMI值是 ' + bmi );


function bmiResult(bmi){
  if(bmi >= 24){
  return true;
}else{
  return false;
}
}



if (bmiResult(bmi)){
  console.log('你該運動了拉！');
}else{
  console.log('太棒了！你的BMI值在標準範圍內。');
}



