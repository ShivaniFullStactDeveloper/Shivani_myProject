
    // globle variable
    let currentCount = 1;
    let bricksArray = ['<div class="brick"></div>']
// add bricks
    function addBrick(){
    
    currentCount++;
    bricksArray.push('<div class="brick"></div>');
    document.getElementById("right-container").innerHTML = bricksArray;

    document.getElementById("count").innerHTML= currentCount ;
    // COLOR CHANGE
    document.getElementById("count").style.color= "#FFDB00";
}
// remove bricks
function removeBrick(){
   
if(currentCount >=2){
    currentCount--;

    bricksArray.pop();
    document.getElementById("right-container").innerHTML = bricksArray;
    }

   

    document.getElementById("count").innerHTML= currentCount ;
    // color
    document.getElementById("count").style.color= "red";
}