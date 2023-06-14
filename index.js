

let white = (document.querySelectorAll(".whiteButton")).length;
let black = (document.querySelectorAll(".midBlackButtonCustom")).length;
// alert(white+black);
for(var i = 0;i<white+black+4;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        // console.log(this.innerText+" = check");
        // console.log(this.innerHTML);
        clicked(this.innerText);
        buttonAnimation(this.className);
       
    }
    );
}

document.addEventListener("keypress",function(event){
    clicked(event.key);
    let x = event.key;
    x = x.toUpperCase();
    // console.log(event.key);
    let classKey;
    for(var i = 0;i<white+black+4;i++){
        let y = document.querySelectorAll("button")[i].innerText
        y = y.toUpperCase();
        if(x === y){
           classKey =  ( document.querySelectorAll("button")[i].className);
           buttonAnimation(classKey);
           break;
        } 
    }
    
    // return event.key;
})

function clicked(x){
    // console.log(x);
    let recordingStarted = false;
    
        if(x == "Record"){
            pres(x);
            document.querySelector(".myDet h2").innerHTML = "Recording Started!";
            document.querySelector(".myDet h2").style.color = "white";
            
            return;
        }else if(x == "Sound")
        {
            alert("You Can Increase or Decrease sound using volume button of Your Device");
            pres(x);
            return;
        }else if(x == "Save" && document.querySelector(".myDet h2").innerHTML == "Recording Started!"){
            pres(x);
            document.querySelector(".myDet h2").innerHTML = "Your recording has been saved Successfully!";
            document.querySelector(".myDet h2").style.color = "white";
            
            return;
        }else if(x == "Save")
        {
            pres(x);
            document.querySelector(".myDet h2").innerHTML = "Sorry, You have not started any Recording!";
            document.querySelector(".myDet h2").style.color = "yellow";
            
            return;
        }else if(x == "More"){
            pres(x);
            alert("More feature for virtual piano comming soooon...");
            
            return;
        }
        
    
    switch(x){
        case 'A':
        case 'a':
            var audio = new Audio('./pianoSounds/81.mp3');
            audio.play();
            break;
        case 'S':
        case 's':
            var audio = new Audio('./pianoSounds/82.mp3');
            audio.play();
            break;
        case 'D':
        case 'd':
            var audio = new Audio('./pianoSounds/83.mp3');
            audio.play();
            break;
        case 'F':
        case 'f':
            var audio = new Audio('./pianoSounds/84.mp3');
            audio.play();
            break;
        case 'G':
        case 'g':
            var audio = new Audio('./pianoSounds/85.mp3');
            audio.play();
            break;
        case 'L':
        case 'l':
            var audio = new Audio('./pianoSounds/86.mp3');
            audio.play();
            break;
        case 'K':
        case 'k':
            var audio = new Audio('./pianoSounds/87.mp3');
            audio.play();
            break;
        case 'J':
        case 'j':
            var audio = new Audio('./pianoSounds/88.mp3');
            audio.play();
            break;
        case 'H':
        case 'h':
            var audio = new Audio('./pianoSounds/89.mp3');
            audio.play();
            break;
        case 'P':
        case 'p':
            var audio = new Audio('./pianoSounds/90.mp3');
            audio.play();
            break;
        case 'O':
        case 'o':
            var audio = new Audio('./pianoSounds/91.mp3');
            audio.play();
            break;
        case 'I':
        case 'i':
            var audio = new Audio('./pianoSounds/92.mp3');
            audio.play();
            break;
        
        case 'U':
        case 'u':
            var audio = new Audio('./pianoSounds/93.mp3');
            audio.play();
            break;
        case 'Q':
        case 'q':
            var audio = new Audio('./pianoSounds/94.mp3');
            audio.play();
            break;
        case 'W':
        case 'w':
            var audio = new Audio('./pianoSounds/95.mp3');
            audio.play();
            break;
        case 'E':
        case 'e':
            var audio = new Audio('./pianoSounds/96.mp3');
            audio.play();
            break;
        case 'R':
        case 'r':
            var audio = new Audio('./pianoSounds/97.mp3');
            audio.play();
            break;
        case 'T':
        case 't':
            var audio = new Audio('./pianoSounds/98.mp3');
            audio.play();
            break;
        case 'Z':
        case 'z':
            var audio = new Audio('./pianoSounds/99.mp3');
            audio.play();
            break;
        case 'X':
        case 'x':
            var audio = new Audio('./pianoSounds/100.mp3');
            audio.play();
            break;
        case 'C':
        case 'c':
            var audio = new Audio('./pianoSounds/101.mp3');
            audio.play();
            break;
        case 'V':
        case 'v':
            var audio = new Audio('./pianoSounds/104.mp3');
            audio.play();
            break;
        case ';':
            var audio = new Audio('./pianoSounds/105.mp3');
            audio.play();
            break;
        case 'M':
        case 'm':
            var audio = new Audio('./pianoSounds/106.mp3');
            audio.play();
            break;
        case 'N':
        case 'n':
            var audio = new Audio('./pianoSounds/107.mp3');
            audio.play();
            break;
        case 'B':
        case 'b':
            var audio = new Audio('./pianoSounds/108.mp3');
            audio.play();
            break;
        case ']':
            var audio = new Audio('./pianoSounds/21.mp3');
            audio.play();
            break;
        case '[':
            var audio = new Audio('./pianoSounds/22.mp3');
            audio.play();
            break;
        case '/':
            var audio = new Audio('./pianoSounds/23.mp3');
            audio.play();
            break;
        case ')':
            var audio = new Audio('./pianoSounds/24.mp3');
            audio.play();
            break;
        case ':':
            var audio = new Audio('./pianoSounds/25.mp3');
            audio.play();
            break;
        case '!':
            var audio = new Audio('./pianoSounds/26.mp3');
            audio.play();
            break;
        case '@':
            var audio = new Audio('./pianoSounds/27.mp3');
            audio.play();
            break;
        case '#':
            var audio = new Audio('./pianoSounds/28.mp3');
            audio.play();
            break;
        case '$':
            var audio = new Audio('./pianoSounds/29.mp3');
            audio.play();
            break;
        case '%':
            var audio = new Audio('./pianoSounds/30.mp3');
            audio.play();
            break;
        case '&':
            var audio = new Audio('./pianoSounds/31.mp3');
            audio.play();
            break;
        case '*':
            var audio = new Audio('./pianoSounds/32.mp3');
            audio.play();
            break;
        case '=':
            var audio = new Audio('./pianoSounds/33.mp3');
            audio.play();
            break;
        case '-':
            var audio = new Audio('./pianoSounds/34.mp3');
            audio.play();
            break;
        case '+':
            var audio = new Audio('./pianoSounds/26.mp3');
            audio.play();
            break;
        case '~':
            var audio = new Audio('./pianoSounds/26.mp3');
            audio.play();
            break;
        case '(':
            var audio = new Audio('./pianoSounds/26.mp3');
            audio.play();
            break;
        case '1':
            var audio = new Audio('./pianoSounds/51.mp3');
            audio.play();
            break;
        case '2':
            var audio = new Audio('./pianoSounds/52.mp3');
            audio.play();
            break;
        case '3':
            var audio = new Audio('./pianoSounds/53.mp3');
            audio.play();
            break;
        case '4':
            var audio = new Audio('./pianoSounds/54.mp3');
            audio.play();
            break;
        case '5':
            var audio = new Audio('./pianoSounds/55.mp3');
            audio.play();
            break;
        case '6':
            var audio = new Audio('./pianoSounds/56.mp3');
            audio.play();
            break;
        case '7':
            var audio = new Audio('./pianoSounds/57.mp3');
            audio.play();
            break;
        case '8':
            var audio = new Audio('./pianoSounds/58.mp3');
            audio.play();
            break;
        case '9':
            var audio = new Audio('./pianoSounds/59.mp3');
            audio.play();
            break;
        case '0':
            var audio = new Audio('./pianoSounds/60.mp3');
            audio.play();
            break;
    
        // default:
        //     var audio = new Audio('./pianoSounds/71.mp3');
        //     audio.play();
    }
    
}


function buttonAnimation(currentKey){
    
    let i = 0;
    let firstClass = "";
    while(currentKey[i] != ' ' && i<currentKey.length){
        firstClass += currentKey[i];
        i++;
    }

    if(currentKey[i+1] == 'w' && currentKey[i+2] == 'h'){
       
        var activeButton = document.querySelector("."+firstClass);
        activeButton.classList.add("whitePressed");

        setTimeout(function(){
            activeButton.classList.remove("whitePressed")
        },200);

        
    }else if(currentKey[i+1] == 'm' && currentKey[i+2] == 'i') {

       
        var activeButton = document.querySelector("."+firstClass);
        activeButton.classList.add("blackPressed");

        setTimeout(function(){
            activeButton.classList.remove("blackPressed")
        },200);
    }
   

   
}

function pres(classValue){
        var activeButton = document.querySelector("."+classValue);
        activeButton.classList.add("funButton");

        setTimeout(function(){
        activeButton.classList.remove("funButton")
        },100);
}
var preloader = document.getElementById('loading');
function myFunction(){
   
    setTimeout(function (){
  
        // Something you want delayed.
        preloader.style.display = 'none';
                  
      }, 2000);
   

}



