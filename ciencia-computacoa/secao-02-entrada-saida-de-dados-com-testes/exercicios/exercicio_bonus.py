import json
import random

with open("pokemon.json", "r") as file:
    data = json.load(file)["results"]


def attempts(data):
    pokemon_name = random.choice(data)["name"]
    print(pokemon_name)
    number_chances = len(pokemon_name)
    name_cut = 0
    while number_chances != name_cut:
        print(f"Letras do pokemon: {pokemon_name[0:name_cut]}")
        name_cut += 1
        chance = input("Digite o nome do pokemon: ")
        if chance == pokemon_name:
            return print("Parabéns você acertou")
        elif name_cut == number_chances:
            return print(f"Você errou, o pokemom era: {pokemon_name}")


attempts(data)
