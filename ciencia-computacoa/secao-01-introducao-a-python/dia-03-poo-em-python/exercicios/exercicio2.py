import statistics


class Estatistica:
    def __init__(self, numbers) -> None:
        self.numbers = numbers

    def media(self):
        return sum(self.numbers) / len(self.numbers)

    def mediana(self):
        return statistics.median(self.numbers)

    def moda(self):
        return statistics.mode(self.numbers)


calculate = Estatistica([10, 1, 2, 5, 3, 3, 2, 5, 5])
