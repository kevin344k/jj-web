
const init = async () => {   
     
    const { bitcoin: { blocks } } = mempoolJS({
      hostname: 'mempool.space'
    });
    const blocksTipHeight = await blocks.getBlocksTipHeight();
   let resultHeightBlock= JSON.stringify(blocksTipHeight, undefined, 2);
   console.log(resultHeightBlock);
const blockText=document.querySelector('.text-rewards-halvin')
//blockText.textContent= ` Bloque ${resultHeightBlock} de 840.000  ` 
let CurrentDate=Date.now() //fecha actual
let timeToHalvin=((1050000 - resultHeightBlock)*(10))*60
let dateH=CurrentDate+timeToHalvin*1000
console.log(dateH);
$(document).ready(function(){ 
    clock=$('.clock').FlipClock(timeToHalvin,{
        clockFace: 'DailyCounter',
        autoStart:true,
        countdown:true
        }
)})
  };
  init();

