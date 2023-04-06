var aantal_giraffen = parseInt(prompt('hoeveel giraffen heb je geteld'));
var aantal_struisvogels = parseInt(prompt('hoeveel struisvogels het je geteld'));
var aantal_zebras = parseInt(prompt('hoeveel zebras heb je geteld'));

function poten(giraffen, struisvogels, zebras){
    return giraffen * 4 + struisvogels * 2 + zebras * 4;
}
var oplossing = poten(aantal_giraffen,aantal_struisvogels,aantal_zebras);
document.getElementById('opdracht').innerHTML = oplossing
