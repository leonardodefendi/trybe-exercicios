from abc import ABC, abstractclassmethod


class Database(ABC):
    @abstractclassmethod
    def execute(self, query): ...


class MYSQL(Database):
    def execute(self, query):
        print(f"Execuntando query{query} no mysql")


class MongoDB(Database):
    def execute(self, query):
        print(f"Executando query{query} no MongoDB")


def minha_func(database):
    if isinstance(database, Database):
        database.execute("QueryAletoria")
    else:
        print("Não é um banco de dados valido")


db1 = MYSQL()
db2 = MongoDB()

minha_func(db1)
minha_func(db2)
