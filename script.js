const button = document.getElementById("box");
const ele = document.querySelectorAll('#button');
let item = document.getElementById("item")
let zero = document.getElementById("0");
let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let winnerss = document.getElementById('winner');
let sad = document.getElementById('item1');
// console.log(one);

let flag = true;
button.addEventListener('click',(e)=>{
    let curr = e.target;
    if(curr.classList.contains("dabba")){
        if(curr.innerText === ""){
            if(flag === true) {
                curr.innerText = "0";
                flag = false;
            }
            else {
                curr.innerText = "1";
                flag = true;
            }
            if(winner() === true) {
                setTimeout(()=>{
                    item.style.display = 'block';
                    button.style.display = 'none';
                    winnerss.innerText = `${curr.innerText} Is The Winner`
                    winnerss.style.color = "red";
                    winnerss.style.fontSize = "40px"
                    for(let i = 0; i < button.children.length; i++)  {
                            button.children[i].innerText = "";
                        console.log();
                    }
                },500)

                // const boxs = [...document.querySelectorAll('.dabba')]; 
                // boxs.forEach(box => box.innerText = "");
                setInterval(()=>{
                
                    item.style.display = 'none';
                    button.style.display = 'flex';
                    // one.innerText = "";
               },4000)
            }
            else if(draw() === true) {
                setTimeout(()=>{
                    item1.style.display = 'block';
                button.style.display = 'none';

                for(let i = 0; i < button.children.length; i++)  {
                    button.children[i].innerText = "";
                console.log();
            }
                },500)
            setInterval(()=>{
            
                item1.style.display = 'none';
                button.style.display = 'flex';
                // one.innerText = "";
           },5000)
            }
        }
    }
    
    
})

function winner() {
    
    if(
        ((one.innerText !== "") && (zero.innerText === one.innerText) && (one.innerText === two.innerText)) ||
         ((three.innerText !== "") && (three.innerText === four.innerText) && (four.innerText === five.innerText)) || 
         ((six.innerText !== "") && (six.innerText === seven.innerText) && (seven.innerText === eight.innerText))||
         ((zero.innerText !== "") && (zero.innerText === three.innerText) && (three.innerText === six.innerText)) ||
         ((one.innerText !== "") && (one.innerText === four.innerText) && (four.innerText === seven.innerText)) ||
         ((two.innerText !== "") && (two.innerText === five.innerText) && (five.innerText === eight.innerText)) ||
         ((zero.innerText !== "") && (zero.innerText === four.innerText) && (four.innerText === eight.innerText)) ||
         ((two.innerText !== "") && (two.innerText === four.innerText) && (four.innerText === six.innerText)) 
        
        ){
         return true;
        
    }
}

function draw() {
    if(zero.innerText !== "" && one.innerText !== "" && two.innerText!== "" && 
        three.innerText !== "" && four.inner !== "" && five.innerText!== "" &&
        six.innerText !== "" && seven.innerText !== "" & eight.innerText !== ""
    ){
        return true;
    }
}