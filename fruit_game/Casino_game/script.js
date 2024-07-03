const value1=document.getElementById("value1")
const value2=document.getElementById("value2")
const value3=document.getElementById("value3")


const startbutton=document.getElementById("Startbutton1")

const result=document.getElementById("result")

let values=["🍒","🍉","🍋","🍌"]

let animationid;

function getrandom(){
    return values[Math.floor(Math.random()*values.length)]
}
function slotmachine(){

    if(animationid) clearInterval(animationid);
    animationid=setInterval(()=>{

        value1.innerText=getrandom()
        value2.innerText=getrandom()

        value3.innerText=getrandom()
    },100)


    setTimeout(()=>{
        clearInterval(animationid)

        console.log(value1,value2,value3)
        // check the result

        checkresult()

    },1000)
}


function checkresult(){
    const val1=value1.innerText
    const val2=value2.innerText
    const val3=value3.innerText

    if(val1==val2&&val2==val3){
        result.textContent=" Congratulation You won the jackpot !  🎉🎉🎉"

    }

    else{
            result.textContent="Try Again ! 😢😢😞"
           

        
       
    }
}

    startbutton.addEventListener("click",slotmachine)