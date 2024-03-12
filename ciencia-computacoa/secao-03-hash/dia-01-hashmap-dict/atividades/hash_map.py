class Employee:
    def __init__(self, id_num, name) -> None:
        self.id_num = id_num
        self.name = name


class HashMap:
    def __init__(self) -> None:
        self._buckets = [[] for i in range(10)]

    def get_address(self, id_num):
        return id_num % 10

    def insert(self, employee):
        address = self.get_address(employee.id_num)
        self._buckets[address].append(employee)

    def get_value(self, id_num):
        address = self.get_address(id_num)
        for item in self._buckets[address]:
            if item.id_num == id_num:
                return item.name
        return None

    def has(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address] is not None

    def update_value(self, id_num, new_name):
        address = self.get_address(id_num)
        for item in self._buckets[address]:
            if item.id_num == id_num:
                item.name = new_name
                return item.name
        return None


if __name__ == "__main__":
    employess = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]
    registry = HashMap()

    for id_num, name in employess:
        employee = Employee(id_num, name)
        registry.insert(employee)

    print(registry.update_value(23, "name30"))
