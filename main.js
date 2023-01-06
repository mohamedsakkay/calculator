

let res = document.querySelector('.result'); // we want to use res in event, so we should create the variable before setting the event //

res.addEventListener('click', () => {   
    
let x = parseInt (document.querySelector('.numberRight').value); // parseInt convert the number to int // 

let y = parseInt (document.querySelector('.numberLeft').value); // .value because we want to bring the value inserted in the element //

let op = document.querySelector('#operator').value;
                                                                
    if (x >=0 && y>=0) {                                        // && means and || means or //

    switch (op) {
        case '+' :
            res = x +y
            console.log(res);
            alert(res)
            break;
        case '-' :
                res = x - y
                console.log(res);
                alert(res)
            break; 
        case '*' :
                res = x * y
                console.log(res);
                alert(res)
            break;    
        case '/' : if (y==0) {                                // in order to make a condition after selecting the value '/', we put the if statement after the case // 
            console.log("It's over 9000 !")
            alert("It's over 9000 !")
        }
        else   {
                res = x / y
                console.log(res);
                alert(res)
               }
            break;
        case '%' : if (y==0) {
            console.log("It's over 9000 !")
            alert("It's over 9000 !")
        }
        else  {
                res = x % y
                console.log(res);
                alert(res)
              }
            break;
    }
    }
    else alert ('Error :(')
    
})

setInterval(function(){
    alert('please, use me!')
}, 30000)

