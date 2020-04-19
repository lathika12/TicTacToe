var clickcount = 2;
var obj = {one: [1,2,3] , two:[1,5,9], three:[1,4,7], four:[2,5,8], five:[3,5,7], six:[3,6,9], sev:[4,5,6], eht: [7,8,9]};
var arrX = [];
var arrO = [];
var clr = null;
var visited1 = false;
var visited2 = false;
var visited3 = false;
var visited4 = false;
var visited5 = false;
var visited6 = false;
var visited7 = false;
var visited8 = false;
var visited9 = false;

var btn = document.querySelector("#btn");
var rslt = document.querySelector("#rslt");
var qry1 = document.querySelector("#One");
var qry2 = document.querySelector("#Two");
var qry3 = document.querySelector("#Three");
var qry4 = document.querySelector("#Four");
var qry5 = document.querySelector("#Five");
var qry6 = document.querySelector("#Six");
var qry7 = document.querySelector("#Seven");
var qry8 = document.querySelector("#Eight");
var qry9 = document.querySelector("#Nine");

btn.addEventListener("click",function(){
  var rst = document.querySelector("#rst");
  qry1.innerHTML = "<h1><strong></strong></h1>";
  qry2.innerHTML = "<h1><strong></strong></h1>";
  qry3.innerHTML = "<h1><strong></strong></h1>";
  qry4.innerHTML = "<h1><strong></strong></h1>";
  qry5.innerHTML = "<h1><strong></strong></h1>";
  qry6.innerHTML = "<h1><strong></strong></h1>";
  qry7.innerHTML = "<h1><strong></strong></h1>";
  qry8.innerHTML = "<h1><strong></strong></h1>";
  qry9.innerHTML = "<h1><strong></strong></h1>";
  clickcount = 2;
  visited1 = false;
  visited2 = false;
  visited3 = false;
  visited4 = false;
  visited5 = false;
  visited6 = false;
  visited7 = false;
  visited8 = false;
  visited9 = false;
  arrO = [];
  arrX = [];
  clearInterval(clr);
  rslt.innerHTML = "";
});

qry1.addEventListener("click",function(){
  if(!visited1){
    if (clickcount%2 == 0) {
      qry1.innerHTML = "<h1><strong>X</strong></h1>";
      arrX.push(1);
    }else{
      qry1.innerHTML = "<h1><strong>O</strong></h1>";
      arrO.push(1);
    }
    visited1 = true;
    clickcount++;
    checkcount(clickcount);
  }
});

qry2.addEventListener("click",function(){
  if(!visited2){
    if (clickcount%2 == 0) {
      qry2.innerHTML = "<h1><strong>X</strong></h1>";
      arrX.push(2);
    }else{
      qry2.innerHTML = "<h1><strong>O</strong></h1>";
      arrO.push(2);
    }
    visited2 = true;
    clickcount++;
    checkcount(clickcount);
  }
});

qry3.addEventListener("click",function(){
  if(!visited3){
    if (clickcount%2 == 0) {
      qry3.innerHTML = "<h1><strong>X</strong></h1>";
      arrX.push(3);
    }else{
      qry3.innerHTML = "<h1><strong>O</strong></h1>";
      arrO.push(3);
    }
    visited3 = true;
    clickcount++;
    checkcount(clickcount);
  }
});


qry4.addEventListener("click",function(){
  if(!visited4){
    if (clickcount%2 == 0) {
      qry4.innerHTML = "<h1><strong>X</strong></h1>";
      arrX.push(4);
    }else{
      qry4.innerHTML = "<h1><strong>O</strong></h1>";
      arrO.push(4);
    }
    visited4 = true;
    clickcount++;
    checkcount(clickcount);
  }
});

qry5.addEventListener("click",function(){
  if(!visited5){
    if (clickcount%2 == 0) {
      qry5.innerHTML = "<h1><strong>X</strong></h1>";
      arrX.push(5);
    }else{
      qry5.innerHTML = "<h1><strong>O</strong></h1>";
      arrO.push(5);
    }
    visited5 = true;
    clickcount++;
    checkcount(clickcount);
  }
});

qry6.addEventListener("click",function(){
  if(!visited6){
    if (clickcount%2 == 0) {
      qry6.innerHTML = "<h1><strong>X</strong></h1>";
      arrX.push(6);
    }else{
      qry6.innerHTML = "<h1><strong>O</strong></h1>";
      arrO.push(6);
    }
    visited6 = true;
    clickcount++;
    checkcount(clickcount);
  }
});


qry7.addEventListener("click",function(){
  if(!visited7){
    if (clickcount%2 == 0) {
      qry7.innerHTML = "<h1><strong>X</strong></h1>";
      arrX.push(7);
    }else{
      qry7.innerHTML = "<h1><strong>O</strong></h1>";
      arrO.push(7);
    }
    visited7 = true;
    clickcount++;
    checkcount(clickcount);
  }
});

qry8.addEventListener("click",function(){
  if(!visited8){
    if (clickcount%2 == 0) {
      qry8.innerHTML = "<h1><strong>X</strong></h1>";
      arrX.push(8);
    }else{
      qry8.innerHTML = "<h1><strong>O</strong></h1>";
      arrO.push(8);
    }
    visited8 = true;
    clickcount++;
    checkcount(clickcount);
  }
});

qry9.addEventListener("click",function(){
  if(!visited9){
    if (clickcount%2 == 0) {
      qry9.innerHTML = "<h1><strong>X</strong></h1>";
      arrX.push(9);
    }else{
      qry9.innerHTML = "<h1><strong>O</strong></h1>";
      arrO.push(9);
    }
    visited9 = true;
    clickcount++;
    checkcount(clickcount);
  }
});

function checkcount(clickcount){

  if(clickcount === 11){
    changecol(" ITS A DRAW !!!!!  Please RESET to continue with fresh game. :) ")
  }else if(clickcount >= 7){
    if(arrX.length >= 3 || arrO.length >=3){
      if(chkKeys(arrX)){
        changecol("X WINSSS !!!!!");
      }else if(chkKeys(arrO)) {
        changecol("O WINSSS !!!!!");
      }
    }
  }

}

function chkKeys(arr){
    // arr = [4,2,6]
    //  console.log("Array is : " + arr);
    if(arr.length >= 3){

        for(key in obj){
          var v_ar = obj[key];
          //  console.log("Inside check keys : " + v_ar);
          // v_ar = [1,2,3]
          var cnt = 0;

          for(let i = 0; i < arr.length; i++){
            for(let k = 0; k < v_ar.length; k++){
              if(v_ar[k] === arr[i]){
                cnt++;
                //  console.log("Incremented COunt to : " + cnt);
                break;
              }
            }
          }
          if(cnt === 3){
            return true;
          }else{
            continue;
          }
        }
        return false;
    }else{
      return false;
    }
}

function changecol(ch){
  // console.log(ch);
  rslt.innerHTML = ch;
  rslt.style.color = 'red';

  visited1 = true;
  visited2 = true;
  visited3 = true;
  visited4 = true;
  visited5 = true;
  visited6 = true;
  visited7 = true;
  visited8 = true;
  visited9 = true;

  clr = setInterval("changeHeaderColor()",500);

}

function changeHeaderColor(){
    rslt.style.color = getRandomColor();
  console.log("Inside the function change header color . ... ");
}

function getRandomColor(){
  console.log("Inside the random color generator....");
  var letters = "0123456789ABCDEF";
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random()*16)];
  }
  console.log("Color is : " + color);
  return color
}
