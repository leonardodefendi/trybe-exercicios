import csv

with open("graduacao_unb.csv", encoding="utf-8") as file:
    graduacao_reader = csv.reader(file, delimiter=",", quotechar='"')
    header, *data = graduacao_reader


group_by_departament = {}

for row in data:
    departament = row[15]
    if departament not in group_by_departament:
        group_by_departament[departament] = 0
    group_by_departament[departament] += 1

with open("departament_report.csv", "w", encoding="utf-8") as file:
    writer = csv.writer(file)
    headers = ["Departamento", "Total de Cursos"]

    writer.writerow(headers)

    for departament, grades in group_by_departament.items():
        row = [departament, grades]
        writer.writerow(row)
