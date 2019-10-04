// //try to use function
// function add_or_substract(){
//     let a;
//     let b;
//     let result;
//         a = document.getElementById("a").value;
//         b = document.getElementById("b").value;
//     if(a<=1 && b>=3){
//         result = (parseFloat(a) + parseFloat(b));
//     }else{
//         result = (parseFloat(a) - parseFloat(b));
//     }
//     document.getElementById("result").innerHTML = result;
//     }

// use promt for input data from the keyboard and alert for output

let a = prompt("введіть змінну а:");
let b = prompt("введіть змінну b:");
    if(a<=1 && b>=3){
      alert(parseInt(a) + parseInt(b)); //use parseInt for correct addition of two numbers
    }else{
       alert( a - b);//substraction doing well by default
    }