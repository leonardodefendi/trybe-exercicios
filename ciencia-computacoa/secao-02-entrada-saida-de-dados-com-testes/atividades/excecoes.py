# while True:
#     try:
#         x = int(input("Por favor digite um número inteiro: "))
#         break
#     except ValueError:
#         # 'ValueError' é a exceção que ocorre quando a função int() recebe um
#         # valor que não pode ser traduzido para número inteiro
#         print("Oops! Esse não era um número inteiro. Tente novamente...")

reproved = []

try:
    with open("notas.txt", "r") as file:
        for line in file:
            student = line.split()
            if int(student[1]) < 6:
                reproved.append(f"{student[0]}\n")
except FileNotFoundError:
    print("Arquivo não encontrado")
else:
    print("Arquivo manipulado com sucesso")
finally:
    print("Fim da manipulação do arquivo")


with open("reproved.txt", "w") as file2:
    file2.writelines(reproved)
