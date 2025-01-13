const onlyAlpha = document.querySelectorAll('.alphabet-only');

function allowAlphOnly(event) {
    //alert("alpha here");
    event.target.value = event.target.value.replace(/[^A-Za-z]/g, '');
}

onlyAlpha.forEach((field) => {
    //alert("alpha here 2");
    field.addEventListener('input', allowAlphOnly);
});

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

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
        showData.innerHTML = 
            `   <div class="container">
                    <div class="heading_styles" id="acknowledgment">View the submitted data</div>
                        <div class="main_input_box">
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
                        </div>
                </div>
            `;
        focusOnDiv();
    } else {
        document.getElementById('popup-heading-error').textContent = "Please fill in all required fields";
        document.getElementById('popupMessageError').style.display = "block";   
    }
}

function restrictDate() 
{
    const date = document.getElementById("StartDate");
    const todayDate = new Date();
    const todayDate_format = todayDate.toISOString().split("T")[0];
    date.setAttribute("max", todayDate_format);
}

function closepopupSuccess() 
{
    document.getElementById('popupMessageSuccess').style.display = "none";
}

window.onclick = function(event) 
{
    if (event.target == document.getElementById('popupMessageSuccess')) {
        closepopupSuccess();
    }
    if (event.target == document.getElementById('popupMessageError')) {
        closepopupError();
    }
}

function closepopupError() {
    document.getElementById('popupMessageError').style.display = "none";
}

function focusOnDiv() {
    const targetDiv = document.getElementById('showData');
    targetDiv.scrollIntoView({ behavior: 'smooth',block: 'start'  });
}

function goToPersonalForm(){
    const targetDiv = document.getElementById('personalInfo');
    targetDiv.scrollIntoView({ behavior: 'smooth',block: 'start'  });
}

function goToTextInfo(){
    const targetDiv = document.getElementById('theoryQuestions');
    targetDiv.scrollIntoView({ behavior: 'smooth',block: 'start'  });
}

function goAcknowledgement(){
    const targetDiv = document.getElementById('acknowledgment');
    targetDiv.scrollIntoView({ behavior: 'smooth',block: 'start'  });
}

window.onload = function () {
    const feedbackValue = document.getElementById('feedback');
    feedbackValue.value = "This course was an overall journey into the world of software development. It teachs and guides one through the how's, why's and what's of software development. From computer theory to C language, to algorithms and data structures and to web development it covers all those bases. One understands all the boxes that needs to be checked in order to develop an application or webpage. I would have loved if the course had gone more in depth for coding, Data structures and algorithms and into competetive programming.";
};
