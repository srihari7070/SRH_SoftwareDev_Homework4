const alphabetFields = document.querySelectorAll('.alphabet-only');

// Function to allow only alphabet characters
function allowOnlyAlphabets(event) {
    event.target.value = event.target.value.replace(/[^a-zA-Z]/g, '');
}

// Attach the event listener to each input field
alphabetFields.forEach((field) => {
    field.addEventListener('input', allowOnlyAlphabets);
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to validate email on button click
function submitOnClick(){
    //alert("1");
    var isFormValid = false;

    const Fname = document.getElementById('Fname').value;
    const initial = document.getElementById('initial').value;
    const Lname = document.getElementById('Lname').value;
    const country = document.getElementById('Cdropdown').value;
    const matriculation = document.getElementById('matriculation').value;
    const semester = document.getElementById('semester').value;
    const program = document.getElementById('Pdropdown').value;
    const StartDate = document.getElementById('StartDate').value;
    
    const checkbox_media = document.getElementById('media').checked;
    const checkbox_ad = document.getElementById('ad').checked;
    const checkbox_agency = document.getElementById('agency').checked;
    const checkbox_other = document.getElementById('other').checked;

    
    var checkbox_value = '';
    if(checkbox_media)
        checkbox_value = checkbox_value + document.getElementById('media').value + ", ";
    if(checkbox_ad != '')
        checkbox_value = checkbox_value + document.getElementById('ad').value + ", ";
    if(checkbox_agency != '')
        checkbox_value = checkbox_value + document.getElementById('agency').value + ", ";
    if(checkbox_other != '')
        checkbox_value = checkbox_value + document.getElementById('other').value + ", ";

    const plan = document.getElementsByName('plan');
    let futureplan = '';
    for (let i = 0; i < plan.length; i++) {
        //alert("2");
        if (plan[i].checked) {
            futureplan = plan[i].value;
            break;
        }
    }

    const feedback = document.getElementById('feedback').value;

    if( Fname == '' || Lname == '' || country=='' || matriculation == '' || semester=='' || program == '' || StartDate=='' || checkbox_value=='' || futureplan=='')
    {
        isFormValid = false;
        document.getElementById('popup-heading-error').textContent = "Please fill in all required fields";
        document.getElementById('popupMessageError').style.display = "block";
        return;
    }

    const email = document.getElementById('email').value;
    const errorMessage = document.getElementById('errorMessage');
    if (isValidEmail(email)) {
        //alert("3");
        errorMessage.textContent = '';
        isFormValid = true;
    } else {
        errorMessage.textContent = 'Please enter a valid email address.';
        isFormValid = false;
        return;
    }

    if (isFormValid) {
        //alert("4");
        document.getElementById('popup-heading-success').textContent = "Form submitted successfully !";
        document.getElementById('popupMessageSuccess').style.display = "block";  
        const showData = document.getElementById('showData');
        showData.innerHTML = `
                <h3 style="color: Black;"><u>View the submitted data:</u></h3>
                <p><strong>First name : ${Fname}</strong> </p>
                <p><strong>Initial : ${initial}</strong> </p>
                <p><strong>Last name : ${Lname}</strong> </p>
                <p><strong>Country : ${country}</strong> </p>
                <p><strong>Matriculation number: ${matriculation}</strong> </p>
                <p><strong>Semester : ${semester}</strong> </p>
                <p><strong>Program : ${program}</strong> </p>
                <p><strong>Date started in : ${StartDate}</strong> </p>
                <p><strong>Email : ${email}</strong> </p>
                <p><strong>You hear about the program from : ${checkbox_value}</strong> </p>
                <p><strong>Your future plan : ${futureplan}</strong> </p>
                <p><strong>Your feedback : ${feedback}</strong> </p>
                
            `;
        focusOnDiv();
    } else {
        document.getElementById('popup-heading-error').textContent = "Please fill in all required fields";
        document.getElementById('popupMessageError').style.display = "block";   
    }
}

function restrictDate() 
{
    const datePicker = document.getElementById("StartDate");

    // Get today's date in YYYY-MM-DD format
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];

    // Set the max attribute to today's date
    datePicker.setAttribute("max", formattedDate);
}

function closepopupSuccess() 
{
    document.getElementById('popupMessageSuccess').style.display = "none";
}

// Close the modal if the user clicks anywhere outside of it
window.onclick = function(event) 
{
    if (event.target == document.getElementById('popupMessageSuccess')) {
        closeModal();
    }
    if (event.target == document.getElementById('popupMessageError')) {
        closeModal();
    }
}

function closepopupError() {
    document.getElementById('popupMessageError').style.display = "none";
}

function focusOnDiv() {
    const targetDiv = document.getElementById('showData');
    targetDiv.scrollIntoView({
        behavior: 'smooth',  // Scroll smoothly
        block: 'start'       // Align to the top of the viewport
    });
}

$(document).ready(function() {
    
});