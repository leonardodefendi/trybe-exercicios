from abc import ABC, abstractclassmethod
from math import pi


class FiguraGeometrica(ABC):
    @abstractclassmethod
    def area(self):
        raise NotImplementedError

    @abstractclassmethod
    def perimetro(self):
        raise NotImplementedError


class Quadrado(FiguraGeometrica):

    def __init__(self, lado):
        self.lado = lado

    def area(self):
        return self.lado**2

    def perimetro(self):
        return self.lado * 4


class Retangulo(FiguraGeometrica):
    def __init__(self, base, altura) -> None:
        self.base = base
        self.altura = altura

    def area(self):
        return self.base * self.altura

    def perimetro(self):
        return (self.altura * 2) + (self.base * 2)


class Circulo(FiguraGeometrica):
    def __init__(self, raio) -> None:
        self.raio = raio

    def area(self):
        return pi * (self.raio**2)

    def perimetro(self):
        return 2 * pi * self.raio
