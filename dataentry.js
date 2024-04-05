// array
let student =[];

// first page show
function formDisplay(){
    document.getElementById("page-One").hidden=false;
    document.getElementById("page-Two").hidden=true;
}

// 
function inputData(){
    // dictionary
    let information = {};
    // inputs
    information["firstName"] = document.getElementById("first-name").value;
    information["lastName"] = document.getElementById("last-name").value;
    information["contactNo"] = document.getElementById("contact").value;
    information["birth"] = document.getElementById("dob").value;
    information["email"] = document.getElementById("email-id").value;
    information["education"] = document.getElementById("edu-details").value;
    information["address"] = document.getElementById("address").value;

    // push 
    student.push(information);
    console.log(student,information);
}

// sec page show
function listDisplay(){
    document.getElementById("page-One").hidden=true;
    document.getElementById("page-Two").hidden=false;

    for(i=0; i < student.length; i++){
        let output = student[i];

        document.getElementById("name").innerHTML= output.firstName + output.lastName; 
        document.getElementById("number").innerHTML= output.contactNo;  
        console.log( output.firstName + output.lastName ,output[i].contactNo );
    }
}


window.onload = function(){
    formDisplay();
   }