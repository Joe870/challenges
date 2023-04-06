birds = [{'name':'mus','key':'m','count':0},
          {'name':'duif','key':'d','count':0},
          {'name':'koolmees','key':'k','count':0},
          {'name':'kraai','key':'i','count':0},
          ]
vraag =''

for vogels in range(len(birds)):
    print(f'{birds[vogels]["name"]} : {birds[vogels]["key"]}')

print('Bird counter until dot')

def get_bird_by_key(birds: list,):
    for vogels in range(len(birds)):
        if birds[vogels]['key'] != '':
            return vogels
        else:
            return None

while input !='.':
    vraag = input('welke vogel heeft uw geteld? vul een letter in of een .')
    find_bird = get_bird_by_key(birds)
    if find_bird != None :
        birds[vogels]['count'] +=1
        print(f'{birds[vogels]["name"]} : {birds[vogels]["count"]}')
    elif vraag == '.':
        break
    else: print('bird doesnt exist')

# TO DO:

# 1) print all birds with key and name

# 2) define function get_bird_by_key(birds: list, key:str) returns bird or None

# 3) repeat until given '.'
#       input key of bird 
#    find bird with get_bird_by_key
#    if bird found: 
#       increment bird count
#       show bird name and count

# 4) print all birds with name and count

# 5) print per bird also the percentage of the total count