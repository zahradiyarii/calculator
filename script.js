let boxResult=document.getElementById("box-result");
let sin=document.querySelector("#sin");
let pow=document.querySelector('#pow')

sin.addEventListener('click',function (){
    boxResult.value=eval(boxResult.value);
    boxResult.value=Math.sin(boxResult.value*Math.PI/180);
})

pow.addEventListener('click', function (){
    boxResult.value=eval(boxResult.value)+"**"
})
