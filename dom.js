
    // globle variable
    let currentCount = 1;
    let bricksArray = ['<div class="brick"></div>']

    function addBrick(){
    
    currentCount++;
    bricksArray.push('<div class="brick"></div>');
    document.getElementById("right-container").innerHTML = bricksArray;

    document.getElementById("count").innerHTML= currentCount ;
    // COLOR CHANGE
    document.getElementById("count").style.color= "green";
}

function removeBrick(){
   
    if(currentCount >=2){
    currentCount--;

    bricksArray.pop();
    document.getElementById("right-container").innerHTML = bricksArray;
    }

   

    document.getElementById("count").innerHTML= currentCount ;
    document.getElementById("count").style.color= "red";
}