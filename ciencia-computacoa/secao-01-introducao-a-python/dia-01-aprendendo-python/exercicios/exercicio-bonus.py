# exercicio1
def menor_numero(numbers):
    return min(numbers)


# print(menor_numero([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]))


# exercicio2
def make_triangle(n):
    for index in range(1, n + 1):
        print(index * "*")


# make_triangle(5)


# exercicio3
def sum_numbers(n):
    soma = 0
    for index in range(1, n + 1):
        soma += index
    return soma


# print(sum_numbers(5))

# exercicio 4


def fuel_price(type, liters):
    if type == "A":
        price = 1.90
        discount = 0.03
        if liters > 20:
            discount = 0.05
    elif type == "G":
        price = 2.50
        discount = 0.04
        if liters > 20:
            discount = 0.06
    total = price * liters
    total -= total * discount
    return total


print(fuel_price("A", 40))
