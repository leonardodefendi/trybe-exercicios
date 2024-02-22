import json

with open("pokemon.json") as file:
    pokemons = json.load(file)["results"]

grass_type_pokemons = []

for pokemon in pokemons:
    if "Grass" in pokemon["type"]:
        grass_type_pokemons.append(pokemon)

with open("grass_pokemons.json", "w") as file:
    json.dump(grass_type_pokemons, file)
