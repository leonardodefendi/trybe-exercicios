# def find_pares(n):
#     count = 0
#     for number in range(1, n + 1):
#         if number % 2 == 0:
#             count += 1
#     return count


# print(find_pares(4))


# COM RECURSIVIDADE
def find_pares(n):
    if n == 1:
        return 0
    elif n % 2 == 0:
        return 1 + find_pares(n - 1)
    else:
        return find_pares(n - 1)


print(find_pares(6))
