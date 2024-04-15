// array
let student = [];

// form page 
function formDisplay() {
    console.log("formDisplay");
    document.getElementById("page-One").hidden = false;
    document.getElementById("page-Two").hidden = true;
}

// Add data in form
function addData() {
    // dictionary
    
    let information = {};
    
    // inputs
    information["firstName"] = document.getElementById("first-name").value;
    information["lastName"] = document.getElementById("last-name").value;
    information["contactNo"] = document.getElementById("contact-no").value;
    information["birth"] = document.getElementById("birth-date").value;
    information["email"] = document.getElementById("email-id").value;
    
    // if(education == graduate){
    //     document.getElementById("edu-details").value = "Graduare";
    // }else{
    //     document.getElementById("edu-details").value = "PostGraduare";
    // }
    
    information["education"] = document.getElementById("edu-details").value;
    information["address"] = document.getElementById("address-l").value;

    student.push(information);

    console.log(student,information);

//clear form data
    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
    document.getElementById("contact-no").value = "";
    document.getElementById("birth-date").value = "";
    document.getElementById("email-id").value = "";
    document.getElementById("edu-details").value = "";
    document.getElementById("address-l").value = "";
}

//list page 
function listDisplay() {
    console.log("listDisplay");
    document.getElementById("page-One").hidden = true;
    document.getElementById("page-Two").hidden = false;
    // calling function
    showData();
}

// data show in list
function showData(){
    let tableOutput = "<table>";

    tableOutput = ["<thead><tr><th>Student Name</th><th>Contact No</th><th>DOB</th><th>Email </th><th>Education Details</th><th>Address</th> </tr></thead>"]
    
    for (let i = 0; i < student.length; i++) {
        let output = student[i];

        let outputString =
          '<tr><td class="name">' +
          output.firstName +
          " " +
          output.lastName +
          '</td><td class="mail-id">' +
          output.contactNo +
          '</td><td>' +
          output.birth +
          '</td><td>'+
          output.email +
          '</td><td>' +
          output.education +
          '</td><td>' +
          output.address +
          '</td></tr>';
        tableOutput += outputString;
        console.log("addData", output);
      }

      tableOutput += "</table>";

      document.getElementById("show-info").innerHTML = tableOutput;
    }

// first page show
window.onload = function () {
    formDisplay();
}

/* <th>Sr No</th><th>Roll No</th> */

document.getElementById("first-name").value = "";
document.getElementById("last-name").value = "";
document.getElementById("contact-no").value = "";
document.getElementById("birth-date").value = "";
document.getElementById("email-id").value = "";
document.getElementById("edu-details").value = "";
document.getElementById("address-l").value = "";