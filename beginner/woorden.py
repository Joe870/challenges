woord1 = input("geef een woord op")
woord2 = input("geef nog een woord op")
letters = []
for x in range(len(woord1)):
    if woord1[x] in woord2:
        if woord1[x] not in letters:
            letters.append(woord1[x])

print(letters)