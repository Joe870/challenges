# een spelletje kost in de winkel 24,95, maar gamewinkels krijgen 40 procentkorting bij inkoop. 
# Het versturen vanuit de leverancier kost 1,00 voor het eerste spel, en 25 cent voor ieder volgende game. 
# bereken hoeveel de gamewinkel betaalt voor 60 spelletjes.
aantal_spellen = 60
prijs_spel = 24.95
korting = 0.6
leverancierskosten_eerste = 1
leverancierskosten_tweede = 0.25
korting_eerste_spel = prijs_spel * korting
korting_spellen = (aantal_spellen -1) * (prijs_spel * korting)
print(korting_spellen)
prijs_eerste_spel = korting_eerste_spel + leverancierskosten_eerste
uiteindelijk_leverancierskosten= (aantal_spellen-1) * leverancierskosten_tweede
uiteindelijke_prijs = prijs_eerste_spel + uiteindelijk_leverancierskosten + korting_spellen
print(uiteindelijke_prijs)


