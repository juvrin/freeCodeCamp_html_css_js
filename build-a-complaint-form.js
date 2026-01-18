const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const fieldsetCheckboxes = document.getElementById("complaints-group");
const radiobuttons = document.querySelectorAll('input[type="radio"]');
const fieldsetRadioboxes = document.getElementById("solutions-group");
const otherComplaint = document.getElementById("other-complaint");
const complaintDescr = document.getElementById("complaint-description");
const otherSolution = document.getElementById("other-solution");
const solutionDescr = document.getElementById("solution-description");
const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const orderNr = document.getElementById("order-no");
const productCode = document.getElementById("product-code");
const quantity = document.getElementById("quantity");
const form = document.getElementById('form');


function changeBorderColor(e){
if(e.target.checkValidity()){
    e.target.style.borderColor = "green";
  }else{
    e.target.style.borderColor = "red";
  }
}

function changeBorderColorComplaint(){
if(otherComplaint.checked && complaintDescr.value.length>19){
    complaintDescr.style.borderColor = "green";
  }else{
    complaintDescr.style.borderColor = "red";
  }
}

function changeBorderColorSolution(){
if(otherSolution.checked && solutionDescr.value.length>19){
    solutionDescr.style.borderColor = "green";
  }else{
    solutionDescr.style.borderColor = "red";
  }
}


checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', (e)=> {
    if(Array.from(checkboxes).some(x => x.checked)){
      fieldsetCheckboxes.style.borderColor = "green";
    }else{
      fieldsetCheckboxes.style.borderColor = "red";
    }
  });
});

radiobuttons.forEach(radiobutton => {
  radiobutton.addEventListener('change', (e)=> {
    if(Array.from(radiobuttons).some(x => x.checked)){
      fieldsetRadioboxes.style.borderColor = "green";
    }else{
      fieldsetRadioboxes.style.borderColor = "red";
    }
  });
});


function validateForm(){
  const validationResults =  {
    "full-name": fullName.checkValidity(),
    "email": email.checkValidity(),
    "order-no":orderNr.checkValidity(),
    "product-code":productCode.checkValidity(),
    "quantity":quantity.checkValidity(),
    "complaints-group":Array.from(checkboxes).some(x => x.checked),
    "complaint-description": !otherComplaint.checked || complaintDescr.value.length>19,
    "solutions-group":Array.from(radiobuttons).some(x => x.checked),
    "solution-description": !otherSolution.checked || solutionDescr.value.length>19
  };
  return validationResults
}


function isValid(validationResults) {
  for (let key in validationResults) {
    if (validationResults[key] !== true) {
      return false;
    }
  }
  return true;
}

function handleSubmit(event) {
    event.preventDefault();
    const validationResults = validateForm();

    if (!isValid(validationResults)) {
        fullName.style.borderColor = validationResults["full-name"] ? "green" : "red";
        email.style.borderColor = validationResults["email"] ? "green" : "red";
        orderNr.style.borderColor = validationResults["order-no"] ? "green" : "red";
        productCode.style.borderColor = validationResults["product-code"] ? "green" : "red";
        quantity.style.borderColor = validationResults["quantity"] ? "green" : "red";
        complaintDescr.style.borderColor = validationResults["complaint-description"] ? "green" : "red";
        solutionDescr.style.borderColor = validationResults["solution-description"] ? "green" : "red";
        document.getElementById("message-box").textContent = "Please correct the highlighted fields.";
    } else {
        document.getElementById("message-box").textContent = "Form submitted successfully!";
        
    }
}

fullName.addEventListener("change", changeBorderColor);
email.addEventListener("change", changeBorderColor);
orderNr.addEventListener("change", changeBorderColor);
productCode.addEventListener("change", changeBorderColor);
quantity.addEventListener("change", changeBorderColor); 
complaintDescr.addEventListener("input", changeBorderColorComplaint);
solutionDescr.addEventListener("input", changeBorderColorSolution);
form.addEventListener("submit", handleSubmit);

