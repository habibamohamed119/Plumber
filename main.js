var mynav = document.getElementById("mynav")
var num1 =document.getElementById("num1")
var num2 =document.getElementById("num2")
var num3 =document.getElementById("num3")
var num4 =document.getElementById("num4")


window.onscroll =function () {
    var y = window.scrollY;
    console.log(y)

    if (y > 200) {
        mynav.classList.replace("bg-transparent","darkk");
    } else {
        mynav.classList.replace("darkk" ,"bg-transparent");
        
    }
    if(y>800){
    var newnum1 = 2000;
    function changenum1() {
        newnum1 += 1;
        num1.innerHTML = newnum1;
        if(newnum1==2536){
            clearInterval(interval1)
        }

        
    }
    var interval1= setInterval(changenum1 ,1)


    var newnum2 = 6000;
    function changenum2() {
        newnum2 += 1;
        num2.innerHTML = newnum2;
        if(newnum2==6784){
            clearInterval(interval2)
        }

        
    }
    var interval2= setInterval(changenum2 ,1)

    var newnum3 = 1000;
    function changenum3() {
        newnum3 += 1;
        num3.innerHTML = newnum3;
        if(newnum3==1059){
            clearInterval(interval3)
        }

        
    }
    var interval3= setInterval(changenum3 ,1)

    var newnum4 = 11000;
    function changenum4() {
        newnum4 += 1;
        num4.innerHTML = newnum4;
        if(newnum4==12239){
            clearInterval(interval4)
        }

        
    }
    var interval4= setInterval(changenum4 ,1)
}
}


var submitting = document.getElementById("submitting")
function writeWordOnSubmit() {
    submitting.style.display = "block";
    
}

