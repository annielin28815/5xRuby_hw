// 程式碼寫在這裡！

// 計算結果
function bmi(height, weight){
    var h = parseInt(height) / 100;
    var w = parseInt(weight);

    return( w / (h*h) ).toFixed(2);
}


// 新增判斷過瘦或過胖的功能
function checkBMI(bmi){
    if( bmi < 18.5){
        return "太瘦了！您低於標準值。";
    }else if( bmi >=18.5 &&  bmi < 24){
        return "體重正常唷";
    }else if( bmi >=24 &&  bmi < 27){
        return "過重囉";
    }else if( bmi >=27 &&  bmi < 30){
        return "輕度肥胖";
    }else if( bmi >=30 &&  bmi < 35){
        return "中度肥胖";
    }else if( bmi  >=35){
        return "過度肥胖";
    }
}


// 呈現結果
function calculateBMI(){
    var height = document.querySelector('#bodyHeight').value;
    var weight = document.querySelector('#bodyWeight').value;
    var result = document.querySelector('#resultText');
    
    // 防呆機制-怕誤按計算鈕等問題，而產生NAN(不是一個數字)的狀況產生。
    if((height != '') && (weight != '')){
        result.innerHTML = bmi(height, weight);
    }else{
        alert('請輸入數值！');
    }

    
    // 呈現結果1：BMI值
    result.innerHTML = bmi(height, weight);
    // 呈現結果2：判斷值
    analysisText.innerHTML =  checkBMI(bmi(height, weight));
}

