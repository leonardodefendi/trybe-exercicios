class Ventilador:
    def __init__(self, cor, potencia, preco) -> None:
        self.__cor = cor
        self.potencia = potencia
        self.preco = preco

    @property
    def cor(self):
        return self.__cor

    @cor.setter
    def cor(self, nova_cor):
        self.__cor = nova_cor


class Pessoa:
    def __init__(self, nome, saldo_na_conta) -> None:
        self.nome = nome
        self.__saldo_na_conta = saldo_na_conta
        self.ventilador = None

    def comprar_ventilador(self, ventilador: Ventilador):
        if ventilador.preco <= self.__saldo_na_conta:
            self.__saldo_na_conta -= ventilador.preco
            self.ventilador = ventilador
            self.ventilador.cor = "Azul"
            print(self.ventilador.cor)

    def __str__(self):
        return f"{self.nome} - possui {self.__saldo_na_conta} reais em conta"


novo_ventilador = Ventilador("Branco", 200, 300)
pessoa_compradora = Pessoa("Leonardo", 1800)

pessoa_compradora.comprar_ventilador(novo_ventilador)

pessoa_compradora.ventilador.cor = "Bege"

print(pessoa_compradora.ventilador.cor)
