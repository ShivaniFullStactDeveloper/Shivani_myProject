let currentCount = 1;
// array
let student =[ <tr>
    <td id="sr-no">1</td>
    <td id="roll-no">001</td>
    <td id="name"></td>
    <td id="number"></td>
    <td id="date"></td>
    <td id="mail-id"></td>
    <td id="education"></td>
    <td id="add"></td>
</tr>];

// first page show
function formDisplay(){
    document.getElementById("page-One").hidden=false;
    document.getElementById("page-Two").hidden=true;
}

// inputing data
function inputData(){
    // dictionary
    currentCount++;

    console.log("inputdata");
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
    student.push('')
    

    for(let i=0; i < student.length; i++){
        let output = student[i];
        
        console.log(student,information);

        document.getElementById("name").innerHTML= output.firstName + output.lastName; 
        document.getElementById("number").innerHTML= output.contactNo;  
        
    }
}

// sec page show
function listDisplay(){
    console.log("listDisplay");
    document.getElementById("page-One").hidden=true;
    document.getElementById("page-Two").hidden=false;

   
}


window.onload = function(){
    formDisplay();
   }