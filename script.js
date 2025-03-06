let stepOne = document.getElementById("num-1"),
    stepTwo = document.getElementById("num-2"),
    stepThree = document.getElementById("num-3"),
    stepFour = document.getElementById("num-4"),
    stepOneDiv = document.querySelector(".step1"),
    stepTwoDiv = document.querySelector(".step2"),
    stepThreeDiv = document.querySelector(".step3"),
    stepFourDiv = document.querySelector(".step4"),
    stepFiveDiv = document.querySelector(".step5"),
    nextBtnOne = document.querySelectorAll(".btn-1"),
    nextBtnTwo = document.querySelectorAll(".btn-2"),
    nextBtnThree = document.querySelectorAll(".btn-3"),
    confirmBtn = document.querySelectorAll(".btn-4"),
    backBtnTwo = document.querySelectorAll(".back-btn-2"),
    backBtnThree = document.querySelectorAll(".back-btn-3"),
    backBtnFour = document.querySelectorAll(".back-btn-4"),
    changeBtn = document.getElementById("change-btn"),
    subType = document.querySelectorAll(".sub"),
    addOnType = document.querySelectorAll(".add-on"),
    checkBox = document.querySelectorAll(".checkbox"),
    twoMonthsFree = document.querySelectorAll(".free"),
    durationCheckBox = document.getElementById("duration-check-box"),
    subMonthlyAmounts = document.querySelectorAll(".mo"),
    subYearlyAmounts = document.querySelectorAll(".yr"),
    subClicked = document.getElementById("sub-clicked"),
    durationClicked = document.getElementById("duration-clicked"),
    subAmountsClicked = document.getElementById("sub-amount"),
    addOnChecked = document.querySelectorAll(".add-on-checked"),
    monthlyValue = document.querySelectorAll(".mo-val"),
    yearlyValue = document.querySelectorAll(".yr-val"),
    totalValue = document.getElementById("total-val"),
    inputInfo = document.querySelectorAll(".info-input"),
    fieldMsg = document.querySelector(".field");


nextBtnOne.forEach(btn => {
    btn.addEventListener("click", function(){
        if(inputInfo.item(0).value === "" || inputInfo.item(1).value === "" || inputInfo.item(2).value === ""){
            fieldMsg.classList.add("show")
        }
        else{
            fieldMsg.classList.remove("show");
            stepTwoColor();
            stepOneDiv.classList.toggle("hide");
            stepTwoDiv.classList.toggle("show");
        }
    });
});

nextBtnTwo.forEach(btn => {
    btn.addEventListener("click", function(){
        stepThreeColor();
        stepTwoDiv.classList.toggle("show");
        stepThreeDiv.classList.toggle("show");
    });
});

nextBtnThree.forEach(btn => {
    btn.addEventListener("click", function(){
        stepFourColor();
        stepThreeDiv.classList.toggle("show");
        stepFourDiv.classList.toggle("show");
        calc();
    });
});

confirmBtn.forEach(btn => {
    btn.addEventListener("click", function(){
        stepOne.classList.remove("step-color");
        stepTwo.classList.remove("step-color");
        stepThree.classList.remove("step-color");
        stepFour.classList.remove("step-color");
        stepFourDiv.classList.toggle("show");
        stepFiveDiv.classList.toggle("show");
    });
});

backBtnTwo.forEach(btn => {
    btn.addEventListener("click", function(){
        stepOneColor();
        stepOneDiv.classList.toggle("hide");
        stepTwoDiv.classList.toggle("show");
    });;
});

backBtnThree.forEach(btn => {
    btn.addEventListener("click", function(){
        stepTwoColor();
        stepTwoDiv.classList.toggle("show");
        stepThreeDiv.classList.toggle("show");
    });;
});

backBtnFour.forEach(btn => {
    btn.addEventListener("click", function(){
        stepThreeColor();
        stepThreeDiv.classList.toggle("show");
        stepFourDiv.classList.toggle("show");
    });;
});

changeBtn.addEventListener("click", function(){
    stepTwoColor();
    stepTwoDiv.classList.toggle("show");
    stepFourDiv.classList.toggle("show");
});

durationCheckBox.addEventListener("change", function(){
    subType.forEach(sub => sub.classList.remove("sub-props"));
    if(durationCheckBox.checked === true){
        twoMonthsFree.forEach(free => free.classList.toggle("show"));
        subMonthlyAmounts.forEach(monthly => monthly.classList.toggle("hide"));
        subYearlyAmounts.forEach(yearly => yearly.classList.toggle("show"));
        durationClicked.innerText = "Yearly";
    }
    else{
        twoMonthsFree.forEach(free => free.classList.toggle("show"));
        subMonthlyAmounts.forEach(monthly => monthly.classList.toggle("hide"));
        subYearlyAmounts.forEach(yearly => yearly.classList.toggle("show"));
        durationClicked.innerText = "Monthly";
    }
});

subType.item(0).addEventListener("click", function(){
    subType.item(0).classList.toggle("sub-props");
    subType.item(1).classList.remove("sub-props");
    subType.item(2).classList.remove("sub-props");
    subClicked.innerText = "Arcade";
    if(durationCheckBox.checked === true){
        subAmountsClicked.innerText = "$90/yr";
    }
    else{
        subAmountsClicked.innerText = "$9/mo";
    }
});
