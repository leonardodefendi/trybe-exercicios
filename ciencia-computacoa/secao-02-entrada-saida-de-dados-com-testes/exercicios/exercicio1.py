nome = input("Digite um nome")


def print_name_parts(name):
    tamanho_palavra = len(name)
    for index in name:
        print(name[0:tamanho_palavra])
        tamanho_palavra -= 1


print_name_parts(nome)
