def order_by_name(names):
    n = len(names)

    for orded_elements in range(n - 1):
        for item in range(0, n - 1 - orded_elements):
            if names[item] > names[item + 1]:
                current_name = names[item]
                names[item] = names[item + 1]
                names[item + 1] = current_name
    return names


test_names = list("zebra")
print("".join(order_by_name(test_names)))
