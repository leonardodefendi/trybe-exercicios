import random

with open("words.txt", "r") as file:
    lista = file.readlines()
    WORDS = [linhas.strip() for linhas in lista]


def choose_word(words):
    secret_word = random.choice(words)
    scrambled_word = "".join(random.sample(secret_word, len(secret_word)))
    print(secret_word)
    print(scrambled_word)
    return secret_word, scrambled_word


def attempts():
    words_typed = []
    for attempt in range(3):
        answer = input("Digite qual é a palavra: ")
        words_typed.append(answer)
    return words_typed


def check_result(secret_word, guesses):
    if secret_word in guesses:
        print(f"Voce ganhou a palavra era: {secret_word}")
    else:
        print(f"Voce perdeu a palabra era: {secret_word}")


secret_word, scrambled_word = choose_word(WORDS)
print(f"A Palavra adivinhar é {scrambled_word}")
tentativa = attempts()
check_result(secret_word, tentativa)
