class Liquidificador:
    def __init__(self, cor, potencia, tensao, preco):
        self.preco = preco
        self.__cor = cor
        self._potencia = potencia
        self._tensao = tensao
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__corrente_atual_no_motor = 0

    def ligar(self, velocidade):
        if velocidade > self.__velocidade_maxima or velocidade < 0:
            raise ValueError(
                f"Velocidade deve estar entre 0 e {self.__velocidade_maxima}"
            )

        self.__velocidade = velocidade
        self.__corrente_atual_no_motor = (
            (self._potencia / self._tensao) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True

    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0

    def esta_ligado(self):
        return self.__ligado

    @property
    def cor(self):
        return self.__cor.upper()

    @cor.setter
    def cor(self, nova_cor):
        self.__cor = nova_cor


class Pessoa:
    def __init__(self, nome, saldo_na_conta) -> None:
        self.nome = nome
        self.__saldo_na_conta = saldo_na_conta
        self.liquidificador = None

    def comprar_liquidificador(self, liquidificador: Liquidificador):
        if liquidificador.preco <= self.__saldo_na_conta:
            self.__saldo_na_conta -= liquidificador.preco
            self.liquidificador = liquidificador
            self.liquidificador.cor = "Azul"
            print(self.liquidificador.cor)

    def __str__(self):
        return f"{self.nome} - possui {self.__saldo_na_conta} reais em conta"


liquidificador_vermelho = Liquidificador("Vermelho", 250, 220, 100)
pessoa_cozinheira = Pessoa("Leonardo", 1000)
pessoa_cozinheira.comprar_liquidificador(liquidificador_vermelho)
print(pessoa_cozinheira)
