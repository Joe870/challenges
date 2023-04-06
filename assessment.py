aantal_giraffen = int(input('hoeveel giraffen heb je geteld'))
aantal_struisvogels = int(input('hoeveel struisvogels het je geteld'))
aantal_zebras = int(input('hoeveel zebras heb je geteld'))
def poten(giraffen, struisvogels, zebras):
    return giraffen * 4 + struisvogels * 2 + zebras * 4 
print(poten(aantal_giraffen,aantal_struisvogels,aantal_zebras))
