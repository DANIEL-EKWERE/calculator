function addNum(numb){
    result = document.getElementById('answer').value;
    result += numb;
    document.getElementById('answer').value = result;
}

function calculate(){

    try{
        result = eval(result);
    document.getElementById('answer').value = result;
    }catch(err){
        alert('invalid')
    }
    
}

function deleteButton(){
    result = result.slice(result.lenght - 1, -1);
    document.getElementById('answer').value = result
}

function clearAll(){
    result = '';
    document.getElementById('answer').value = result;
}

// function lightmode(){
// //  document.getElementById('button3').style.background = "red";
//   var bg = document.getElementById('calculator');
//   bg.style.background = '#ecf0f3';


// }

// function darkmode(){
//    var lm = document.getElementById('button3');
//    var bg = document.getElementById('calculator');
//    bg.style.background = '#121838';
//      lm.style.background = '#ecf0f3';

//     bg.style.boxShadow = "-5px -5px 12px rgba(255, 255, 255, 0.1)";
//     bg.style.boxShadow = "5px 5px rgb(0, 0, 0,.16)";
// }