import random


class Televisao:
    def __init__(self, tamanho) -> None:
        self.tamanho = tamanho
        self.volume = random.randint(0, 100)
        self.canal = 1
        self.ligada = False

    def aumentar_volume(self):
        if self.volume >= 100:
            print("Volume max 99")
        else:
            self.volume += 1

    def diminuir_voulme(self):
        if self.volume <= 0:
            print("Volume minimo é 0")
        else:
            self.volue -= 1

    def modificar_canal(self, novo_canal):
        if novo_canal < 1 and novo_canal > 99:
            raise ValueError("Não foi possivel, canal deve estar entre 0 e 99")
        else:
            self.canal = novo_canal

    def ligar_desligar(self):
        if self.ligada:
            self.ligada = False
        else:
            self.ligada = True


tv1 = Televisao(32)

tv1.ligar_desligar()
print(tv1.ligada)
