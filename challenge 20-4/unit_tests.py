from functies import *

# test 1: getNumberOfCharacters
if getNumberOfCharacters('aap') == 3:
    print("Test 1 geslaagd")
else:
    print("Deze test is niet geslaagd")

# schrijf zelf nog wat extra testen voor getNumberOfCharacters


# test 2: getNumberOfSentences
if getNumberOfSentences(getText('easy')) == 14:
    print("Test 2 geslaagd")
else:
    print("Deze test is niet geslaagd")

# schrijf zelf nog een extra testen voor getNumberOfSentences (gebruik test.txt).
if getNumberOfSentences(getText('test.txt')) == 7:
    print("test 2.5 geslaagd")
else:
    print("test is niet geslaagd")

# test 3: getNumberOfWords
print(getNumberOfWords(getText('difficult1.txt')))
if getNumberOfWords(getText('difficult1.txt')) == 82:
    print("Test 3 geslaagd")
else:
    print("Deze test 3 is niet geslaagd")

if getNumberOfWords(getText('easy1.txt')) == 11:
    print("Test 4 geslaagd")
else:
    print("Deze test 4 is niet geslaagd")

# schrijf zelf nog een extra testen voor getNumberOfWords (gebruik test.txt).
if getNumberOfWords(getText('test2.txt')) == 11:
    print("Test 4.5 geslaagd")
else:
    print("Deze test 4.5 is niet geslaagd")