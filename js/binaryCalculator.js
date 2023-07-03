let counter =0;
let res = document.getElementById("res");
let txt ="";
let result = 0;
let symbole = "";
let op = "";

//console.log("asssaaaa+dd".match(/-|\+|\*|\//ig)[0]);
//console.log("aa");
document.addEventListener("click", (e) =>{
  if (e.target.className === "btn") {
    if (e.target.innerHTML === "0" || e.target.innerHTML === "1") {
      if (counter == 2) {
        //res.innerHTML = "";
        counter = 0;
      }
      txt = e.target.innerHTML;
      res.append(txt);
    }
    if (txt !== "" &&counter === 0 &&(e.target.innerHTML==="+"||e.target.innerHTML==="-"||e.target.innerHTML==="*"||e.target.innerHTML==="/")) {
      counter++;
      op = e.target.innerHTML;
      res.append(`${op}`);
    }
    if (e.target.innerHTML === "=") {
      let symbole = res.innerHTML.match(/-|\+|\*|\//ig)[0];
      let str = res.innerHTML.replaceAll(/-|\+|\*|\//ig, ',');
      let nums = str.split(",");
      let result = calc(parseInt(nums[0],2), parseInt(nums[1],2),symbole);
      res.innerHTML = "";
      res.innerHTML = result.toString(2);
      counter =2;
    }
    if (e.target.innerHTML === "C") {
      res.innerHTML = "";
      counter = 0;
    }
  }
});

function calc(x,y,opp){
  if(opp === '+') return x+y;
  if(opp === '/') return x/y;
  if(opp === '-') return x-y;
  if(opp === '*') return x*y;
}

// var resultScreen=document.getElementById("res");
// var result=0;
// var operatorsSeq="";
// function clickZero()
// {
    
//     resultScreen.innerHTML+="0";
// }
// function clickOne()
// {
    
//     resultScreen.innerHTML+="1";
// }
// function clickSum()
// {
//     operatorSeq="+";
//     result=parseInt(resultScreen.innerHTML,2);
//     resultScreen.innerHTML+="+";
// }
// function clickSub()
// {
//      operatorSeq="-";
//     resultScreen.innerHTML+="-";
// }
// function clickMul()
// {
//     operatorSeq="*";
//      result=parseInt(resultScreen.innerHTML,2);
//     resultScreen.innerHTML+="*";
// }
// function clickDiv()
// {
//      operatorSeq="/";
//     resultScreen.innerHTML+="/";
// }
// function clickEql()
// {
//     var ans=0;
   
//   if(operatorSeq=='+')
//       {
//            var i =(resultScreen.innerHTML).indexOf("+");
   
//          var operand2=parseInt((resultScreen.innerHTML).substr(i+1),2);
//           ans =result+operand2;
//       }
//     else if(operatorSeq=='-')
    
//     {
//           var i =(resultScreen.innerHTML).indexOf("-");
//          var operand2=parseInt((resultScreen.innerHTML).substr(i+1),2);
//         ans =result-operand2;
//     }
     
//       else if(operatorSeq=='*')
    
//     {
//            var i =(resultScreen.innerHTML).indexOf("*");
//          var operand2=parseInt((resultScreen.innerHTML).substr(i+1),2);
//         ans =result*operand2;
//     }
//       else if(operatorSeq=='/')
    
//     {
//            var i =(resultScreen.innerHTML).indexOf("/");
//          var operand2=parseInt((resultScreen.innerHTML).substr(i+1),2);
//         ans =result/operand2;
//     }
    
   
//     resultScreen.innerHTML=ans.toString(2);
// }
// function clickClear()
// {
//     resultScreen.innerHTML="";
    
// }
