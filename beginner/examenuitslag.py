goed = 1.2 
professioneel = 1.2 
onprofessioneel = 1.2
slecht = 1.2
go = False

while go == False:
    goed = (input("hoeveel excellente acties heb je behaald?"))
    if type(goed) != int:
        print("vul een heel getal in")
        goed = (input("hoeveel excellente acties heb je behaald?"))
    goed = int
    if goed >= 0 and goed <=6:
        break            
    else:
        print("dit is geen correcte hoeveelheid")

while type(professioneel) == str or type(professioneel) == float:
    professioneel = int(input("hoeveel professionele acties heb je behaald?"))
    if type(professioneel) == int or professioneel >= 0 and professioneel <= 8:
        break
    else:
        print("dit is geen correcte hoeveelheid")

while type(onprofessioneel) == str or type(onprofessioneel) == float:
    onprofessioneel = int(input("hoeveel onprofessionele acties heb je behaald?"))
    if type(onprofessioneel) == int or onprofessioneel >= 0 and onprofessioneel <=5:
        break
    else:
        print("dit is geen correcte hoeveelheid")

while type(slecht) == str or type(slecht) == float:
    slecht = int(input("hoeveel slechte acties heb je behaald?"))
    if type(slecht) == int or slecht >=0 and slecht <=2:
        break
    else:
        print("dit is geen correcte hoeveelheid")

uitslag = goed + professioneel - onprofessioneel - slecht
if professioneel == 8 and goed > 4 and onprofessioneel == 0 and slecht == 0:
    uiteindelijke_uitslag = 'goed'
elif slecht == 0 and uitslag > 7 and uitslag < 13 or slecht == 1 and uitslag > 9:
    uiteindelijke_uitslag = 'voldoende'
else: 
    uiteindelijke_uitslag = 'onvoldoende'

print(f'jouw totale aantal aan punten is {uitslag}')
print(f'de uiteindelijke uitslag is {uiteindelijke_uitslag}')