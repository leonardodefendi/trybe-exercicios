class Conjunto:

    def __init__(self) -> None:
        self._items = [False for i in range(0, 1001)]
        self.last_element = 0

    def add(self, number):
        if not self._items[number]:
            self._items[number] = True
        if number > self.last_element:
            self.last_element = number

    def __str__(self):
        string = "{"

        for index, is_in_set in enumerate(self._items):
            if is_in_set:
                string += str(index)
                if index < self.last_element:
                    string += ", "
        string += "}"
        return string

    def __contains__(self, item):
        return self._items[item]

    def union(self, conj_b):
        new_conjunto = Conjunto()

        for index in range(1001):
            if self._items[index] or conj_b._items[index]:
                new_conjunto.add(index)

        return new_conjunto

    def intersection(self, conjunto_b):
        new_conjunto = Conjunto()

        for index in range(1001):
            if self._items[index] and conjunto_b._items[index]:
                new_conjunto.add(index)

        return new_conjunto


if __name__ == "__main__":
    numbers = [0, 10, 100, 1000]
    new_conj = Conjunto()

    for number in numbers:
        new_conj.add(number)

    new_conj2 = Conjunto()
    for i in range(9, 101):
        new_conj2.add(i)

    conj3 = new_conj.intersection(new_conj2)

    print(conj3)
