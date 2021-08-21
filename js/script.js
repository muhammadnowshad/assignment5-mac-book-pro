// Update Choice Function 
function UpdateChoice(price, id){
    let updateCostField = document.getElementById(id);
    let updateCostText = updateCostField.innerText;
    updateCostText = parseInt(updateCostText);
    if(price == 0){
        updateCostText = 0;
        updateCostField.innerText = updateCostText;
    } 
    else if(price == 20){
        updateCostText = 20;
        updateCostField.innerText = updateCostText;
    }
    else if(price == 100){
        updateCostText = 100;
        updateCostField.innerText = updateCostText;
    }
    else if(price == 180){
        updateCostText = 180;
        updateCostField.innerText = updateCostText;
    }
    calculateTotal();
}

function getInputValue(inputId){
    const updateInput = document.getElementById(inputId).innerText;
    console.log(updateInput);
    const updateInputValue = parseInt(updateInput);
    return updateInputValue;
}

function calculateTotal(){
    const memoryTotal = getInputValue("memoryCost");
    const storageTotal = getInputValue("storageCost");
    const deliveryTotal = getInputValue("deliveryCost");
    const subTotal = memoryTotal + storageTotal + deliveryTotal + 1299;
    document.getElementById('subTotalPrice').innerText = subTotal;
    document.getElementById('tolalPrice').innerText = subTotal;
    return subTotal;
}

document.getElementById('promoButton').addEventListener('click', function(){
    
    let promoInput = document.getElementById('promoInput');
    const promoInputValue = promoInput.value;

    if ( promoInputValue == 'stevekaku'){
        const promoDiscount = (calculateTotal() * 20) / 100;
        const total = calculateTotal() - promoDiscount;
        document.getElementById('tolalPrice').innerText = total;      
    }
});


// Memory part 
document.getElementById("memory8Gb").addEventListener('click', function () {
    UpdateChoice(0, "memoryCost");
});
document.getElementById("memory16Gb").addEventListener('click', function () {
    UpdateChoice(180, "memoryCost");
});

// Storage part
document.getElementById("storage256GB").addEventListener('click', function () {
    UpdateChoice(0, "storageCost");
});
document.getElementById("storage512GB").addEventListener('click', function () {
    UpdateChoice(100, "storageCost");
});
document.getElementById("storage1TB").addEventListener('click', function () {
    UpdateChoice(180, "storageCost");
});

//Delivery part
document.getElementById("deliveryFast").addEventListener('click', function () {
    UpdateChoice(0, "deliveryCost");
});
document.getElementById("deliveryUrgent").addEventListener('click', function () {
    UpdateChoice(20, "deliveryCost");
});



// // Memory part 
// function UpdateMemory(isIncreasing){
//     const memoryCostField = document.getElementById('memoryCost');
//     let memoryCostText = memoryCostField.innerText;
//     memoryCostText = parseInt(memoryCostText);
//     // console.log(memoryCostText);
//     if(isIncreasing == true){
//         memoryCostText = 0;
//         memoryCostField.innerText = memoryCostText;
//         // console.log(memoryCostText);
//     } 
//     else {
//         memoryCostText = 180;
//         memoryCostField.innerText = memoryCostText;
//         // console.log(memoryCostText);
//     }
//     const subTotalPrice = document.getElementById('subTotalPrice');
//     subTotalPrice.innerText = memoryCostText + 1299;
//     // console.log(subTotalPrice.innerText);
//     // memoryCostField.innerText = memoryCostText;
//     // console.log(memoryCostField.innerText);
// }

// document.getElementById("memory8Gb").addEventListener('click', function () {
//     UpdateMemory(true);
// });
// document.getElementById("memory16Gb").addEventListener('click', function () {
//     UpdateMemory(false);
// });


// // Storage part 
// function UpdateStorage(isIncreasing){
//     const storageCostField = document.getElementById('storageCost');
//     let storageCostText = storageCostField.innerText;
//     storageCostText = parseInt(storageCostText);
//     console.log(storageCostText);
//     if(isIncreasing == true){
//         storageCostText = 100;
//         storageCostField.innerText = storageCostText;
//         // console.log(storageyCostText);
//     } 
//     else {
//         storageCostText = 180;
//         storageCostField.innerText = storageCostText;
//         console.log(storageCostText);
//     }
//     const subTotalPrice = document.getElementById('subTotalPrice');
//     subTotalPrice.innerText = storageCostText + 1299;
//     console.log(subTotalPrice.innerText);
//     // memoryCostField.innerText = memoryCostText;
//     // console.log(memoryCostField.innerText);
// }

// document.getElementById("storage512GB").addEventListener('click', function () {
//     UpdateStorage(true);
// });
// document.getElementById("storage1TB").addEventListener('click', function () {
//     UpdateStorage(false);
// });





// document.getElementById("storage256GB").addEventListener('click', function () {
//     const storageCostField = document.getElementById('storageCost');
//     const storageCostText = storageCostField.innerText;
//     const storageCost = parseInt(storageCostText);
//     storageCostField.innerText = 180;
    
//     console.log(storageCost);
// })
