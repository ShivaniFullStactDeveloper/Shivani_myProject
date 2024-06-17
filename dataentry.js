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
    information["ageEnter"] = document.getElementById("age").value;
    information["education"] = document.getElementById("edu-details").value;
    information["birth"] = document.getElementById("birth-date").value;
    information["email"] = document.getElementById("email-id").value;

    // if(education == graduate){
    //     document.getElementById("edu-details").value = "Graduare";
    // }else{
    //     document.getElementById("edu-details").value = "PostGraduare";
    // }

    information["address"] = document.getElementById("address-l").value;

    student.push(information);

    console.log(student, information);

    //clear form data
    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
    document.getElementById("contact-no").value = "";
    document.getElementById("age").value = "";
    document.getElementById("edu-details").value = "";
    document.getElementById("birth-date").value = "";
    document.getElementById("email-id").value = "";
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
function showData() {
    let tableOutput = "<table>";

    tableOutput = ['<thead class="table-heading"><tr><th class="row">Student Name</th><th>Contact No</th><th>Age</th><th>DOB</th><th class="row">Email-Id </th><th>Education Details</th><th>Address</th> </tr></thead>']

    for (let i = 0; i < student.length; i++) {
        let output = student[i];

        let outputString =
            '<tr><td class="row">' +
            output.firstName +
            " " +
            output.lastName +
            '</td><td>' +
            output.contactNo +
            '</td><td>' +
            output.ageEnter +
            '</td><td>' +
            output.birth +
            '</td><td class="row">' +
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
