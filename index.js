const button = document.querySelectorAll(".button-press");
let val = 0, a = 0, total = 0,  i = 0;

button.forEach(element => {
    element.addEventListener('click', function(){
        val = element.innerHTML;

        if(i === 0){
            if(val != '=' && val != "AC" && val != "C"){
                document.querySelector(".enteredValue").innerHTML = val;
            }
            i = 1;
        }else if(i === 2){
            document.querySelector(".enteredValue").innerHTML = total;
            if(val != 'C' && val != '=' && total != 0){    
                document.querySelector(".enteredValue").innerHTML += val;
            }
            a = total;
            total = 0;
            i = 1;
        }else{
            if(val != '=' && val != 'AC' && val != "C"){
                document.querySelector(".enteredValue").innerHTML += val;
            }
        }
        calculation();
    });    
});

let resentSign = undefined;
function calculation(){
    if(val == '+'){
        total += a;
        resentSign = '+';
        a = 0;
    }else if(val == '-'){
        total -= a;
        resentSign = '-';
        a = 0;
    }else if(val == '%'){
        if(total === 0){
            total = a;
        }else{
            total /= a;
        }
        resentSign = '%';
        a = 0;
    }else if(val == 'x'){
        if(total === 0){
            total = a;
        }else{
            total *= a;
        }
        resentSign = 'x';
        a = 0;
    }else if(val == '.'){
        resentSign = '.';
        a = parseFloat(a);
    }else if(val == '='){
        if(a != 0){
            if(resentSign === '+'){
                total += a;
            }else if(resentSign === '-'){
                total -= a;
            }else if(resentSign === '%'){
                total /= a;
            }else if(resentSign === 'x'){
                total *= a;
            }else{
                total = a;   
            }
        }        
        document.querySelector(".ans").innerHTML = total;
        a = 0;
        i = 2;
    }else if(val === 'AC'){
        val = 0;
        a = 0;
        total = 0;
        i = 0;
        document.querySelector(".ans").innerHTML = 0;
        document.querySelector(".enteredValue").innerHTML = 0;
        resentSign="undefined"
    }else if(val === "C"){
        let s = document.querySelector(".enteredValue").innerHTML;
        if(s.length > 1){
            a = parseInt(a /10);
            document.querySelector(".enteredValue").innerHTML = s.substring(0, s.length - 1);
        }else{
            a = parseInt(a /10);
            document.querySelector(".enteredValue").innerHTML = 0;
        }
    }else{
        makeANumber(parseInt(val));
    }
}

function makeANumber(val){
    console.log(val);
    if(resentSign === '.'){
        val /= 10;
        a += val; 
    }else{
        a *= 10;
        a += val;
    }
}



