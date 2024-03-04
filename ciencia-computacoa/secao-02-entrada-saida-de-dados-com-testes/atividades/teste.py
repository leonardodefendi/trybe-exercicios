# name_input = input("Digite seu nome")


# for letter in name_input.lower():
#     print(letter)

numeros = input("Digite os valores aqui: ")
nums_array = numeros.split(" ")

sum = 0
for num in nums_array:
    if not num.isdigit():
        print(f"Erro ao somar os valores, {num} não é um digito")
    else:
        sum += int(num)


print(f"A soma dos valores válidos é {sum}")
