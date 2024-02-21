# exercicio 1
def maiorNumber(n1, n2):
    if n1 > n2:
        return n1
    else:
        return n2


# exercicio 2
def mediaList(list):
    return sum(list) / len(list)


# exercicio3
def printQuarter(n):
    for pixel in range(1, n + 1):
        print(n * "*")


# exercicio4
def findNameLength(list_name):
    name_default = list_name[0]
    for name in list_name:
        if len(name) > len(name_default):
            name_default = name
    return name_default


# exercicio5
def paint_costs(area):
    can_price = 80
    required_liters = area / 3
    required_cans = required_liters // 18
    if required_liters % 18:
        required_cans += 1
    return required_cans, required_cans * can_price
