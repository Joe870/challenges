lijst_autos = [
    "Audi A3",
    "BMW 3 Series",
    "Chevrolet Camaro",
    "Dodge Charger",
    "Ford Mustang",
    "Honda Civic",
    "Infiniti Q50",
    "Jaguar F-Type",
    "Kia Optima",
    "Lamborghini Huracan",
    "Mercedes-Benz C-Class",
    "Ferrari F8 Tributo",
    "Nissan Altima",
    "Porsche 911",
    "Range Rover Evoque",
    "Subaru Impreza",
    "Ferrari SF90 Stradale",
    "Tesla Model S",
    "Toyota Corolla",
    "Volkswagen Golf",
    "Acura NSX",
    "Bentley Continental",
    "Cadillac Escalade",
    "Ferrari 488 GTB",
    "Dodge Challenger",
    "Ferrari 458",
    "GMC Sierra",
    "Hyundai Elantra",
    "Jeep Grand Cherokee",
    "Ferrari SF90 Stradale",
    "Koenigsegg Agera",
    "Lexus LS",
    "Maserati GranTurismo",
    "Nissan GT-R",
    "Pagani Huayra",
    "Rolls-Royce Ghost",
    "Smart ForTwo",
    "Tesla Model X",
    "Toyota Prius",
    "Volkswagen Jetta",
    "Alfa Romeo Giulia",
    "Bugatti Chiron",
    "Chevrolet Corvette",
    "Ferrari Portofino",
    "Fiat 500",
    "GMC Yukon",
    "Honda Accord",
    "Jaguar XJ",
    "Kia Soul",
    "Lamborghini Aventador",
    "Mercedes-Benz E-Class",
    "Nissan Maxima",
    "Porsche Panamera",
    "Range Rover Sport",
    "Subaru Legacy",
    "Tesla Model 3",
    "Toyota Camry",
    "Volkswagen Passat"
    ];

lijst_autos.sort();
text = ""
var container = document.createElement("div")
var lijst = document.createElement("ul")
container.appendChild(lijst);
document.body.appendChild(container);


for(i=0; i<lijst_autos.length; i++){
    li = document.createElement("li");
    li.innerText = lijst_autos[i];
    lijst.appendChild(li);

    if(lijst_autos[i].includes("Ferrari")){
        li.style.color = "red";
    }
}

