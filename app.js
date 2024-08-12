// Made the change for first step 
const nextBtn_1 = document.querySelector(".step-1-next")
const step1_Info = document.querySelector(".step-1-info")
const step2_Info = document.querySelector(".step-2-info")
const step1 = document.querySelector(".step-1")
const step2 = document.querySelector(".step-2")

nextBtn_1.addEventListener("click", function(){
    step1_Info.style.display = "none"
    step1.classList.remove("step-bg")
    // step1_Info.style.transform = "translateX(-200px)";   
    step2_Info.style.display = "block"
    step2.classList.add("step-bg")
})




// const formInput = document.querySelectorAll(".form-input")

// formInput.forEach(input => {
//     if(input.empty){
//         input.style.bordercolor = "red"
//     }
// })



// Made the change for first step 
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



// Switch yearly and monthly plan6
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