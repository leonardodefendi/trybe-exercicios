def soma_recur(n):
    if n == 0:
        return 0
    else:
        print(n)
        return n + soma_recur(n - 1)


print(soma_recur(4))
