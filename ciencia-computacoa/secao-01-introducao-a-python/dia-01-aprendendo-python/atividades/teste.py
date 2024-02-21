import random
from collections import Counter

lista_de_numeros = []

for x in range(10000):
    lista_de_numeros.append(random.randint(0, 1000))

# print(lista_de_numeros)

counter = Counter(lista_de_numeros)
mais_comuns = counter.most_common()
elemento_mais_comum, numero_de_vezes = mais_comuns[0]
print(elemento_mais_comum)
