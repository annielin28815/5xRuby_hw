// 函數練習-決定看電影的因素是成年與否


function isAdult(age){
  return(age >= 18);
//  if(age >= 18){
//    return true;
//  } else{
//    return false;
//  }
}


var age = 28 ;

if(isAdult(age)){
     console.log('您可以收看這部電影唷！');
 } else{
   console.log('抱歉，您不能觀賞唷！');
 }


