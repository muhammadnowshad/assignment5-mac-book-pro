
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
}
function getInputValue(inputId){
    const updateInput = document.getElementById(inputId).innerText;
    const updateInputValue = parseInt(updateInput);
    return updateInputValue;
}
function calculateTotal(){
    const memoryTotal = getInputValue("memoryCost");
    const storageTotal = getInputValue("storageCost");
    const deliveryTotal = getInputValue("deliveryCost");
    const subTotal = memoryTotal + storageTotal + deliveryTotal + 1299;
    document.getElementById('subTotalPrice').innerText = subTotal;
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
document.getElementById("memory8Gb").addEventListener('click', function () {
    UpdateChoice(0, "memoryCost");
});
document.getElementById("memory16Gb").addEventListener('click', function () {
    UpdateChoice(180, "memoryCost");
});
document.getElementById("storage256GB").addEventListener('click', function () {
    UpdateChoice(0, "storageCost");
});
document.getElementById("storage512GB").addEventListener('click', function () {
    UpdateChoice(100, "storageCost");
});
document.getElementById("storage1TB").addEventListener('click', function () {
    UpdateChoice(180, "storageCost");
});
document.getElementById("deliveryFast").addEventListener('click', function () {
    UpdateChoice(0, "deliveryCost");
});
document.getElementById("deliveryUrgent").addEventListener('click', function () {
    UpdateChoice(20, "deliveryCost");
});
