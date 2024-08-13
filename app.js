const nextBtn_1 = document.querySelector(".step-1-next")
const step1_Info = document.querySelector(".step-1-info")
const step2_Info = document.querySelector(".step-2-info")
const step1 = document.querySelector(".step-1")
const step2 = document.querySelector(".step-2")


const formInput = document.querySelector(".form-input");
const emailInput = document.querySelector(".email-input");
const telInput = document.querySelector(".tel-input")
const inputs = document.querySelectorAll(".input")



// Check the input field at the time of writing 
formInput.addEventListener("input", function() {
        if (formInput.value.trim() === "") {
            formInput.style.border = "1px solid red";
        } else {
            formInput.style.border = "1px solid var(--light-gray)";
        }
    });

emailInput.addEventListener("input", function(){
    if(!emailInput.value.includes("@")){
        emailInput.style.border = "1px solid red";
    }else{
        emailInput.style.border = "1px solid var(--light-gray)";
    }
})

telInput.addEventListener("input", function(){
    if(!telInput.value.match(/[^d+]/g) || telInput.value.match(/[A-Z]/i)){
        telInput.style.border = "1px solid red";
    }else{
        telInput.style.border = "1px solid var(--light-gray)";
    }
})




// When click the button check the all input field
nextBtn_1.addEventListener("click", function(e) {

    if (formInput.value.trim() === "") {
        formInput.style.border = "1px solid red";
    } else {
        formInput.style.border = "1px solid var(--light-gray)";
    }   
        

    if(!emailInput.value.includes("@")){
        emailInput.style.border = "1px solid red";
    }else{
        emailInput.style.border = "1px solid var(--light-gray)";
    }


    if (!telInput.value.match(/[^d+]/g) || telInput.value.match(/[A-Z]/i)) {
        telInput.style.border = "1px solid red";
    } else {
        telInput.style.border = "1px solid var(--light-gray)";
    }   

    e.preventDefault();
});



// Go to the second step when conditions are true
nextBtn_1.addEventListener("click", function() {
    let allInputsValid = true; // Flag to track if all inputs are valid

    inputs.forEach(input => {
        if(input.style.border !== "1px solid var(--light-gray)") {
            allInputsValid = false; // If any input is not valid, set the flag to false
        }
    }); 

    if (allInputsValid) {
        // If all inputs are valid, proceed to the next step
        step1_Info.style.display = "none";
        step1.classList.remove("step-bg");
        step2_Info.style.display = "block";
        step2.classList.add("step-bg");
    }
});


// Back to the first step
const backBtn_2 = document.querySelector(".step-2-back")
backBtn_2.addEventListener("click", function(){
    step1_Info.style.display = "block"
    step1.classList.add("step-bg")
    step2_Info.style.display = "none"
    step2.classList.remove("step-bg")
})



// Select Plan
const plans = document.querySelectorAll(".plan")
plans.forEach(plan => {
    plan.addEventListener("click", function(){

        plans.forEach(plan => plan.classList.remove("choosen-plan"))

        plan.classList.add("choosen-plan")
    })
})



// Switch yearly and monthly plan
const toggleSwitch = document.querySelector(".toggle-switch input");  // Target the input element inside the toggle switch
const yearlyPlan = document.querySelectorAll(".yearly-plan");
const monthlyPlan = document.querySelectorAll(".monthly-plan");

toggleSwitch.addEventListener("change", function () {
    if (toggleSwitch.checked) {
        // Show yearly plan, hide monthly plan
        yearlyPlan.forEach(plan => plan.style.display = "block");
        monthlyPlan.forEach(plan => plan.style.display = "none");
    } else {
        // Show monthly plan, hide yearly plan
        yearlyPlan.forEach(plan => plan.style.display = "none");
        monthlyPlan.forEach(plan => plan.style.display = "block");
    }
});